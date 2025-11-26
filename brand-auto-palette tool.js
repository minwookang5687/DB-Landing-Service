
/*===============================================================================================
Brand Palette + Semantic Token Auto Generator
사용법: node 이파일.js > brand.css
primaryHex 값만 바꾸면 전체 팔레트/의미토큰 자동 생성
===============================================================================================
(생성+검토방법)
0. 아래에서 표에서 Primary 색을 고른다. 
1. JS파일 맨하단 console.log(makePalette("★색상헥스값★"));에 선택한 색상값 넣기
2. VS CODE상다메뉴에서 "터미널->새터미널" 열기
3. 터미널 창에  [ node "brand-auto-palette tool.js" ] 괄호속 문장 그대로 복사붙여넣기
4. 터미널에 출력된 결과물 GPT에 복붙하고 + 아래 프롬프트 복붙

[프롬프트]
위 css들 HTML의 <head>에 부여해서 모두 구현된 예시를 보여줘 하나의 html코드로 코드펜에서 쉽게 구현할수 있게
=====================================================================================================
'브랜드 팔레트 자동 생성기' 역할

Primary 하나만 입력하면
→ 1. 브랜드 팔레트 전체(색 토큰)
→ 2. 의미 토큰 전체(UI 역할)
위 2가지를 자동으로 만들어주는 엔진이다
=====================================================================================================
🎨 Primary 마스터 팔레트 v3 — 계열별 14개 확장 (총 140개)
밝기55이하, 채도15~70사이 여러 색상군에서 primary 대표군 뽑음

1️⃣ Red 계열 (H=0)
1	hsl(0, 55%, 45%)	#b23434
2	hsl(0, 50%, 40%)	#993131
3	hsl(0, 65%, 50%)	#d63d3d
4	hsl(0, 45%, 35%)	#7f2c2c
5	hsl(0, 60%, 48%)	#c23a3a
6	hsl(0, 40%, 30%)	#662727
7	hsl(0, 70%, 52%)	#e64545
8	hsl(0, 35%, 38%)	#6b3333
9	hsl(0, 58%, 42%)	#a83a3a
10	hsl(0, 48%, 52%)	#bf4d4d

2️⃣ Orange 계열 (H=30)
1	hsl(30, 55%, 45%)	#b27334
2	hsl(30, 50%, 40%)	#996131
3	hsl(30, 60%, 50%)	#d68a3d
4	hsl(30, 45%, 35%)	#7f522c
5	hsl(30, 65%, 48%)	#c27d3a
6	hsl(30, 40%, 30%)	#664427
7	hsl(30, 70%, 52%)	#e69a45
8	hsl(30, 35%, 38%)	#6b4a33
9	hsl(30, 58%, 42%)	#a8743a
10	hsl(30, 48%, 52%)	#bf874d

3️⃣ Yellow 계열 (H=60)
1	hsl(60, 55%, 45%)	#b2b234
2	hsl(60, 50%, 40%)	#999931
3	hsl(60, 60%, 50%)	#d6d63d
4	hsl(60, 45%, 35%)	#7f7f2c
5	hsl(60, 65%, 48%)	#c2c23a
6	hsl(60, 40%, 30%)	#666627
7	hsl(60, 70%, 52%)	#e6e645
8	hsl(60, 35%, 38%)	#6b6b33
9	hsl(60, 58%, 42%)	#a8a83a
10	hsl(60, 48%, 52%)	#bfbf4d

4️⃣ Green 계열 (H=120)

1	hsl(120, 55%, 45%)	#34b234
2	hsl(120, 50%, 40%)	#319931
3	hsl(120, 60%, 50%)	#3dd63d
4	hsl(120, 45%, 35%)	#2c7f2c
5	hsl(120, 65%, 48%)	#3ac23a
6	hsl(120, 40%, 30%)	#276627
7	hsl(120, 70%, 52%)	#45e645
8	hsl(120, 35%, 38%)	#336b33
9	hsl(120, 58%, 42%)	#3aa83a
10 hsl(120, 48%, 52%)	#4dbf4d

5️⃣ 청색 계열 (H=150)
1	hsl(150, 55%, 45%)	#34b273
2	hsl(150, 50%, 40%)	#319964
3	hsl(150, 60%, 50%)	#3dd697
4	hsl(150, 45%, 35%)	#2c7f5a
5	hsl(150, 65%, 48%)	#3ac28b
6	hsl(150, 40%, 30%)	#27664d
7	hsl(150, 70%, 52%)	#45e6ad
8	hsl(150, 35%, 38%)	#336b5c
9	hsl(150, 58%, 42%)	#3aa87e
10hsl(150, 48%, 52%)	#4dbf94

6️⃣ Mint / Teal / Cyan 계열 (H=180)
1	hsl(180, 55%, 45%)	#34b2b2
2	hsl(180, 50%, 40%)	#319999
3	hsl(180, 60%, 50%)	#3dd6d6
4	hsl(180, 45%, 35%)	#2c7f7f
5	hsl(180, 65%, 48%)	#3ac2c2
6	hsl(180, 40%, 30%)	#276666
7	hsl(180, 70%, 52%)	#45e6e6
8	hsl(180, 35%, 38%)	#336b6b
9	hsl(180, 58%, 42%)	#3aa8a8
10hsl(180, 48%, 52%)	#4dbfbf

7️⃣ Blue 계열 (H=210)
1	hsl(210, 55%, 45%)	#3473b2
2	hsl(210, 50%, 40%)	#316199
3	hsl(210, 60%, 50%)	#3d8bd6
4	hsl(210, 45%, 35%)	#2c527f
5	hsl(210, 65%, 48%)	#3a7cc2
6	hsl(210, 40%, 30%)	#274466
7	hsl(210, 70%, 52%)	#4594e6
8	hsl(210, 35%, 38%)	#33506b
9	hsl(210, 58%, 42%)	#3a6fa8
10hsl(210, 48%, 52%)	#4d7fbf

8️⃣ Indigo / Navy 계열 (H=240)
1	hsl(240, 55%, 45%)	#3434b2
2	hsl(240, 50%, 40%)	#313199
3	hsl(240, 60%, 50%)	#3d3dd6
4	hsl(240, 45%, 35%)	#2c2c7f
5	hsl(240, 65%, 48%)	#3a3ac2
6	hsl(240, 40%, 30%)	#272766
7	hsl(240, 70%, 52%)	#4545e6
8	hsl(240, 35%, 38%)	#33336b
9	hsl(240, 58%, 42%)	#3a3aa8
10	hsl(240, 48%, 52%)	#4d4dbf

9️⃣ Purple 계열 (H=280)
1	hsl(280, 55%, 45%)	#8834b2
2	hsl(280, 50%, 40%)	#773199
3	hsl(280, 60%, 50%)	#9c3dd6
4	hsl(280, 45%, 35%)	#6a2c7f
5	hsl(280, 65%, 48%)	#913ac2
6	hsl(280, 40%, 30%)	#592766
7	hsl(280, 70%, 52%)	#b145e6
8	hsl(280, 35%, 38%)	#6a336b
9	hsl(280, 58%, 42%)	#843aa8
10	hsl(280, 48%, 52%)	#9e4dbf

🔟 Magenta / Pink 계열 (H=320)
1	hsl(320, 55%, 45%)	#b23488
2	hsl(320, 50%, 40%)	#993176
3	hsl(320, 60%, 50%)	#d63da4
4	hsl(320, 45%, 35%)	#7f2c64
5	hsl(320, 65%, 48%)	#c23a93
6	hsl(320, 40%, 30%)	#66274d
7	hsl(320, 70%, 52%)	#e645b6
8	hsl(320, 35%, 38%)	#6b335c
9	hsl(320, 58%, 42%)	#a83a87
10	hsl(320, 48%, 52%)	#bf4d9e

🥇 골드 계열 
hsl(45, 60%, 42%) → #a18430
hsl(45, 65%, 46%) → #b39139
hsl(48, 60%, 44%) → #a98a32
hsl(50, 55%, 40%) → #978134
hsl(42, 55%, 38%) → #8c7631
hsl(50, 65%, 48%) → #b6973a
hsl(46, 50%, 50%) → #b89b3e
hsl(52, 60%, 45%) → #a58b35
hsl(44, 55%, 47%) → #a58a38
hsl(48, 65%, 52%) → #c0a341

🔵 파란색 계열 
hsl(210, 60%, 40%) → #275684
hsl(210, 65%, 45%) → #2d649a
hsl(212, 60%, 42%) → #295583
hsl(215, 55%, 38%) → #274a72
hsl(220, 60%, 44%) → #2c598a
hsl(205, 55%, 46%) → #3a6c94
hsl(215, 65%, 48%) → #306091
hsl(208, 60%, 50%) → #3572a5
hsl(218, 55%, 52%) → #3a74a6
hsl(210, 50%, 36%) → #234a70

🤎 갈색 계열 
hsl(25, 45%, 32%) → #60462c
hsl(25, 50%, 28%) → #543721
hsl(28, 45%, 35%) → #6a4b2b
hsl(30, 50%, 30%) → #5a3b1f
hsl(22, 40%, 26%) → #4a3520
hsl(30, 55%, 34%) → #684420
hsl(26, 50%, 36%) → #6a4a2a
hsl(32, 45%, 38%) → #6f4a24
hsl(28, 40%, 30%) → #533922
hsl(26, 45%, 28%) → #4e3520

⬛ 거의-블랙(딥 네이비/차콜) 
(실무에서 “블랙 느낌”으로 쓰기 좋은 애들)
hsl(210, 15%, 8%) → #111417
hsl(210, 12%, 10%) → #16191d
hsl(210, 10%, 12%) → #1c1f22
hsl(210, 15%, 14%) → #1e2429
hsl(210, 8%, 16%) → #26292c
hsl(210, 12%, 18%) → #282e33
hsl(210, 10%, 20%) → #2e3338
hsl(210, 7%, 22%) → #34383c
hsl(210, 6%, 24%) → #3a3d41
hsl(210, 5%, 26%) → #3f4246

========================================================================================================= */

