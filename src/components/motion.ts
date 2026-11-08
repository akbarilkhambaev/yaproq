/** true, если в системе включено «уменьшение движения» — тогда анимации GSAP не запускаем */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
