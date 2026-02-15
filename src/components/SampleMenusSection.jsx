import MotionReveal from "./MotionReveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import SampleMenuCard from "./SampleMenuCard.jsx";
import { menuCards, menus } from "../data/menus.js";

export default function SampleMenusSection() {
  return (
    <MotionReveal
      id="samples"
      className="relative z-10 bg-gradient-to-b from-sky to-transparent px-[6vw] py-16"
      delay={0.4}
    >
      <SectionHeading
        eyebrow="Sample Menus"
        title="Open a booklet-style digital menu in a new tab."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {menuCards.map((card) => (
          <SampleMenuCard key={card.id} card={card} menu={menus[card.id]} />
        ))}
      </div>
    </MotionReveal>
  );
}
