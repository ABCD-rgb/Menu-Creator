import MotionReveal from "./MotionReveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import PricingCard from "./PricingCard.jsx";

const plans = [
  {
    title: "Starter",
    price: "₱14,000",
    items: ["1 digital menu", "2 design revisions", "Hosted on Vercel"],
    primary: false,
  },
  {
    title: "Signature",
    price: "₱25,000",
    items: ["Up to 3 menus", "Custom photography layout", "Priority updates for 60 days"],
    primary: true,
  },
  {
    title: "Group",
    price: "Custom",
    items: ["Multi-location rollout", "Brand system & templates", "Analytics dashboard"],
    primary: false,
  },
];

export default function PricingSection() {
  return (
    <MotionReveal id="pricing" className="relative z-10 px-[6vw] py-16" delay={0.7}>
      <SectionHeading
        eyebrow="Flexible pricing"
        title="Pricing that makes sense for single or multi-location teams."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </MotionReveal>
  );
}
