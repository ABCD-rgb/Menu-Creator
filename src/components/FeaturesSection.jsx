import { BarChart3, Sparkles, Timer, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard.jsx";
import MotionReveal from "./MotionReveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const features = [
  {
    title: "Signature look",
    copy: "Custom branding, photography, and typography so your menu feels like a flagship experience.",
    icon: Sparkles,
  },
  {
    title: "Instant edits",
    copy: "Seasonal changes? We update your menu in minutes. No reprints. No wasted stock.",
    icon: Timer,
  },
  {
    title: "Ultra-fast hosting",
    copy: "Menus are hosted on Vercel for global speed and reliability—perfect for busy dinner rushes.",
    icon: Zap,
  },
  {
    title: "Data-ready",
    copy: "Optional analytics to see which items get the most attention and clicks.",
    icon: BarChart3,
  },
];

export default function FeaturesSection() {
  return (
    <MotionReveal className="relative z-10 px-[6vw] py-16" delay={0.25}>
      <SectionHeading
        eyebrow="Why restaurants choose MenuMuse"
        title="Designed for speed, style, and higher check averages."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </MotionReveal>
  );
}
