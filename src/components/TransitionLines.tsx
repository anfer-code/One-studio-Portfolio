import { motion } from "motion/react";

interface TransitionLinesProps {
  direction?: "dark-to-light" | "light-to-dark";
}

export default function TransitionLines({ direction = "dark-to-light" }: TransitionLinesProps) {
  const isDarkToLight = direction === "dark-to-light";
  const bgClass = isDarkToLight ? "bg-bg-dark" : "bg-bg-light";
  const lineClass = isDarkToLight ? "bg-white" : "bg-black";
  
  // Create an array of lines with increasing/decreasing thickness
  const lines = Array.from({ length: 10 }).map((_, i) => {
    const thickness = isDarkToLight ? (i + 1) * 1.5 : (10 - i) * 1.5;
    return thickness;
  });

  return (
    <div className={`w-full flex flex-col ${bgClass} py-12`}>
      {lines.map((thickness, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
          className={`w-full ${lineClass} origin-top mb-2`}
          style={{ height: `${thickness}px` }}
        />
      ))}
    </div>
  );
}
