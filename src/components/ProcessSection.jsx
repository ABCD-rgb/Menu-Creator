import { FileImage, Paintbrush2, QrCode } from "lucide-react";
import MotionReveal from "./MotionReveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import ProcessStep from "./ProcessStep.jsx";

const steps = [
  {
    step: "01",
    title: "Send your menu",
    copy: "PDF, Google Doc, or a photo—anything works.",
    icon: FileImage,
  },
  {
    step: "02",
    title: "Design & approve",
    copy: "We deliver a branded preview you can tweak.",
    icon: Paintbrush2,
  },
  {
    step: "03",
    title: "Launch & share",
    copy: "We host it on Vercel, give you a QR + link.",
    icon: QrCode,
  },
];

export default function ProcessSection() {
  return (
    <MotionReveal className="relative z-10 px-[6vw] py-16" delay={0.55}>
      <SectionHeading eyebrow="Simple rollout" title="From your current menu to live in 3 steps." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <ProcessStep key={step.step} {...step} />
        ))}
      </div>
    </MotionReveal>
  );
}
