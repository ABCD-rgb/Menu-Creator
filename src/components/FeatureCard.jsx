export default function FeatureCard({ title, copy, icon: Icon }) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-md">
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky/80 text-ember">
            <Icon size={20} />
          </span>
        ) : null}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-ink/60">{copy}</p>
    </article>
  );
}
