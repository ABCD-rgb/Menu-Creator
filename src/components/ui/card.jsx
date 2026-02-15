import { cn } from "../../lib/utils.js";

export function Card({ className, ...props }) {
  return <div className={cn("rounded-2xl border border-ink/10 bg-white", className)} {...props} />;
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}
