<!-- 이 파일이 「📰 데일리 뉴스레터」 루틴의 지시서 원본이다.
     예전에는 노션 페이지(3e9884e1…)에 있었고 루틴이 매 실행마다 그걸 읽었다.
     목적지가 hodu-system 앱으로 바뀌면서 노션을 파이프라인에서 걷어냈다 —
     규칙을 고치려면 **이 파일**을 고치면 된다. -->

**목적**: 효진이는 뉴닉 시사 앱의 정보량에 압도돼서 오히려 안 읽게 되는 문제를 풀려고 이 루틴을 만들었음. 목표는 남은 하반기 동안 경제·세계 흐름을 매일 5분씩, 밀도 있게, 확실하게 아는 것 — 얕은 3줄 요약이 아니라 배경·원리까지 이해하고 남는 게 핵심. 여기에 더해, 프리피아(외국인 단기체류용 선불 USIM·eSIM 판매사) 팀장으로서 인바운드 업무에 직접 영향 주는 트렌드도 같은 페이지에서 매일 3분 안에 스캔.
이 목적이 최우선. 아래 **고정 규칙**만 반드시 지키고, 나머지(본문 구성·소제목·순서·다룰 이슈·개수·검색어 등)는 위 목적을 이루는 방향으로 자율 판단.
---
# 🔒 고정 규칙 (이것만 반드시)
**1. 분량 상한** — "정보량에 압도되지 않기"가 이 루틴의 본질이라 상한은 목표 그 자체. 시사 파트(핵심 이슈들 + 딥다이브)는 공백 포함 2,500자 이내, 프리피아 업무 트렌드 파트는 800자 이내. 초과 금지.
**2. 출력 정체성** — 나중에 찾기·복습 체인 유지를 위해 고정. **결과물은 노션이 아니라 이 레포의 파일이다.**
- 이 세션에 붙어 있는 저장소(`starE1007/newneek-daily`)에 **파일 두 개를 커밋하고 push** 한다.
	- `digest/<오늘 KST 날짜>.md` (예: `digest/2026-08-14.md`) — 오늘자 본문
	- `digest/latest.md` — 방금 쓴 것과 **같은 내용**으로 덮어쓰기 (앱이 날짜 파일을 못 찾을 때 보는 자리)
- 파일 맨 위는 프론트매터. 이 세 줄이 없으면 앱이 제목·날짜를 못 집는다:
	```
	---
	title: 📰 2026.08.14 — 딥다이브 헤드라인 한 줄
	date: 2026-08-14
	---
	```
