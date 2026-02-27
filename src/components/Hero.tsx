import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";
import { Suspense, useEffect, useRef } from "react";

export default function Hero() {
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = splineContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent the wheel event from reaching the Spline canvas
      // This stops Spline from zooming, but allows the page to scroll normally
      e.stopPropagation();
    };

    container.addEventListener("wheel", handleWheel, { capture: true });
    return () => {
      container.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-dark pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Spline 3D Scene - Using a placeholder or generic URL if specific one isn't available */}
      <div 
        ref={splineContainerRef}
        className="absolute inset-0 z-0 opacity-60 flex items-center justify-center"
      >
        <Suspense fallback={null}>
          {/* Replace this URL with the actual Spline design URL */}
          <Spline
            scene="https://prod.spline.design/L9J0nTpWvV5hHRfM/scene.splinecode"
          />
        </Suspense>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md ml-auto text-right mb-8 md:mb-12 pointer-events-auto"
        >
          <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed">
            Soluciones digitales y creativas hechas para escalar tu negocio.
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[12vw] md:text-[10vw] font-display font-medium tracking-tighter leading-none text-white whitespace-nowrap pointer-events-auto"
        >
          ONE XTUDIO
        </motion.h1>
      </div>
    </section>
  );
}
