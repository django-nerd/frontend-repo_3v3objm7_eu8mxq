import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(1000px_600px_at_10%_0%,#a78bfa,transparent_60%),radial-gradient(900px_500px_at_80%_20%,#22d3ee,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            Simple, mindful pricing
          </motion.h2>
          <motion.p
            className="mt-4 text-slate-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Start free. Upgrade when you’re ready to deepen your practice.
          </motion.p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white text-lg font-medium">Free</div>
            <div className="mt-2 text-4xl font-bold text-white">$0</div>
            <ul className="mt-4 space-y-2 text-slate-200/90 text-sm">
              <li>• Daily journaling</li>
              <li>• Basic insights</li>
              <li>• 3 voice entries / month</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-slate-900 font-medium">Get started</a>
          </motion.div>

          <motion.div
            className="relative rounded-2xl border border-indigo-300/30 bg-gradient-to-br from-indigo-500/20 via-sky-400/20 to-amber-300/20 p-[2px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="rounded-2xl bg-slate-900/60 backdrop-blur p-6 h-full">
              <div className="text-white text-lg font-medium">Pro</div>
              <div className="mt-2 text-4xl font-bold text-white">$6<span className="text-xl">/mo</span></div>
              <ul className="mt-4 space-y-2 text-slate-200/90 text-sm">
                <li>• Unlimited entries</li>
                <li>• AI reflections & summaries</li>
                <li>• Unlimited voice journaling</li>
                <li>• Priority sync & encryption</li>
              </ul>
              <a href="#" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow-[0_10px_40px_-10px_rgba(255,255,255,0.6)]">Go Pro</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
