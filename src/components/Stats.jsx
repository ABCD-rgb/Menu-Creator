const stats = [
  { value: "72 hrs", label: "Average launch time" },
  { value: "100%", label: "Mobile optimized" },
  { value: "0", label: "App downloads" },
];

export default function Stats() {
  return (
    <div className="mt-10 flex flex-wrap gap-8 text-ink/60">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-bold text-ink">{stat.value}</p>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
