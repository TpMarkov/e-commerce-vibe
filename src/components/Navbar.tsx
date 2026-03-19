import { motion } from 'motion/react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      {/* Top Announcement Bar - Drives urgency and states guarantees */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-accent text-primary text-[10px] sm:text-xs font-mono tracking-widest uppercase text-center py-2 px-4 shadow-sm">
        <span>Free Delivery Over $50 • 30-Day Free Returns • Cash On Delivery Available</span>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-primary/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="flex items-center gap-8">
          <a href="/" aria-label="Lumina Home" className="text-2xl font-serif tracking-tighter hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2">
            LUMINA
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide text-muted">
            <a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2">COLLECTIONS</a>
            <a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2">OBJECTS</a>
            <a href="#" className="text-red-400 hover:text-red-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-sm px-2 font-bold">OUTLET</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button type="button" aria-label="Search" className="text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button type="button" aria-label="User Account" className="text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button type="button" aria-label="Shopping Cart" className="relative text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-primary">
              0
            </span>
          </button>
          <button type="button" aria-label="Mobile Menu" className="md:hidden text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>
    </>
  );
}
