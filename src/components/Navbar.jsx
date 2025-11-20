import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-amber-300 shadow-[0_0_30px_rgba(99,102,241,0.45)] grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight">Remember AI</div>
            <div className="text-xs text-slate-300/80">Your mindful journal, supercharged</div>
          </div>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#showcase" className="hover:text-white transition">Showcase</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition border border-white/10"
          >
            Get Started
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-slate-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
