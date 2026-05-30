"use client";

import Image from "next/image";
import { useState } from "react";
import { clientLogos } from "@/data";

/**
 * Scrolling band of client logos on the homepage. Each logo is rendered white
 * over the dark band; if a logo file is missing it falls back to the client
 * name as text, so the band never breaks while logos are being added.
 */
function Mark({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  // Every logo lives in an identical fixed box and is centred inside it, so
  // all clients occupy exactly the same footprint regardless of their shape.
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-28 sm:w-36 h-12 sm:h-14">
      {failed || !logo ? (
        <span className="text-foreground/25 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-center leading-tight">
          {name}
        </span>
      ) : (
        <Image
          src={logo}
          alt={name}
          width={220}
          height={88}
          className="max-h-full max-w-full w-auto h-auto object-contain opacity-55 hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <div className="relative py-6 border-y border-foreground/8 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-4 sm:gap-8 animate-marquee whitespace-nowrap">
        {[...clientLogos, ...clientLogos].map((c, i) => (
          <Mark key={i} name={c.name} logo={c.logo} />
        ))}
      </div>
    </div>
  );
}
