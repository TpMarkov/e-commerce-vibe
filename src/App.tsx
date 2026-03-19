/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-primary"
      >
        <Navbar />
        <main>
          <Hero />
          <TrustBadges />
          <ProductGrid />
          
          {/* Featured Section */}
          <section className="py-24 px-6 md:px-12 bg-secondary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000" 
                  alt="Atmospheric Lighting" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl lg:pl-12"
              >
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted mb-6 block">
                  The Philosophy
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8">
                  Design that <br />
                  <span className="italic">breathes</span> with you.
                </h2>
                <p className="text-muted font-light leading-relaxed mb-10 text-lg">
                  We believe that the objects we surround ourselves with define our state of mind. 
                  Our pieces are designed to bring a sense of calm, clarity, and quiet luxury to your space.
                </p>
                <button className="group flex items-center gap-4 text-sm font-medium tracking-widest uppercase">
                  Explore our process
                  <div className="h-[1px] w-12 bg-accent group-hover:w-24 transition-all duration-500" />
                </button>
              </motion.div>
            </div>
          </section>

          {/* Instagram/Community Section */}
          <section className="py-24 px-6 md:px-12 text-center">
            <h2 className="text-2xl font-serif italic mb-12">@lumina.luxe</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-sm bg-secondary">
                  <img 
                    src={`https://picsum.photos/seed/luxe${i}/600/600`} 
                    alt="Community" 
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
