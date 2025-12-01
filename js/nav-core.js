// ================================
// nav-core.js — 공통 헤더/네비게이션 모듈
// - 모바일 메뉴 토글
// - 오버레이 / ESC 닫기
// - body 스크롤 잠금 제어
// ================================
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle  = document.querySelector('[data-nav-toggle]');
    var panel   = document.querySelector('[data-nav-panel]');
    var overlay = document.querySelector('[data-nav-overlay]');
    var closers = document.querySelectorAll('[data-nav-close]');

    // 이 페이지에 네비게이션이 없으면 아무 것도 하지 않음
    if (!toggle || !panel || !overlay) return;

    function openNav() {
      panel.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeNav() {
      panel.classList.add('hidden');
      overlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // 햄버거 버튼 클릭 → 열기
    toggle.addEventListener('click', function () {
      // 이미 열려 있으면 닫기 토글처럼 동작하게
      var isOpen = !panel.classList.contains('hidden');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    // 오버레이 클릭 → 닫기
    overlay.addEventListener('click', closeNav);

    // 각 메뉴 항목(data-nav-close) 클릭 → 닫기
    closers.forEach(function (el) {
      el.addEventListener('click', closeNav);
    });

    // ESC 키로 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var isOpen = !panel.classList.contains('hidden');
        if (isOpen) closeNav();
      }
    });
  });
})();
