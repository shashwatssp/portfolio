// Shared smooth-scroll helpers (hash-free navigation)

/** Sticky navbar height (64px) + breathing room. */
const NAV_OFFSET = 76

function scrollBehavior(): ScrollBehavior {
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  return prefersReduced ? "auto" : "smooth"
}

/** Scrolls so the target section starts just below the sticky navbar. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top: Math.max(y, 0), behavior: scrollBehavior() })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: scrollBehavior() })
}
