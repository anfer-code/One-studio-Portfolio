import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-6 md:px-12 pointer-events-none"
    >
      <div className="flex items-center gap-4 pointer-events-auto">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm text-sm font-medium transition-colors flex items-center gap-2">
          Empieza aquí <span className="text-lg leading-none">↗</span>
        </button>
        <button className="text-white hover:text-gray-300 transition-colors">
          <Menu size={32} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
}
