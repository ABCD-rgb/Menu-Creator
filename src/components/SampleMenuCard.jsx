import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";

export default function SampleMenuCard({ card, menu }) {
  return (
    <a
      className="rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:border-ember/60"
      href={`/?view=booklet&menu=${card.id}`}
      target="_blank"
      rel="noreferrer"
    >
      <Card className="border-none bg-transparent shadow-none">
        <CardContent className="px-0 pb-0">
          <span className="text-xs text-ink/60">{card.label}</span>
          <h3 className="mt-2 text-xl font-semibold">{menu.title}</h3>
          <p className="mt-3 text-sm text-ink/60">{menu.vibe}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember">
            Open booklet <ArrowUpRight size={14} />
          </span>
        </CardContent>
      </Card>
    </a>
  );
}
