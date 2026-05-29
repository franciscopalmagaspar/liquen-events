interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="bg-moss-dark py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-moss-light text-sm tracking-[0.25em] uppercase font-medium mb-3">
          {label}
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
