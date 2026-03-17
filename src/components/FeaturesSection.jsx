import { Sparkles, Zap, Globe } from "lucide-react";
import FeatureCard from "./FeatureCard.jsx";
import MotionReveal from "./MotionReveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const features = [
  {
    title: "Crave-Worthy Design",
    copy: "High-end typography and layouts designed to make your dishes look as good as they taste.",
    icon: Sparkles,
  },
  {
    title: "Lightning Fast",
    copy: "Zero loading screens. Your customers get instant access to your menu the second they scan.",
    icon: Zap, 
  },
  {
    title: "Always Online",
    copy: "A permanent link that stays active forever. No monthly bills, no downtime, and zero maintenance stress for you.",
    icon: Globe,
  },
];

export default function FeaturesSection() {
  return (
    <MotionReveal className="relative z-10 px-[6vw] py-16" delay={0.25}>
      <SectionHeading
        eyebrow="Simple. Mabilis. Moderno."
        title="Give your diners a better experience."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </MotionReveal>
  );
}
