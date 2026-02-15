export default function ProcessStep({ step, title, copy, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-ember">{step}</span>
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky/80 text-ember">
            <Icon size={18} />
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-ink/60">{copy}</p>
    </div>
  );
}
