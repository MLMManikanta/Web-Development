/* ============================================================
   external.JS — Universal Pagination (Supports Unlimited Pages)
   SPA Page Switching with WCAG Accessibility
============================================================ */

(() => {
  "use strict";

  const PAGE_SELECTOR = ".page-content";
  const PAGINATION_SELECTOR = ".pagination-link";
  const DEFAULT_PAGE = 1;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function scrollToTop() {
    if (reduceMotion) window.scrollTo(0, 0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showPage(pageNumber) {
    const pages = $$(PAGE_SELECTOR);
    if (!pages.length) return;

    pages.forEach(p => p.hidden = true);

    const target = document.getElementById(`page${pageNumber}`);
    if (!target) {
      console.warn(`Page ${pageNumber} not found.`);
      return;
    }

    target.hidden = false;

    updatePaginationActive(pageNumber);
    focusFirstHeading(target);
    scrollToTop();
  }

  function focusFirstHeading(pageEl) {
    const heading = pageEl.querySelector("h1,h2,h3,.section-title,.topic-heading");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
      setTimeout(() => heading.removeAttribute("tabindex"), 300);
    }
  }

  function updatePaginationActive(pageNumber) {
    const links = $$(PAGINATION_SELECTOR);

    links.forEach(link => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
      link.setAttribute("aria-pressed", "false");
    });

    const match = links.find(btn => Number(btn.dataset.page) === Number(pageNumber));
    if (match) {
      match.classList.add("active");
      match.setAttribute("aria-current", "page");
      match.setAttribute("aria-pressed", "true");
    }
  }

  function getTotalPages() {
    return $$(PAGE_SELECTOR).length;
  }

  function getCurrentPage() {
    const activeBtn = $$(PAGINATION_SELECTOR).find(
      btn => btn.getAttribute("aria-current") === "page"
    );
    if (activeBtn) return Number(activeBtn.dataset.page);
    return DEFAULT_PAGE;
  }

  function navigatePrev() {
    let current = getCurrentPage();
    if (current > 1) showPage(current - 1);
  }

  function navigateNext() {
    let current = getCurrentPage();
    const total = getTotalPages();
    if (current < total) showPage(current + 1);
  }

  function initPagination() {
    const links = $$(PAGINATION_SELECTOR);

    links.forEach(link => {
      link.setAttribute("role", "button");
      link.setAttribute("tabindex", "0");

      link.addEventListener("click", evt => {
        evt.preventDefault();

        const action = link.dataset.action;
        const page = link.dataset.page;

        if (action === "prev") return navigatePrev();
        if (action === "next") return navigateNext();
        if (page) return showPage(Number(page));
      });

      link.addEventListener("keydown", evt => {
        if (evt.key === "Enter" || evt.key === " ") {
          evt.preventDefault();
          link.click();
        }
      });
    });

    // Arrow key navigation (Left/Right)
    const paginationNav = $(".pagination-nav");
    if (paginationNav) {
      paginationNav.setAttribute("tabindex", "0");
      paginationNav.addEventListener("keydown", evt => {
        if (evt.key === "ArrowRight") navigateNext();
        if (evt.key === "ArrowLeft") navigatePrev();
      });
    }
  }

  function init() {
    initPagination();

    // If no page is visible, show Page 1 by default
    const visible = $$(PAGE_SELECTOR).find(p => !p.hidden);
    if (!visible) showPage(DEFAULT_PAGE);
    else {
      const match = visible.id.match(/page(\d+)/);
      if (match) updatePaginationActive(Number(match[1]));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for inline onclick compatibility
  window.showPage = page => showPage(Number(page));

})();
