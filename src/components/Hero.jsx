import { ArrowUpRight, QrCode } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Card, CardContent, CardHeader } from "./ui/card.jsx";
import Stats from "./Stats.jsx";

export default function Hero() {
  return (
    <section className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-ember">
          Lightning-fast · QR ready
        </p>
        <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl text-ink">
          Digital na ang Kainan!
        </h1>
        <p className="mt-5 max-w-2xl text-ink/70">
          Upgrade your restaurant with a sleek digital menu. We handle the design and keep your link active for life—no monthly fees, no stress. Just share and serve.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Button className="gap-2">
            Get Your Menu
            <ArrowUpRight size={16} />
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() =>
              document.getElementById("samples").scrollIntoView({ behavior: "smooth" })
            }
          >
            See Sample Menus
          </Button>
        </div>
        <Stats />
      </div>

      <Card className="rounded-3xl border-ink/10 bg-white/80 p-0 shadow-2xl backdrop-blur">
        <CardHeader className="flex items-center justify-between text-xs text-ink/60">
          <span>Live Preview</span>
          <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_12px_rgba(255,107,74,0.6)]" />
        </CardHeader>
        <CardContent>
          <div className="mt-1">
            <span className="inline-flex rounded-full bg-ember/15 px-3 py-1 text-xs text-ember">
              Luntian Table
            </span>
            <h3 className="mt-3 text-xl font-semibold text-ink">Modern Filipino favorites</h3>
            <p className="mt-2 text-sm text-ink/60">
              Category toggles, featured dishes.
            </p>
            <div className="mt-5 space-y-3 text-sm text-ink/60">
              {[
                ["Kare-Kare Short Rib", "₱620"],
                ["Chicken Inasal", "₱360"],
                ["Calamansi Cooler", "₱140"],
              ].map((item) => (
                <div key={item[0]} className="flex items-center justify-between">
                  <span className="text-ink">{item[0]}</span>
                  <span>{item[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-ink/10 pt-4 text-xs text-ink/60">
            <QrCode size={14} />
            QR ready · Share link · Update anytime
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
