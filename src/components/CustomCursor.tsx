"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Pixel-Matters-style custom cursor: a small dot that tracks the pointer
 * precisely, plus a larger ring that follows with easing and expands over
 * interactive elements. Disabled on touch devices and for reduced motion.
 */
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const interactiveSel = "a, button, [role='button'], input, textarea, select, label, .cursor-grow";
    const over = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(interactiveSel)) {
        ring.current?.classList.add("cursor-ring--active");
      }
    };
    const out = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(interactiveSel)) {
        ring.current?.classList.remove("cursor-ring--active");
      }
    };
    const hide = () => {
      dot.current?.classList.add("cursor-hidden");
      ring.current?.classList.add("cursor-hidden");
    };
    const show = () => {
      dot.current?.classList.remove("cursor-hidden");
      ring.current?.classList.remove("cursor-hidden");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", over, true);
    window.addEventListener("mouseout", out, true);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", over, true);
      window.removeEventListener("mouseout", out, true);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
