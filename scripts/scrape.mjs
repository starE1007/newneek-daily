// 뉴닉 데일리(+요일별 비트·트렌드/솔티라이프) 아카이브를 렌더링해서 raw/newneek.md에 통째로 덮어쓴다.
// Claude 루틴은 이 파일만 읽으면 되고, 실패한 섹션은 실패 사유를 남겨 루틴의 대체 소스 규칙이 작동하게 한다.
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const ARCHIVES = [
  { id: '26847', label: '뉴닉 데일리', days: null },
  { id: '325254', label: '비트·트렌드', days: ['Tue', 'Fri'] },
  { id: '331760', label: '솔티라이프(재테크)', days: ['Wed'] },
];

const fmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Seoul',
  weekday: 'short',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
const parts = Object.fromEntries(fmt.formatToParts(new Date()).map(p => [p.type, p.value]));
const weekday = parts.weekday;
const dateStr = `${parts.year}-${parts.month}-${parts.day}`;
const scrapedAtKst = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'Asia/Seoul',
  dateStyle: 'short',
  timeStyle: 'short',
}).format(new Date());

const todaysArchives = ARCHIVES.filter(a => !a.days || a.days.includes(weekday));

async function scrapeOne(browser, archive) {
  const page = await browser.newPage();
  try {
    await page.goto(`https://page.stibee.com/archives/${archive.id}`, {
      waitUntil: 'networkidle',
      timeout: 60000,
    });
    await page.waitForTimeout(2500);

    const links = await page.$$eval('a[href]', as => as.map(a => a.href));
    const candidates = links.filter(h => /stib\.ee|\/share\/|emails/i.test(h));
    if (!candidates[0]) throw new Error('최신 회차 링크를 찾지 못함');

    await page.goto(candidates[0], { waitUntil: 'domcontentloaded', timeout: 60000 });
    const shareUrl = page.url();
    const text = await page.evaluate(() => document.body.innerText);
    if (!text || text.trim().length < 200) throw new Error('본문이 비어있거나 너무 짧음');

    return { ok: true, label: archive.label, shareUrl, text: text.trim() };
  } catch (err) {
    return { ok: false, label: archive.label, error: err.message };
  } finally {
    await page.close();
  }
}

const browser = await chromium.launch();
const results = [];
for (const archive of todaysArchives) {
  results.push(await scrapeOne(browser, archive));
}
await browser.close();

const sections = results
  .map(r => {
    if (r.ok) {
      return `## ${r.label} — ${dateStr}\n원문: ${r.shareUrl}\n\n${r.text}`;
    }
    return `## ${r.label} — ${dateStr}\n(스크래핑 실패: ${r.error})`;
  })
  .join('\n\n---\n\n');

const output = `<!-- scraped_at_kst: ${scrapedAtKst} -->\n<!-- date_kst: ${dateStr} (${weekday}) -->\n\n${sections}\n`;

await mkdir('raw', { recursive: true });
await writeFile('raw/newneek.md', output, 'utf8');

console.log(`${todaysArchives.length}개 섹션 스크래핑 완료 (성공 ${results.filter(r => r.ok).length}, 실패 ${results.filter(r => !r.ok).length})`);
