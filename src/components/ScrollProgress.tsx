"use client";

import { useEffect, useState } from "react";

/**
 * Thin moss progress line pinned to the very top of the viewport.
 * Reflects how far the page has been scrolled — a subtle, premium
 * structural cue. Hidden inside the full-screen orçamento wizard.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? Math.min(root.scrollTop / max, 1) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="scroll-progress fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-moss-dark via-moss to-moss-light origin-left"
        style={{ transform: `scaleX(${progress})`, transition: "transform 0.1s linear" }}
      />
    </div>
  );
}
