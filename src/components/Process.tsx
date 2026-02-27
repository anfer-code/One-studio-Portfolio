import { motion, useScroll, useTransform } from "motion/react";
import { Suspense, useRef } from "react";
import Spline from "@splinetool/react-spline";

const steps = [
  {
    id: 1,
    title: "Consulta inicial",
    angle: -135,
    align: "right",
    desc: "Entendemos tus necesidades y definimos los objetivos principales para trazar la mejor estrategia digital."
  },
  {
    id: 2,
    title: "Onboarding",
    angle: -45,
    align: "left",
    desc: "Te integramos a nuestro flujo de trabajo, configuramos las herramientas necesarias y alineamos al equipo."
  },
  {
    id: 3,
    title: "Desarrollo del proyecto",
    angle: 45,
    align: "left",
    desc: "Manos a la obra. Diseñamos y programamos tu solución con iteraciones constantes y feedback continuo."
  },
  {
    id: 4,
    title: "Entrega + Seguimiento",
    angle: 135,
    align: "right",
    desc: "Lanzamos tu proyecto al mundo y monitoreamos su rendimiento para asegurar el éxito a largo plazo."
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="h-[250vh] bg-bg-dark text-white relative">
      <div className="sticky top-0 h-[100svh] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="container mx-auto max-w-6xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-mono text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-center mb-8 md:mb-12"
          >
            Nuestra <br />
            fórmula de <span className="text-accent-red font-medium">éxito</span>
          </motion.h2>

          <div className="relative w-full max-w-[260px] md:max-w-[340px] lg:max-w-[420px] mx-auto aspect-square flex items-center justify-center mt-4 md:mt-8">
            {/* Central Glow / Spline Element */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="absolute w-48 h-48 md:w-80 md:h-80 bg-red-600/40 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />
              <Suspense fallback={null}>
                {/* Wrapper to center and scale the Spline model properly */}
                <div className="absolute inset-0 w-[130%] h-[130%] -left-[15%] -top-[15%] flex items-center justify-center pointer-events-none">
                  <Spline
                    scene="https://prod.spline.design/lJSo6R43Z2xHIdNh/scene.splinecode"
                  />
                </div>
              </Suspense>
            </div>

            {/* Circular Track */}
            <div className="absolute inset-4 md:inset-8 border border-white/20 rounded-full z-10" />

            {/* Steps */}
            {steps.map((step, i) => {
              const radius = 50; // percentage
              const angleRad = (step.angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(angleRad);
              const y = 50 + radius * Math.sin(angleRad);

              // 4 steps, divide progress into 4 segments
              const start = i * 0.2;
              const end = start + 0.15;
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              const scale = useTransform(scrollYProgress, [start, end], [0.5, 1]);

              const textClasses = step.align === 'right'
                ? "right-1/2 translate-x-1/2 md:translate-x-0 md:right-full md:mr-6 text-center md:text-right items-center md:items-end"
                : "left-1/2 -translate-x-1/2 md:translate-x-0 md:left-full md:ml-6 text-center md:text-left items-center md:items-start";

              // Prevent bottom items from overflowing the screen on mobile
              const isBottom = step.angle > 0;
              const mobileVerticalClass = isBottom 
                ? "bottom-full mb-3 md:bottom-auto md:mb-0 md:top-1/2 md:-translate-y-1/2" 
                : "top-full mt-3 md:top-auto md:mt-0 md:top-1/2 md:-translate-y-1/2";

              return (
                <motion.div
                  key={step.id}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    x: "-50%",
                    y: "-50%",
                    opacity,
                    scale
                  }}
                  className="absolute z-20 flex flex-col items-center justify-center"
                >
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

                  <div className={`absolute w-48 md:w-64 flex flex-col ${mobileVerticalClass} ${textClasses}`}>
                    <h4 className="font-sans text-sm md:text-lg font-medium text-white whitespace-nowrap">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
