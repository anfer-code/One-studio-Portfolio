import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-bg-dark text-white relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[60vh]">
      {/* Colorful Lava Lamp Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-bg-dark" />
        
        {/* Red Blob */}
        <motion.div 
          animate={{ 
            x: [0, 150, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/40 rounded-full blur-[120px] mix-blend-screen" 
        />
        
        {/* Purple Blob */}
        <motion.div 
          animate={{ 
            x: [0, -150, 150, 0],
            y: [0, 150, -100, 0],
            scale: [1, 0.8, 1.4, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/40 rounded-full blur-[150px] mix-blend-screen" 
        />
        
        {/* Blue Blob */}
        <motion.div 
          animate={{ 
            x: [0, 100, -150, 0],
            y: [0, -100, 150, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-mono text-3xl md:text-5xl lg:text-6xl font-light leading-tight"
        >
          Diseño, desarrollo y creatividad para hacer crecer tu negocio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-sans font-light text-gray-300"
        >
          Construyamos tu próxima gran idea
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm text-lg font-medium transition-colors flex items-center gap-3"
        >
          Empieza aquí <span className="text-xl leading-none">↗</span>
        </motion.button>
      </div>
    </section>
  );
}
