export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="lg:col-span-1">
          <a href="/" className="text-2xl font-serif tracking-tighter mb-6 block">
            LUMINA
          </a>
          <p className="text-muted text-sm font-light leading-relaxed max-w-xs">
            Elevating the everyday through curated design and exceptional craftsmanship. 
            Join our journey into the art of living.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-mono tracking-widest uppercase mb-8 text-white/40">Shop</h4>
          <ul className="space-y-4 text-sm font-light text-muted">
            <li><a href="#" className="hover:text-accent transition-colors">All Collections</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-widest uppercase mb-8 text-white/40">Support</h4>
          <ul className="space-y-4 text-sm font-light text-muted">
            <li><a href="#" className="hover:text-accent transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Care Guide</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-widest uppercase mb-8 text-white/40">Newsletter</h4>
          <p className="text-sm font-light text-muted mb-6">
            Receive updates on new collections and exclusive events.
          </p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-light focus:outline-none focus:border-white transition-colors"
            />
            <button className="absolute right-0 bottom-2 text-xs font-mono tracking-widest uppercase hover:opacity-70 transition-opacity">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
        <div className="flex gap-8 text-[10px] font-mono tracking-widest uppercase text-white/30">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">
          © 2026 LUMINA LUXE. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
