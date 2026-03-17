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
          <h3 className="font-display text-2xl">JuanMenu</h3>
          <p className="mt-2 text-sm text-ink/60">
            Frictionless digital menus your guests will actually love to use.
          </p>
        </div>
        <div className="text-right">
          <Button
            className="gap-2"
            size="sm"
            onClick={() => window.location.assign("https://www.facebook.com/share/1AgXcJi36B/")}
          >
            <PhoneCall size={16} />
            Schedule a Call
          </Button>
          <p className="mt-3 text-sm text-ink/60">supportjuanmenu@gmail.com</p>
        </div>
      </div>
    </MotionReveal>
  );
}
