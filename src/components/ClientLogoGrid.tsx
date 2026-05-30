"use client";

import Image from "next/image";
import { useState } from "react";

interface Client {
  name: string;
  logo: string;
}

function ClientLogo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="h-28 bg-surface flex items-center justify-center px-8 hover:bg-surface-elevated transition-colors group">
      {!failed ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={140}
          height={56}
          className="object-contain max-h-14 w-auto opacity-40 group-hover:opacity-70 transition-opacity duration-300 brightness-0 invert"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-foreground/25 text-xs font-medium tracking-widest uppercase text-center group-hover:text-foreground/50 transition-colors leading-relaxed">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogoGrid({ clients }: { clients: Client[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-foreground/6">
      {clients.map((client) => (
        <ClientLogo key={client.name} client={client} />
      ))}
    </div>
  );
}
