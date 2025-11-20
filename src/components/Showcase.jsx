import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const slides = [
  {
    title: 'Daily Reflection',
    desc: 'A delightful writing flow with soft prompts and ambient focus.',
    img: 'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Voice Journaling',
    desc: 'Record thoughts hands-free, auto-transcribed with smart summaries.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Insights & Streaks',
    desc: 'See trends, moods, and celebrate your consistency.',
    img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);

  return (
    <section id="showcase" className="relative py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(1000px_600px_at_0%_0%,#22d3ee,transparent_60%),radial-gradient(900px_500px_at_100%_30%,#f59e0b,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-5/12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              A quick look inside
            </motion.h2>
            <motion.p
              className="mt-4 text-slate-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Glide through screens with premium transitions. Tap the dots to explore.
            </motion.p>

            <div className="mt-6 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-8 rounded-full transition ${index === i ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].img}
                  alt={slides[index].title}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.02, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{slides[index].title}</div>
                  <div className="text-slate-200/90 text-sm">{slides[index].desc}</div>
                </div>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-2 rounded-full ${index === i ? 'bg-white' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
