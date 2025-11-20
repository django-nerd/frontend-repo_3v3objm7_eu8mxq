import { PenTool, Mic, Calendar, Lock, Stars, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: PenTool,
    title: "Fluid writing",
    desc: "A minimal editor with gentle prompts that help you express without pressure.",
  },
  {
    icon: Mic,
    title: "Voice to journal",
    desc: "Record thoughts hands‑free. Auto‑transcribe with smart summaries.",
  },
  {
    icon: Calendar,
    title: "Timeline & streaks",
    desc: "Beautiful timelines that celebrate your consistency and growth.",
  },
  {
    icon: Lock,
    title: "Private by design",
    desc: "Local encryption for drafts and secure cloud sync for peace of mind.",
  },
  {
    icon: Stars,
    title: "AI reflections",
    desc: "Gentle insights, themes, and gratitude prompts tailored to you.",
  },
  {
    icon: Sparkle,
    title: "Mood aura",
    desc: "A soothing visual that adapts to your tone — calm, curious, or bright.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(1000px_600px_at_10%_0%,#818cf8,transparent_60%),radial-gradient(900px_500px_at_100%_20%,#22d3ee,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            Crafted for calm, powered by AI
          </motion.h2>
          <motion.p
            className="mt-4 text-slate-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            A mindful writing space that keeps you consistent and celebrates the small wins.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-amber-300 shadow-[0_0_25px_rgba(56,189,248,0.45)] grid place-items-center">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-amber-300/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
