import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="h-full w-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block mb-4 text-xs font-mono tracking-[0.3em] uppercase text-white/80">
            The Ultimate Home Experience
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-light leading-[1.1] tracking-tight mb-8">
            Premium Design <br />
            <span className="italic">Delivered Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-xl mx-auto mb-10 tracking-tight">
            Curated objects designed to elevate your space. Enjoy 30-day risk-free returns, fast shipping, and optional cash on delivery.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-black rounded-full font-medium text-sm tracking-wide transition-all hover:bg-white/90 w-full md:w-auto focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 cursor-pointer"
            >
              SHOP COLLECTION
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-sm tracking-wide transition-all hover:bg-white/20 w-full md:w-auto flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 cursor-pointer"
            >
              OUR STORY <ArrowRight size={16} aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
