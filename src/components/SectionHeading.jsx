export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-ember">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl">{title}</h2>
    </div>
  );
}
