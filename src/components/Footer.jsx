import { PhoneCall } from "lucide-react";
import MotionReveal from "./MotionReveal.jsx";
import { Button } from "./ui/button.jsx";

export default function Footer() {
  return (
    <MotionReveal
      as="footer"
      className="relative z-10 border-t border-ink/10 px-[6vw] py-12"
      delay={0.85}
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl">MenuMuse</h3>
          <p className="mt-2 text-sm text-ink/60">
            Digital menus hosted on Vercel, built to convert.
          </p>
        </div>
        <div className="text-right">
          <Button className="gap-2" size="sm">
            <PhoneCall size={16} />
            Schedule a Call
          </Button>
          <p className="mt-3 text-sm text-ink/60">hello@menumuse.studio</p>
        </div>
      </div>
    </MotionReveal>
  );
}
