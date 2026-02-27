import { motion } from "motion/react";

const projects = [
  { id: 1, title: "premod", image: "https://picsum.photos/seed/premod/800/600?blur=2", span: "col-span-12 md:col-span-6 lg:col-span-4" },
  { id: 2, title: "bento app", image: "https://picsum.photos/seed/bento/800/600?blur=2", span: "col-span-12 md:col-span-6 lg:col-span-4" },
  { id: 3, title: "agrilo", image: "https://picsum.photos/seed/agrilo/800/600?blur=2", span: "col-span-12 md:col-span-12 lg:col-span-4" },
  { id: 4, title: "momeriant", image: "https://picsum.photos/seed/momeriant/800/600?blur=2", span: "col-span-12 md:col-span-6 lg:col-span-6" },
  { id: 5, title: "parfum", image: "https://picsum.photos/seed/parfum/800/600?blur=2", span: "col-span-12 md:col-span-6 lg:col-span-6" },
  { id: 6, title: "chainmora", image: "https://picsum.photos/seed/chainmora/800/600?blur=2", span: "col-span-12 md:col-span-4 lg:col-span-4" },
  { id: 7, title: "powidian", image: "https://picsum.photos/seed/powidian/800/600?blur=2", span: "col-span-12 md:col-span-4 lg:col-span-4" },
  { id: 8, title: "barber shop", image: "https://picsum.photos/seed/barber/800/600?blur=2", span: "col-span-12 md:col-span-4 lg:col-span-4" },
];

export default function Portfolio() {
  return (
    <section className="py-24 px-6 md:px-12 bg-bg-dark text-white relative z-10">
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl md:text-3xl mb-12"
        >
          ~/Portafolio
        </motion.h3>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${project.span} group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 aspect-[4/3] md:aspect-auto md:h-80`}
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <h4 className="absolute bottom-6 right-6 font-display text-2xl md:text-3xl font-medium tracking-tight">
                {project.title}
              </h4>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <a href="#" className="text-red-600 hover:text-red-500 font-mono text-lg underline underline-offset-4 decoration-1 transition-colors">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}
