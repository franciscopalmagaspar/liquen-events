interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-16 bg-surface border-b border-foreground/8">
      <div className="max-w-7xl mx-auto">
        <p className="text-foreground/35 text-xs tracking-[0.3em] uppercase mb-6">
          {label}
        </p>
        <h1
          className="text-foreground text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-foreground/50 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
