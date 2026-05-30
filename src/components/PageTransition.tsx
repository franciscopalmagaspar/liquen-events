"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Subtle Pixel-Matters-style route transition: on each navigation the page
 * content fades/rises in, and a thin moss curtain sweeps across the top.
 * Pure CSS, GPU-friendly, and respects prefers-reduced-motion.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [stage, setStage] = useState<"in">("in");
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setStage("in");
  }, [pathname]);

  // Admin/orçamento run full-screen; don't animate their heavy surfaces.
  const skip = pathname.startsWith("/orcamento");

  if (skip) return <>{children}</>;

  return (
    <div key={pathname} className="route-fade">
      {children}
    </div>
  );
}
