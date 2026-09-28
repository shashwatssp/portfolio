// Shared smooth-scroll helpers (hash-free navigation)
// Section offset from the sticky navbar is handled by each section's
// `scroll-margin-top` (scroll-mt-16), which scrollIntoView respects.

function scrollBehavior(): ScrollBehavior {
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  return prefersReduced ? "auto" : "smooth"
}

/**
 * Scrolls so the target section starts just below the sticky navbar.
 * Uses scrollIntoView (respects each section's scroll-margin-top), which is
 * the mechanism proven to work across browsers in this app.
 */
export function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: scrollBehavior(), block: "start", inline: "nearest" })
}

export function scrollToTop() {
  const scroller = document.scrollingElement ?? document.documentElement
  scroller.scrollTo({ top: 0, behavior: scrollBehavior() })
}
