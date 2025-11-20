import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Remember AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-indigo-300 via-sky-200 to-amber-200"> Journaling that feels effortless</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-200/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            A calm space to capture your day. Speak or type your thoughts, and let AI turn them into meaningful reflections you can revisit.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_10px_40px_-10px_rgba(255,255,255,0.6)]">
              Try it Free
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white hover:bg-white/10">
              See it in action
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_80%_30%,rgba(56,189,248,0.25),transparent)]" />
    </section>
  );
}
