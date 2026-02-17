import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionReveal({
  children,
  delay = 0.1,
  className = "",
  as = "section",
  ...rest
}) {
  const Component = motion[as] || motion.section;
  return (
    <Component
      {...rest}
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </Component>
  );
}
