type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default"
}: SectionHeadingProps) {
  const titleClass = tone === "light" ? "text-white" : "text-coffee-950";
  const descriptionClass = tone === "light" ? "text-cream-100/78" : "text-ink/72";

  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 font-serif text-3xl font-bold leading-tight md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}
