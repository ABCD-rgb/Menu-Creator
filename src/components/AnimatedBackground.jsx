export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div
        className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-aqua/30 blur-3xl"
        style={{ animation: "floatSlow 12s ease-in-out infinite" }}
      />
      <div
        className="absolute right-[-80px] top-40 h-72 w-72 rounded-full bg-gold/30 blur-3xl"
        style={{ animation: "drift 14s ease-in-out infinite" }}
      />
      <div
        className="absolute left-1/2 top-[420px] h-80 w-80 -translate-x-1/2 rounded-full bg-lime/20 blur-3xl"
        style={{ animation: "floatSlow 16s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-160px] left-10 h-96 w-96 rounded-full bg-ember/20 blur-[110px]"
        style={{ animation: "drift 18s ease-in-out infinite" }}
      />
    </div>
  );
}
