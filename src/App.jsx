import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />

      <footer className="relative py-12 border-t border-white/10">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(800px_400px_at_10%_0%,#22d3ee,transparent_60%),radial-gradient(700px_400px_at_90%_10%,#f59e0b,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} Remember AI. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
