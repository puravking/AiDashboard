// src/components/BlurText.tsx
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurTextProps {
  text?: string;
  delay?: number;
  animateBy?: "words" | "chars";
  direction?: "top" | "bottom" | "left" | "right";
  children?: ReactNode;
  className?: string;
  onAnimationComplete?: () => void;
}

function BlurText({
  text = "",
  delay = 0,
  animateBy = "words",
  direction = "top",
  children,
  className = "",
  onAnimationComplete,
}: BlurTextProps) {
  const variants = {
    hidden: { opacity: 0, y: direction === "top" ? -20 : direction === "bottom" ? 20 : 0, x: direction === "left" ? -20 : direction === "right" ? 20 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  const motionProps = {
    initial: "hidden",
    animate: "visible",
    variants,
    transition: { duration: 0.6, delay: delay / 1000 },
    onAnimationComplete,
  };

  if (children) {
    return (
      <motion.div {...motionProps} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.span {...motionProps} className={className}>
      {text}
    </motion.span>
  );
}

export default BlurText;
