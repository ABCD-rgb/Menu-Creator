import { Sparkles } from "lucide-react";
import { Button } from "./ui/button.jsx";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="font-display text-2xl text-ink">JuanMenu</div>
      <div className="hidden items-center gap-6 text-sm text-ink/70 md:flex">
        <a href="#samples" className="transition hover:text-ink">
          Sample Menus
        </a>
        <Button
          size="sm"
          className="gap-2"
          onClick={() => window.location.assign("https://www.facebook.com/share/1AgXcJi36B/")}
        >
          <Sparkles size={16} />
          Book a Demo
        </Button>
      </div>
    </nav>
  );
}
