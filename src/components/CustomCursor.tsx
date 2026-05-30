"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const labelEl = labelRef.current!;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("[data-cursor], a, button");
      if (el) {
        hovering = true;
        const cursorLabel = (el as HTMLElement).dataset.cursor ?? "";
        labelEl.textContent = cursorLabel;
        labelEl.style.opacity = cursorLabel ? "1" : "0";
      } else {
        hovering = false;
        labelEl.textContent = "";
        labelEl.style.opacity = "0";
      }
    };

    let raf: number;
    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;

      dot.style.transform = `translate(${mx}px, ${my}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;

      if (hovering) {
        ring.classList.add("ring-active");
        dot.classList.add("dot-shrink");
      } else {
        ring.classList.remove("ring-active");
        dot.classList.remove("dot-shrink");
      }

      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
}
