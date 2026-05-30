export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-5">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-moss opacity-60 animate-ping" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-moss" />
        </span>
        <p className="text-foreground/25 text-[10px] tracking-[0.5em] uppercase">
          A carregar
        </p>
      </div>
    </div>
  );
}
