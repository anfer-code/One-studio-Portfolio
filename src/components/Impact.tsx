import { motion } from "motion/react";

export default function Impact() {
  return (
    <section className="py-24 px-6 md:px-12 bg-bg-dark text-white relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="font-mono text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Haz que tu <br />
            <span className="ml-12 md:ml-32">proyecto <span className="text-accent-yellow">impacte</span></span>
          </h2>
          
          <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mt-8">
            En ONE Xtudio transformamos tu proyecto en experiencias atractivas, optimizadas y enfocadas en generar visibilidad y resultados tangibles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
