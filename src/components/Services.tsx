import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";
import { Suspense, useState } from "react";

const services = [
  {
    id: "01",
    title: "Desarrollo web y móvil",
    desc: "Creamos aplicaciones web y móviles a medida, escalables y de alto rendimiento. Utilizamos las últimas tecnologías para asegurar una experiencia de usuario fluida y resultados medibles para tu negocio."
  },
  {
    id: "02",
    title: "UI/UX design",
    desc: "Diseñamos interfaces intuitivas y atractivas centradas en el usuario. Nuestro proceso de diseño garantiza que cada interacción sea significativa y refuerce la identidad de tu marca."
  },
  {
    id: "03",
    title: "Contenido digital",
    desc: "Producimos contenido visual y escrito de alta calidad que conecta con tu audiencia. Desde copywriting persuasivo hasta animaciones 3D y producción audiovisual."
  },
  {
    id: "04",
    title: "Marketing digital",
    desc: "Estrategias basadas en datos para aumentar tu visibilidad online. Optimizamos tu presencia en buscadores, gestionamos campañas publicitarias y maximizamos tu retorno de inversión."
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-bg-light text-black relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-2xl"
          >
            Todos nuestros <br />
            servicios listos para <br />
            <span className="text-accent-blue font-medium">impulsar tu marca</span>
          </motion.h2>

          {/* 3D Element Placeholder - Replace with actual Spline URL */}
          <div className="w-full lg:w-1/3 h-64 md:h-80 relative flex items-center justify-center">
            <Suspense fallback={<div className="w-48 h-48 rounded-full border-4 border-dashed border-gray-300 animate-spin-slow" />}>
              <Spline
                scene="https://prod.spline.design/9SIm8buXMaF0G6G1/scene.splinecode"
              />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col border-t border-black/20">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)", y: -10 }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col py-8 md:py-12 border-b border-black/20 group cursor-pointer hover:bg-black/5 transition-colors px-4 -mx-4 rounded-xl"
            >
              <div className="flex items-center w-full">
                <span className="font-mono text-xl md:text-2xl font-medium w-24 md:w-32">
                  {service.id}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-medium tracking-tight">
                  {service.title}
                </h3>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: hoveredIndex === i ? "auto" : 0,
                  opacity: hoveredIndex === i ? 1 : 0,
                  marginTop: hoveredIndex === i ? 16 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pl-24 md:pl-32 text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
