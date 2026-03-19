import { motion } from 'motion/react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
    >
      <div className="flex items-center gap-8">
        <a href="/" className="text-2xl font-serif tracking-tighter hover:opacity-70 transition-opacity">
          LUMINA
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide text-muted">
          <a href="#" className="hover:text-accent transition-colors">COLLECTIONS</a>
          <a href="#" className="hover:text-accent transition-colors">OBJECTS</a>
          <a href="#" className="hover:text-accent transition-colors">STORY</a>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-muted hover:text-accent transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button className="text-muted hover:text-accent transition-colors">
          <User size={20} strokeWidth={1.5} />
        </button>
        <button className="relative text-muted hover:text-accent transition-colors">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-primary">
            0
          </span>
        </button>
        <button className="md:hidden text-muted hover:text-accent transition-colors">
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>
    </motion.header>
  );
}
