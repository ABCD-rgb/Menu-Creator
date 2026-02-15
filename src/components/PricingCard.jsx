import { Button } from "./ui/button.jsx";

export default function PricingCard({ title, price, items, primary }) {
  return (
    <article
      className={`rounded-2xl border p-6 ${
        primary ? "border-ember/70 bg-white shadow-glow" : "border-ink/10 bg-white"
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-3xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-ink/60">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button className="mt-6 w-full" variant={primary ? "primary" : "outline"}>
        {primary ? "Choose Signature" : "Talk to Us"}
      </Button>
    </article>
  );
}