- 제목 양식(=`title`): 📰 YYYY.MM.DD — 딥다이브 헤드라인 한 줄 (예: 📰 2026.07.14 — 미국·이란 충돌, 기름값이 다시 문제다).
- 본문은 **마크다운**. 노션 블록 문법이 아니라 아래 「앱 본문 문법」을 따른다.
- **push 까지 끝나야 발행이다.** `git add digest/ && git commit && git push` 후 실패하면 원인을 적고 재시도할 것 — 커밋이 없으면 앱에는 아무것도 안 들어간다.
- 같은 날 다시 실행되면 같은 파일을 **덮어쓴다** (중복 발행이 아니라 갱신). 앱은 날짜당 한 장을 유지한다.
**3. 소스**
- 시사: 원본은 더 이상 직접 렌더링하지 않고, GitHub 공개 레포([starE1007/newneek-daily](https://github.com/starE1007/newneek-daily))에 커밋된 `raw/newneek.md`를 읽는 게 기본 — 저장소 연결(Select repository) 없이 Bash로 [raw.githubusercontent.com](http://raw.githubusercontent.com)의 해당 파일 URL을 curl로 직접 읽으면 됨 (공개 레포라 저장소 첲부 없이도 접근 가능). 매일 이른 아침 GitHub Actions가 헤드리스 브라우저로 뉴닉 데일리(+화·금 비트·트렌드, 수요일 솔티라이프/재테크)를 미리 렌더링해서 이 파일에 커밋해두고, 그 직후 이 루틴을 API로 실행시키는 구조라 실행 시점엔 이미 오늘자 스크래핑이 끝나 있어야 정상. 파일 상단 `<!-- date_kst: YYYY-MM-DD -->` 스탬프가 오늘 날짜와 같은지 먼저 확인하고, 섹션별로(뉴닉 데일리/비트·트렌드/솔티라이프) 이미 나뉘어 있는 본문을 그대로 읽어서 씀. 스탬프가 오늘 것이 아니거나 특정 섹션이 '(스크래핑 실패: ...)'로 표시돼 있으면 그 부분만 아래 대체 소스 규칙으로 넘어갈 것. 오늘자(최신) 회차가 없거나 접근이 안 되면 억지로 지어내진 말 것 — 그 선에서 '세상을 심도있게 확실히 알기'라는 목적을 가장 잘 채울 재료를 알아서 확보(안 다룬 최근 회차든, 신뢰할 만한 다른 매체든 상황 보고 판단). 원 소스(오늘자 뉴닉)가 아닌 재료로 채웠을 땐 맨 윗줄에 "🔁 대체 소스"만 표기.
- 업무 트렌드: 프리피아 인바운드 사업(항공·통신·비자/K-ETA·K-컬처·플랫폼·결제·SEO·관광정책 등)에 직접 영향 주는 오늘·어제자 한국 관련 소식을 아래 3겹으로 수집. 과거 연도 재탕 기사와 지방 한정 공고(서울·수도권·전국 외)는 제외.
	- ① 주요 신문사(큰 이슈용): 국내 — 한국경제·매일경제·연합뉴스 / 해외 — Reuters·닛케이 아시아·SCMP(아시아 인바운드 연관 높음). 유료지(WSJ·FT 등)는 헤드라인만 참고.
	- ② 여행 특화 매체(업계 니치용): 여행신문·트래블데일리 등 여행업계 전문지.
	- ③ 웹 검색(보완): 최신 이슈만 검색어 자유롭게 구성해 보완.
**4. 문체** — 반말. 전문용어는 처음 나올 때 괄호로 한 줄 풀이(예: "매파(금리 올리자는 쪽)"). 뉴닉·기사 본문 복붙 금지, 내 표현으로 압축.
**5. 퀴즈 코너** — 본문 완성 후 인터랙티브 HTML 퀴즈를 만들어 **레포에 커밋**하고 본문에서 임베드한다. 퀴즈는 분량 상한에 포함 안 됨.
- 파일: `digest/assets/<오늘 날짜>-quiz.html` (커밋·push 대상에 같이 넣을 것)
- 본문 삽입 위치: '🔗 참고' 아래 · '💼 프리피아 업무 트렌드' 위. 임베드 한 줄로:
	`▤ https://cdn.jsdelivr.net/gh/starE1007/newneek-daily@main/digest/assets/<오늘 날짜>-quiz.html 520`
	(raw.githubusercontent 는 HTML 을 그냥 텍스트로 내려줘서 화면에 안 뜬다 — jsDelivr 주소를 쓸 것)
- 퀴즈 규칙(예전 '퀴즈 모드' 페이지에 있던 것 — 이제 여기가 원본):
	- **목적**: 결과 암기가 아니라 개념·배경·원리(메커니즘)까지 이해. 결과·사실 확인 문항은 지양하되 메커니즘 이해에 꼭 필요한 전제(핵심 수치·일정)는 최소한으로 포함 가능.
	- 비율 객관식 8 : 주관식 2 (5문항이면 객관식 4 + 주관식 1).
	- 객관식은 4지선다. '무조건·전부' 같은 극단적 오답 금지, 수능 국어·영어 비판적 독해 스타일로 오답 구성. 출제 후 보기 4개를 다시 훑어 **그냥 이상해서 티 나는 보기**가 있으면 그 문항은 다시 만들 것. 정답 위치는 문항마다 랜덤 분산.
	- 주관식은 단답형(한 단어~한 문장)만, 서술형 금지.
	- HTML 은 클릭→제출→**자동 채점·해설**. 암기 방지를 위해 개념당 변형 문제 여러 개(문제은행) + 보기 순서 셔플 + '새 문제 출제' 버튼 포함.
	- 디자인은 매번 새로 짜지 말고 **직전 회차의 퀴즈 HTML**(`digest/assets/` 에서 가장 최근 것)을 뼈대로 재사용하고 문항만 교체.
**6. 중요 표시(굵게·형광펜)** — 매일 훑어 읽는 글이라 강약이 없으면 전부 같은 무게로 보이고, 그러면 5분 안에 남는 게 없다. **평문만 있는 회차는 안 된다.**
- **굵게**(`**…**`) — 핵심 숫자·고유명사·결론 조각. 한 문단에 **한두 개까지**. 다 굵으면 안 굵은 것과 같다.
- **형광펜**(`==색#글자==`) — 그날 **가장 중요한 한 문장**. 회차당 1~3개, 딥다이브에 최소 하나.
	- `==yellow_background#…==` 오늘의 핵심 / `==red_background#…==` 위험·경고 / `==blue_background#…==` 나한테 오는 영향("나랑 무슨 상관")
	- 색을 이 셋 말고 늘리지 말 것. 색이 늘면 색이 아무 뜻도 못 나른다.
- 제목·소제목·표 헤더에는 겹치지 말 것 — 이미 강조된 자리다.
- 형광펜은 **문장 단위**, 굵게는 **조각 단위**. 둘을 같은 데 겹쳐 쓰지 말 것.
---
# 🕊️ 나머지는 자율 (목적 기준으로 알아서)
- 고르기 전에 **레포 `digest/` 의 최근 며칠치 파일을 먼저 훑어** 이미 깊게 다룬 소재부터 파악. 그다음 오늘 뭘 깊게 파고(딥다이브) 뭘 짧게 훑을지, 몇 개를 다룰지는 그날 값어치로 판단. 기준은 “효진이가 오늘 이걸로 새로 알아갈 게 있나” — 이미 다룬 소재는 확전·타결·정책 확정처럼 진짜 새 전개가 있을 때만 다시 다루고, 새 정보 없이 어제 얘기가 반복되는 수준이면 과감히 스킵하고 더 굵직한 걸로.
- 딥다이브는 "무슨 일인지 → 쉬운 배경·비유 → 나랑 무슨 상관인지(물가·환율·월급·투자 등)"까지 닿게. 밀도 있게 이해하고 남기는 게 목적.
- 시각자료는 이해에 도움 되면 적극 활용 — 표·화살표 도식(A→B→C)·타임라인 같은 표·화살표 도식·타임라인 같은 단순 구조를 우선. 외부 이미지는 정부·통계·공신력 매체의 안 깨지는 차트 정도만, 장식용·출처 불명·깨질 링크는 지양.
- 🎨 시각자료 필수 트리거 (2026.07.24 추가) — 효진이는 지리·경제·시사 배경지식이 약하다는 전제로 쓸 것. 아래에 해당하면 글로만 끝내지 말고 딥다이브 안에 시각자료를 넣기. 공통 판단 기준: "글을 두 번 읽어야 머릿속에 그림이 그려지는가?" — 그러면 그림 하나로 대체. 단, 아래 목록은 체크리스트가 아니라 판단 보조 — 매일 억지로 채우지 말 것. '정보량에 압도되지 않기' 목적과 분량 상한이 항상 우선이고, 유일한 예외는 지리 필수 규칙뿐.
	- 🗺️ 지리·위치 관계(해협·항로·국경·분쟁 지역 등) → **무조건 필수.** 어디가 문제인지 표시한 개략 지도(정밀할 필요 없음 — 바다/육지 구분, 문제 지점 ⊘ 마커, 항로 화살표 수준) + 나한테 오는 영향 흐름도. '무슨 일이야?' 바로 아래 배치. 지도 아래에는 전체 위치를 실제 지도에서 볼 수 있게 해당 지점에 핀이 찍힌 구글맵 링크도 함께 넣기 — `https://www.google.com/maps/search/?api=1&query=장소명` 형식(장소명이 모호하면 위도,경도), 지점이 여러 개면 각각. 각 링크 옆에는 위치 힌트를 딱 한 줄만 — "어느 나라들 사이 · 뭐랑 뭐를 잇는 길목" 형식(예: 호르무즈 해협 — 이란과 아라비아반도 사이, 페르시아만↔인도양을 잇는 길목). 이보다 긴 지리 해설은 금지 — 본문·개략 지도와 중복되고 분량만 잡아먹음.
	- 📈 수치의 추이·비교가 핵심(금리·환율·유가 흐름, 한도 축소 전후 등) → 간단한 추이 차트나 전→후 막대 비교.
	- 🔗 여러 주체가 얽힌 구조(누가 누구에게 돈·압력·소송·보증 등) → 관계도. 예: 홈플러스–법원–메리츠 구도.
	- ⏳ 사건이 시간 순서로 전개(협상 결렬→파업 예고→시한 등) → 타임라인.
	- ⚙️ 경제 원리·메커니즘(금리→대출→소비처럼 A가 B를 거쳐 C로 전이되는 경로, 제도·정책의 작동 방식) → 단계 흐름도. 경제 개념은 아는 척 건너뛰지 말고 중간 단계까지 펼쳐서.
	- 형식: **자체 제작 HTML 을 `digest/assets/` 에 커밋하고 `▤ <jsDelivr 주소> <높이>` 로 임베드**하는 것이 기본(지도·차트·관계도). 간단한 건 마크다운 표·화살표 도식(A→B→C)으로도 충분하다. 장식용 시각자료는 금지 — 이해를 돕는 경우에만. 디자인·구성은 이 파일 맨 아래 '🎨 시각자료 뼈대 코드' 의 HTML 을 뼈대로 그대로 쓰고, 제목·텍스트·도식 내용만 그날 이슈로 교체.
	- 예시로 삼을 실물은 `digest/assets/` 의 최근 파일들 — 톤·밀도는 거기서 본다 (예전 노션 첨부는 더 이상 못 읽는다).
- 매일 핵심 개념·기억 포인트 하나는 남길 것 → 다음 날 복습 재료. 직전 데일리(📰 최신 호)의 그 포인트를 빈칸 문제로 내서 "어제 복습" 구성(첫 호면 "복습 없음 — 내일부터 시작").
	- 정답은 “토글”로 가리기
- 업무 트렌드도 최근 며칠치에 이미 나온 소식은 새 수치·새 시점 없으면 스킵. 임팩트 큰 것만 짧게, 새 사실 없거나 관련 약하면 억지로 안 채움.
---
## 🎨 시각자료 뼈대 코드 (이 느낌 그대로)
시각자료 HTML을 새로 만들 때 아래 두 코드의 뼈대(디자인 토큰·카드·배지·단계 흐름도·개략 지도 스타일)를 그대로 재사용하고, 제목·텍스트·도식 내용만 그날 이슈로 교체.
<details>
<summary>🗺️ 지도형 뼈대 — 기름길 두 곳 (호르무즈·바브엘만데브, 2026.07.22)</summary>
	```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>기름길 두 곳이 막힌다 — 한눈에 보는 지도</title>
<style>
  :root{
    --text:#2C2C2B; --text2:#7D7A75; --canvas:#FFFFFF; --soft:#F9F8F7; --surface2:#F0EFED;
    --border:#E6E5E3; --blue:#2783DE; --blue-soft:#E5F2FC; --orange:#D5803B; --orange-soft:#FBEBDE;
    --red:#E56458; --red-soft:#FCE9E7;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans KR","Apple SD Gothic Neo",Roboto,sans-serif;color:var(--text);background:var(--canvas);line-height:1.5;font-size:16px}
  .wrap{max-width:960px;margin:0 auto;padding:24px 24px 32px}
  .eyebrow{font-size:13px;font-weight:600;color:var(--blue);letter-spacing:.04em;margin-bottom:6px}
  h1{font-size:24px;line-height:1.3;margin-bottom:6px}
  .sub{font-size:15px;color:var(--text2);margin-bottom:20px}
  .card{border:1px solid var(--border);border-radius:12px;background:var(--canvas);overflow:hidden}
  .map-scroll{overflow-x:auto}
  .map-scroll svg{display:block;min-width:720px;width:100%;height:auto}
  .legend{display:flex;flex-wrap:wrap;gap:16px 24px;align-items:center;padding:12px 16px;border-top:1px solid var(--border);background:var(--soft);font-size:13px;color:var(--text2)}
  .legend .item{display:flex;align-items:center;gap:8px}
  .dash-sample{display:inline-block;width:34px;height:0;border-top:3px dashed var(--orange)}
  .section-title{font-size:17px;font-weight:700;margin:28px 0 12px}
  .choke-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .choke{border:1px solid var(--border);border-radius:12px;padding:16px 18px;background:var(--soft)}
  .choke .badge{display:inline-block;font-size:12px;font-weight:700;padding:3px 10px;border-radius:99px;margin-bottom:8px}
  .badge.blocked{background:var(--red-soft);color:#C6493E}
  .badge.risk{background:var(--orange-soft);color:#B06426}
  .choke h3{font-size:16px;margin-bottom:6px}
  .choke p{font-size:14px;color:var(--text2)}
  .choke p b{color:var(--text)}
  .choke p + p{margin-top:8px}
  .flow{display:flex;flex-wrap:wrap;align-items:stretch;gap:8px}
  .step{flex:1 1 150px;min-width:140px;border-radius:10px;padding:12px 12px;font-size:13.5px;font-weight:600;text-align:center;display:flex;flex-direction:column;justify-content:center;gap:4px}
  .step small{font-weight:500;font-size:12px;opacity:.85}
  .step.s1{background:var(--red-soft);color:#B23F34}
  .step.s2,.step.s3,.step.s4{background:var(--orange-soft);color:#9A5620}
  .step.s5{background:var(--red-soft);color:#B23F34}
  .arrow{align-self:center;color:#B9B6B1;font-size:16px;font-weight:700}
  .foot{margin-top:20px;font-size:12.5px;color:var(--text2)}
  @media (max-width:640px){
    .wrap{padding:16px 16px 24px}
    .choke-grid{grid-template-columns:1fr}
    h1{font-size:21px}
  }
</style>
</head>
<body>
<div class="wrap">
  <div class="eyebrow">2026.07.22 데일리 뉴스 · 시각자료</div>
  <h1>🗺️ 기름길 두 곳이 동시에 막힌다</h1>
  <div class="sub">호르무즈 해협은 이미 봉쇄, 바브엘만데브 해협은 봉쇄 위협 — 어디가 막혔고 왜 문제인지 지도로 보기</div>

  <div class="card">
    <div class="map-scroll">
    <svg viewBox="0 0 900 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="중동 지도: 호르무즈 해협과 바브엘만데브 해협 위치">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#D5803B"/>
        </marker>
      </defs>

      <!-- land base -->
      <rect x="0" y="0" width="900" height="620" fill="#F0EFED"/>

      <!-- Mediterranean (top-left) -->
      <path d="M0,0 L120,0 Q118,30 90,42 Q50,55 0,48 Z" fill="#D8E9F7" stroke="#B9D4EC" stroke-width="1.5"/>
      <!-- Suez canal -->
      <line x1="67" y1="44" x2="70" y2="80" stroke="#B9D4EC" stroke-width="9" stroke-linecap="round"/>
      <line x1="67" y1="44" x2="70" y2="80" stroke="#D8E9F7" stroke-width="6" stroke-linecap="round"/>

      <!-- Red Sea (outline + water) -->
      <path d="M70,78 C110,160 140,230 168,286 C200,370 280,470 372,532" fill="none" stroke="#B9D4EC" stroke-width="50" stroke-linecap="round"/>
      <path d="M70,78 C110,160 140,230 168,286 C200,370 280,470 372,532" fill="none" stroke="#D8E9F7" stroke-width="46" stroke-linecap="round"/>

      <!-- Persian Gulf + Strait of Hormuz + Gulf of Oman + Arabian Sea + Gulf of Aden -->
      <path d="M508,92 L518,74 L560,95 L610,130 L672,158 L742,162 L790,185 L850,200 L900,208
               L900,600 L560,600 L588,556 L504,570 L392,558 L372,532
               L420,517 L526,489 L640,452 L700,414 L780,330 L834,272
               L800,224 L764,192 L750,182 L735,188 L700,208 L660,224 L600,222 L580,200 L566,170 L540,130 Z"
            fill="#D8E9F7" stroke="#B9D4EC" stroke-width="1.5" stroke-linejoin="round"/>

      <!-- Yemen highlight -->
      <path d="M374,524 L420,511 L514,485 L498,428 L430,424 L376,452 Z" fill="#E56458" fill-opacity="0.14" stroke="#E56458" stroke-width="1.5" stroke-dasharray="4 3"/>

      <!-- Oil / shipping routes -->
      <path d="M556,118 C650,145 700,150 744,168 C790,192 815,225 832,272 C848,318 856,370 858,428" fill="none" stroke="#D5803B" stroke-width="3" stroke-dasharray="7 6" opacity="0.9" marker-end="url(#ah)"/>
      <path d="M680,578 C540,584 440,548 378,528 C296,466 214,376 166,284 C138,222 102,152 76,90" fill="none" stroke="#D5803B" stroke-width="3" stroke-dasharray="7 6" opacity="0.9" marker-end="url(#ah)"/>

      <!-- Sea labels -->
      <g font-style="italic" fill="#5B87B5" font-size="13" text-anchor="middle" font-family="inherit">
        <text transform="translate(196,322) rotate(52)">홍  해</text>
        <text transform="translate(622,168) rotate(21)">페르시아만</text>
        <text transform="translate(468,545)">아덴만</text>
        <text transform="translate(802,478)">아라비아해</text>
        <text transform="translate(46,20)" font-size="12">지중해</text>
      </g>

      <!-- Country labels -->
      <g fill="#7D7A75" font-weight="600" text-anchor="middle" paint-order="stroke" stroke="#F0EFED" stroke-width="4" font-family="inherit">
        <text x="300" y="305" font-size="16">사우디아라비아</text>
        <text x="655" y="46" font-size="15">이  란</text>
        <text x="52" y="152" font-size="14">이집트</text>
        <text x="130" y="432" font-size="14">아프리카</text>
        <text x="762" y="304" font-size="14">오만</text>
      </g>
      <g text-anchor="middle" font-family="inherit">
        <text x="438" y="462" font-size="14" font-weight="700" fill="#C6493E">예멘</text>
        <text x="438" y="478" font-size="12" fill="#C6493E">후티 반군 근거지</text>
      </g>

      <!-- Suez label -->
      <g font-family="inherit">
        <text x="128" y="32" font-size="13" font-weight="700" fill="#2C2C2B" text-anchor="middle" paint-order="stroke" stroke="#F0EFED" stroke-width="4">수에즈 운하</text>
        <text x="128" y="48" font-size="12" fill="#7D7A75" text-anchor="middle" paint-order="stroke" stroke="#F0EFED" stroke-width="4">지중해 → 유럽으로 가는 길</text>
        <line x1="98" y1="52" x2="76" y2="64" stroke="#9AA5B1" stroke-width="1.5"/>
      </g>

      <!-- Chokepoint marker ① Hormuz -->
      <g>
        <circle cx="748" cy="172" r="24" fill="#E56458" opacity="0.15"/>
        <circle cx="748" cy="172" r="13" fill="#E56458" stroke="#FFFFFF" stroke-width="3"/>
        <line x1="741" y1="179" x2="755" y2="165" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      </g>
      <!-- Chokepoint marker ② Bab-el-Mandeb -->
      <g>
        <circle cx="372" cy="532" r="24" fill="#E56458" opacity="0.15"/>
        <circle cx="372" cy="532" r="13" fill="#E56458" stroke="#FFFFFF" stroke-width="3"/>
        <line x1="365" y1="539" x2="379" y2="525" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      </g>

      <!-- Chip ① -->
      <g font-family="inherit">
        <line x1="783" y1="122" x2="754" y2="156" stroke="#9AA5B1" stroke-width="1.5"/>
        <rect x="676" y="74" width="214" height="46" rx="8" fill="#FFFFFF" stroke="#E6E5E3"/>
        <text x="783" y="93" font-size="14" font-weight="700" fill="#2C2C2B" text-anchor="middle">① 호르무즈 해협</text>
        <text x="783" y="111" font-size="12.5" font-weight="700" fill="#E56458" text-anchor="middle">이미 봉쇄됨 (美·이란 전쟁)</text>
      </g>
      <!-- Chip ② -->
      <g font-family="inherit">
        <line x1="276" y1="578" x2="356" y2="540" stroke="#9AA5B1" stroke-width="1.5"/>
        <rect x="48" y="560" width="228" height="46" rx="8" fill="#FFFFFF" stroke="#E6E5E3"/>
        <text x="162" y="579" font-size="14" font-weight="700" fill="#2C2C2B" text-anchor="middle">② 바브엘만데브 해협</text>
        <text x="162" y="597" font-size="12.5" font-weight="700" fill="#D5803B" text-anchor="middle">봉쇄 위협 (후티 선언)</text>
      </g>
    </svg>
    </div>
    <div class="legend">
      <span class="item"><svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#E56458"/><line x1="5.5" y1="14.5" x2="14.5" y2="5.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg> 봉쇄됨 / 봉쇄 위협 지점</span>
      <span class="item"><span class="dash-sample"></span> 주요 원유·물류 항로</span>
    </div>
  </div>

  <div class="section-title">두 해협, 뭐가 문제야?</div>
  <div class="choke-grid">
    <div class="choke">
      <span class="badge blocked">① 이미 봉쇄</span>
      <h3>호르무즈 해협 — 페르시아만의 유일한 출입구</h3>
      <p>사우디·UAE 등 걸프 산유국의 원유가 바다로 나가는 <b>사실상 하나뿐인 출구</b>이자 세계 최대 원유 병목. 미국·이란 전쟁 여파로 이미 막혀 있어.</p>
      <p>트럼프 대통령은 여길 지나는 배에 <b>'안전 통행료'</b>를 받겠다고 선언한 상태.</p>
    </div>
    <div class="choke">
      <span class="badge risk">② 봉쇄 위협</span>
      <h3>바브엘만데브 해협 — 홍해·수에즈로 가는 길목</h3>
      <p>예멘 후티 반군이 <b>사우디 해상 봉쇄</b>를 선언하면서 막힐 위기. 전 세계 물동량의 <b>약 7%</b>가 이 좁은 길을 지나가.</p>
      <p>여기가 막히면 아시아↔유럽 배들이 수에즈 운하 대신 <b>아프리카 남단으로 멀리 돌아가야</b> 해.</p>
    </div>
  </div>

  <div class="section-title">막히면 나한테 오는 영향</div>
  <div class="flow">
    <div class="step s1">두 기름길<br>동시 봉쇄·위협</div>
    <div class="arrow">→</div>
    <div class="step s2">원유·가스<br>공급 차질</div>
    <div class="arrow">→</div>
    <div class="step s3">국제유가 상승</div>
    <div class="arrow">→</div>
    <div class="step s4">물류비·생활물가<br>상승</div>
    <div class="arrow">→</div>
    <div class="step s5">물가·금리 부담 가중<small>기준금리 인상과 겹침</small></div>
  </div>

  <div class="foot">※ 지도는 이해를 돕기 위한 개략도 · 2026.07.22 오늘의 딥다이브 내용 기반</div>
</div>
</body>
</html>
	```
</details>
<details>
<summary>🏘️ 메커니즘·구조형 뼈대 — 똘똘한 한 채 (2026.07.24)</summary>
	```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>왜 규제할수록 '똘똘한 한 채'로 몰릴까</title>
<style>
  :root{
    --text:#2C2C2B; --text2:#7D7A75; --canvas:#FFFFFF; --soft:#F9F8F7; --surface2:#F0EFED;
    --border:#E6E5E3; --blue:#2783DE; --blue-soft:#E5F2FC; --orange:#D5803B; --orange-soft:#FBEBDE;
    --red:#E56458; --red-soft:#FCE9E7; --green:#46A171; --green-soft:#E8F1EC;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans KR","Apple SD Gothic Neo",Roboto,sans-serif;color:var(--text);background:var(--canvas);line-height:1.5;font-size:16px}
  .wrap{max-width:960px;margin:0 auto;padding:24px 24px 32px}
  .eyebrow{font-size:13px;font-weight:600;color:var(--blue);letter-spacing:.04em;margin-bottom:6px}
  h1{font-size:24px;line-height:1.3;margin-bottom:6px}
  .sub{font-size:15px;color:var(--text2);margin-bottom:20px}
  .section-title{font-size:17px;font-weight:700;margin:26px 0 12px}
  .section-title:first-of-type{margin-top:0}

  /* 보유세 30초 */
  .tax-row{display:flex;align-items:stretch;gap:10px;flex-wrap:wrap}
  .tax-box{flex:1 1 180px;border:1px solid var(--border);border-radius:10px;padding:12px 14px;background:var(--soft)}
  .tax-box b{display:block;font-size:14.5px;margin-bottom:2px}
  .tax-box span{font-size:13px;color:var(--text2)}
  .tax-op{align-self:center;font-size:20px;font-weight:700;color:#B9B6B1}
  .tax-box.result{background:var(--blue-soft);border-color:#CBE3F8}
  .tax-note{margin-top:10px;font-size:13px;color:var(--text2)}

  /* 메커니즘 */
  .mech{border:1px solid var(--border);border-radius:12px;padding:18px 20px;background:var(--canvas)}
  .mstep{display:flex;gap:14px;align-items:flex-start;position:relative;padding-bottom:18px}
  .mstep:last-of-type{padding-bottom:0}
  .mstep::before{content:"";position:absolute;left:15px;top:34px;bottom:2px;width:2px;background:var(--border)}
  .mstep:last-of-type::before{display:none}
  .mnum{flex:0 0 32px;width:32px;height:32px;border-radius:50%;background:var(--blue-soft);color:#1B6BB8;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center;position:relative;z-index:1}
  .mstep.hot .mnum{background:var(--red-soft);color:#C6493E}
  .mtxt{padding-top:4px;font-size:14.5px}
  .mtxt b{font-size:15px}
  .mtxt .mdesc{display:block;font-size:13.5px;color:var(--text2);margin-top:2px}
  .paradox{margin-top:16px;background:var(--red-soft);border-radius:10px;padding:12px 16px;font-size:14px;color:#B23F34}
  .paradox b{display:block;margin-bottom:2px;font-size:14.5px}

  /* 쟁점 */
  .vs-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .vs{border:1px solid var(--border);border-radius:12px;padding:16px 18px;background:var(--soft)}
  .vs .badge{display:inline-block;font-size:12px;font-weight:700;padding:3px 10px;border-radius:99px;margin-bottom:8px}
  .badge.push{background:var(--green-soft);color:#2F7A52}
  .badge.wait{background:var(--orange-soft);color:#B06426}
  .vs h3{font-size:15.5px;margin-bottom:6px}
  .vs p{font-size:13.5px;color:var(--text2)}
  .vs p b{color:var(--text)}

  /* 일정 */
  .timeline{display:flex;gap:8px;flex-wrap:wrap;align-items:stretch}
  .t-item{flex:1 1 220px;border:1px solid var(--border);border-radius:10px;padding:12px 14px;background:var(--soft)}
  .t-item .when{font-size:12.5px;font-weight:700;color:var(--blue);margin-bottom:2px}
  .t-item .what{font-size:14px}
  .t-item.next{background:var(--blue-soft);border-color:#CBE3F8}
  .t-arrow{align-self:center;color:#B9B6B1;font-size:16px;font-weight:700}

  .foot{margin-top:20px;font-size:12.5px;color:var(--text2)}
  @media (max-width:640px){
    .wrap{padding:16px 16px 24px}
    .vs-grid{grid-template-columns:1fr}
    h1{font-size:21px}
    .tax-op{align-self:center}
  }
</style>
</head>
<body>
<div class="wrap">
  <div class="eyebrow">2026.07.24 데일리 뉴스 · 시각자료</div>
  <h1>🏘️ 왜 규제할수록 '똘똘한 한 채'로 몰릴까</h1>
  <div class="sub">보유세가 뭐고, 다주택 규제가 왜 강남 집값을 더 밀어 올리는지 한 장으로 보기</div>

  <div class="section-title">보유세 30초 정리</div>
  <div class="tax-row">
    <div class="tax-box"><b>재산세</b><span>집 가진 사람 모두 내는 세금</span></div>
    <div class="tax-op">+</div>
    <div class="tax-box"><b>종부세</b><span>비싼 집에 추가로 붙는 세금</span></div>
    <div class="tax-op">=</div>
    <div class="tax-box result"><b>보유세</b><span>팔지 않고 갖고만 있어도 <b>매년</b> 내는 세금</span></div>
  </div>
  <div class="tax-note">팔 때 한 번 내는 양도세와 달리, 거래가 없어도 매년 나가 — 그래서 "팔지도 않았는데(이익이 실현 안 됐는데) 세금부터?"라는 논쟁이 나오는 거야.</div>

  <div class="section-title">'똘똘한 한 채' 쏠림 메커니즘</div>
  <div class="mech">
    <div class="mstep">
      <div class="mnum">1</div>
      <div class="mtxt"><b>다주택 규제·세금 강화</b><span class="mdesc">여러 채 가질수록 세 부담이 커짐</span></div>
    </div>
    <div class="mstep">
      <div class="mnum">2</div>
      <div class="mtxt"><b>여러 채 대신 비싼 한 채로 몰빵</b><span class="mdesc">같은 돈이면 세금 덜 무는 '똘똘한 한 채'가 유리해짐</span></div>
    </div>
    <div class="mstep">
      <div class="mnum">3</div>
      <div class="mtxt"><b>수요가 강남 같은 초고가 지역으로 집중</b><span class="mdesc">다들 '제일 좋은 한 채'를 찾으니 특정 동네로 쏠림</span></div>
    </div>
    <div class="mstep hot">
      <div class="mnum">4</div>
      <div class="mtxt"><b>그 동네 집값만 더 급등</b><span class="mdesc">집값 격차는 더 벌어짐</span></div>
    </div>
    <div class="paradox"><b>⚠️ 규제의 역설</b>집값 잡으려던 다주택 규제가, 오히려 초고가 한 채 쏠림을 만들어 특정 지역 집값을 더 밀어 올림 — 그래서 이번 토론회의 핵심 쟁점이 됐어.</div>
  </div>

  <div class="section-title">토론회에서 격돌한 두 입장</div>
  <div class="vs-grid">
    <div class="vs">
      <span class="badge push">쏠림을 누르자</span>
      <h3>초고가 1주택 보유세 누진 인상</h3>
      <p>비싸질수록 세율을 높여서(누진) '똘똘한 한 채' 쪽으로 몰리는 메리트를 줄이자는 절충안. 위 메커니즘의 <b>2번 단계를 끊자</b>는 접근.</p>
    </div>
    <div class="vs">
      <span class="badge wait">신중하자</span>
      <h3>"실현 안 된 이익에 세금부터?"</h3>
      <p>집값이 올랐어도 <b>팔기 전에는 손에 쥐는 돈이 없는데</b>, 보유세부터 올리면 소득 없는 1주택자 부담만 커진다는 우려.</p>
    </div>
  </div>

  <div class="section-title">다음 확인 포인트</div>
  <div class="timeline">
    <div class="t-item"><div class="when">7/23</div><div class="what">시민 140명 대토론회 — 100분 예정이 193분으로</div></div>
    <div class="t-arrow">→</div>
    <div class="t-item next"><div class="when">이달 말~다음 달 초</div><div class="what"><b>세제 개편안 발표</b> — 집값·전월세·자산 배분 영향 체크</div></div>
  </div>

  <div class="foot">※ 이해를 돕기 위한 개략도 · 2026.07.24 오늘의 딥다이브 내용 기반</div>
</div>
</body>
</html>
	```
</details>

---
# 📎 앱 본문 문법 (jin-system)

본문은 마크다운이다. 마크다운에 없는 것만 아래 기호로 얹는다 — 앱이 이걸 그대로 블록으로 그린다.

| 뜻 | 쓰는 법 |
|---|---|
| 토글(접기) | `▸ 제목` — 접힐 내용은 **두 칸 들여쓰기** |
| 임베드(HTML·유튜브 등) | `▤ 주소 높이` (예: `▤ https://… 520`) |
| 굵게 | `**글자**` — 핵심 숫자·결론 조각 |
| 형광펜 | `==색_background#문장==` (예: `==yellow_background#오늘의 핵심==`) |
| 글자색 | `==색이름#글자==` (예: `==red#위험==`) — 배경 없이 글자만 |
| 밑줄 | `<u>글자</u>` |
| 콜아웃 | `>> 글자` |
| 표 | 보통 마크다운 표 |
| 체크박스 | `- [ ] 할 일` |

- **정답 가리기는 토글**(`▸`)로. 어제 복습 문제의 정답이 그 자리다.
- 이미지는 마크다운 `![]()` 그대로. 깨질 링크·장식용은 넣지 말 것.
- 헤딩은 `#`~`###`. 앱은 목차(`≡`)를 그때 세서 그린다.
