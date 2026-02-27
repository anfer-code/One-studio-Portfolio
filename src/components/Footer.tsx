import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white py-8 px-6 md:px-12 border-t border-white/10 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400 font-mono"
        >
          © ONE XTUDIO 2026
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6 text-sm font-mono text-gray-400"
        >
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </motion.div>
      </div>
    </footer>
  );
}