function hexToHSL(hex) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h, s, l;
  l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h = h * 60;
  }

  return {
    h,
    s: s * 100,
    l: l * 100,
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function hslToCSS(h, s, l) {
  return `hsl(${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%)`;
}

/* =========================================================================
   SECONDARY 생성 규칙 (인접조화 + 톤 보정)
   ========================================================================= */
function makeSecondary(base) {
  let h = base.h;
  let s = base.s;
  let l = base.l;

  // 대략적인 Warm/Cool 구분
  const isWarm = h < 60 || h > 200;
  let hueShift = isWarm ? 15 : 25;

  const next = {
    h: (h + hueShift) % 360,
    s: clamp(s - 5, 20, 90),
    l: clamp(l + 8, 20, 85),
  };

  return next;
}

/* =========================================================================
   ACCENT 생성 규칙 (보색 + 고급 톤 조절)
   ========================================================================= */
function makeAccent(base) {
  let h = (base.h + 180) % 360;
  let s = clamp(base.s + 20, 20, 95);
  let l =
    base.l > 50
      ? clamp(base.l - 10, 15, 75)
      : clamp(base.l + 10, 25, 85);

  return { h, s, l };
}

/* =========================================================================
   Neutral / Gray Scale 생성기
   → 상위 0.1% 시스템처럼 "항상 cool gray"로 고정
   ========================================================================= */
function makeNeutralSet() {
  // Tailwind gray/neutral 느낌 참고한 고정 팔레트
  const h = 220;

  return {
    900: hslToCSS(h, 13, 12),
    800: hslToCSS(h, 13, 18),
    700: hslToCSS(h, 11, 30),
    600: hslToCSS(h, 10, 40),
    400: hslToCSS(h, 9, 55),
    300: hslToCSS(h, 9, 70),
    200: hslToCSS(h, 10, 82),
    100: hslToCSS(h, 13, 92),
    50:  hslToCSS(h, 14, 97),
  };
}

/* =========================================================================
   Overlay / Surface / CTA / Gradient
   → Surface는 neutral 기반, Overlay는 어두운 중립색 기반
   ========================================================================= */
function makeSurfaces(primary, accent, neutral) {
  // SURFACE는 브랜드색 X, 무조건 neutral 계열에서만 뽑기
  const surface = neutral[50];      // 카드/폼 바탕
  const surfaceAlt = neutral[100];  // 살짝 띄워진 카드

  // Overlay는 기본적으로 검정 투명 레이어
  const overlaySoft   = `hsla(0 0% 0% / 0.03)`;
  const overlayMedium = `hsla(0 0% 0% / 0.06)`;
  const overlayStrong = `hsla(0 0% 0% / 0.12)`;

  // CTA는 accent 기반 (브랜드 하이라이트 포인트)
  const cta = hslToCSS(accent.h, accent.s, accent.l);
  const ctaHover = hslToCSS(
    accent.h,
    clamp(accent.s + 10, 0, 100),
    clamp(accent.l - 5, 0, 100)
  );
  const ctaActive = hslToCSS(
    accent.h,
    clamp(accent.s + 12, 0, 100),
    clamp(accent.l - 8, 0, 100)
  );

  const gradientDiagonal = `linear-gradient(135deg, ${hslToCSS(
    primary.h,
    primary.s,
    primary.l
  )} 0%, ${hslToCSS(accent.h, accent.s, accent.l)} 100%)`;

  const gradientHorizontal = `linear-gradient(90deg, ${hslToCSS(
    primary.h,
    primary.s,
    primary.l
  )} 0%, ${hslToCSS(accent.h, accent.s, accent.l)} 100%)`;

  return {
    surface,
    surfaceAlt,
    overlaySoft,
    overlayMedium,
    overlayStrong,
    cta,
    ctaHover,
    ctaActive,
    gradientDiagonal,
    gradientHorizontal,
  };
}

/* =========================================================================
   SOFT TONE 생성기
   → 원본 색(H/S/L) 그대로 + 투명도 0.12만 입힘
   ========================================================================= */
function makeSoftTone(color) {
  return `hsla(${Math.round(color.h)} ${Math.round(color.s)}% ${Math.round(color.l)}% / 0.12)`;
}

/* =========================================================================
   MAIN FUNCTION — Primary HEX 하나만 넣으면 brand.css 전체 생성
   ========================================================================= */
function makePalette(primaryHex) {
  const baseRaw = hexToHSL(primaryHex);

  // 안전 범위 안에 조정 (너무 밝거나, 너무 채도 낮은 케이스 방어)
  const base = {
    h: (baseRaw.h + 360) % 360,
    s: clamp(baseRaw.s, 15, 85),
    l: clamp(baseRaw.l, 18, 55),
  };

  const secondary = makeSecondary(base);
  const accent = makeAccent(base);

  // neutral은 base와 완전 독립 (항상 cool gray)
  const neutral = makeNeutralSet();

  // surface/overlay는 neutral/검정 기반
  const surfaces = makeSurfaces(base, accent, neutral);

  // ✅ soft tone: 원본 색 + opacity 0.12
  const primarySoft   = makeSoftTone(base);
  const secondarySoft = makeSoftTone(secondary);
  const accentSoft    = makeSoftTone(accent);

  const css = `/* ====================================================================
   BRAND COLOR SYSTEM (auto-generated from ${primaryHex})
   ==================================================================== */

:root {
  /* ------------------------------------------------
     [1] PALETTE — 브랜드 기본 색상 (원재료)
  -------------------------------------------------*/

  /* PRIMARY / SECONDARY / ACCENT */
  --primary: ${hslToCSS(base.h, base.s, base.l)};
  --primary-soft: ${primarySoft};

  --secondary: ${hslToCSS(secondary.h, secondary.s, secondary.l)};
  --secondary-soft: ${secondarySoft};

  --accent: ${hslToCSS(accent.h, accent.s, accent.l)};
  --accent-soft: ${accentSoft};

  /* NEUTRAL SCALE (항상 cool gray, 브랜드색과 독립) */
  --neutral-900: ${neutral[900]};
  --neutral-800: ${neutral[800]};
  --neutral-700: ${neutral[700]};
  --neutral-600: ${neutral[600]};
  --neutral-400: ${neutral[400]};
  --neutral-300: ${neutral[300]};
  --neutral-200: ${neutral[200]};
  --neutral-100: ${neutral[100]};
  --neutral-50:  ${neutral[50]};

  /* SURFACES / OVERLAYS */
  --surface: ${surfaces.surface};
  --surface-alt: ${surfaces.surfaceAlt};
  --overlay-soft: ${surfaces.overlaySoft};
  --overlay-medium: ${surfaces.overlayMedium};
  --overlay-strong: ${surfaces.overlayStrong};

  /* CTA (버튼 등) */
  --cta: ${surfaces.cta};
  --cta-hover: ${surfaces.ctaHover};
  --cta-active: ${surfaces.ctaActive};

  /* GRADIENT (기존 + 2종 확장) */
  --gradient-primary: ${surfaces.gradientDiagonal};
  --gradient-primary-diagonal: ${surfaces.gradientDiagonal};
  --gradient-primary-horizontal: ${surfaces.gradientHorizontal};


  /* ------------------------------------------------
     [2] SEMANTIC SURFACES — 의미 토큰 (페이지/섹션/카드/모달)
     → 브랜드색을 배경에 바로 쓰지 않고, 중립톤 위에만 얹는다
  -------------------------------------------------*/

  --page-bg: var(--neutral-50);          /* 전체 페이지 배경: 거의 흰색 */
  --section-bg: var(--neutral-50);       /* 기본 섹션 배경   */
  --section-alt-bg: var(--neutral-100);  /* 교대 섹션 배경   */

  --card-bg: var(--surface);             /* 기본 카드 배경   */
  --card-elevated-bg: var(--surface-alt);/* 떠 있는 카드     */
  --modal-bg: var(--surface-alt);        /* 모달/패널 배경   */


  /* ------------------------------------------------
     [3] SEMANTIC BORDERS — 보더 계층
  -------------------------------------------------*/

  --border-subtle: var(--neutral-100);  /* 아주 연한 보더 (그리드, 구분선) */
  --border-default: var(--neutral-200); /* 일반 보더 (폼, 카드)          */
  --border-strong: var(--accent);       /* 강조 보더 (알림, 강조박스)     */
  --soft-border: var(--border-subtle);  /* 가장 부드러운 보더 의미 토큰 */


  /* ------------------------------------------------
     [4] UI STATE COLORS — 상태색 (성공/경고/에러/정보)
     → Primary와 독립적으로 유지 (가독성을 위해 고정 팔레트 사용)
  -------------------------------------------------*/

  --success: hsl(142 72% 35%);
  --success-soft: hsl(142 76% 97%);

  --warning: hsl(38 92% 50%);
  --warning-soft: hsl(38 100% 96%);

  --error: hsl(0 72% 50%);
  --error-soft: hsl(0 100% 97%);

  --info: hsl(210 90% 56%);
  --info-soft: hsl(210 100% 97%);
}

`;

  return css;
}

/* ============================================================
   실제 실행부 — 여기 HEX만 바꾸면 됨
   예) "#1f5fae", "#d11111", "#1f2c3c" 등
============================================================ */

console.log(makePalette("#0051ffff")); /* ◀◀ 선택한 색의 헥스값만 바꾸면 된다.*/
