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
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">All Collections</a></li>
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">New Arrivals</a></li>
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">Best Sellers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-widest uppercase mb-8 text-white/40">Support</h4>
          <ul className="space-y-4 text-sm font-light text-muted">
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">Care Guide</a></li>
            <li><a href="#" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 inline-block">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-widest uppercase mb-8 text-white/40">10% Off Your First Order</h4>
          <p className="text-sm font-light text-muted mb-6">
            Subscribe to our newsletter to receive your discount, plus updates on exclusive events.
          </p>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-light outline-none focus:border-accent focus:ring-0 transition-colors placeholder:text-muted/50"
              required
            />
            <button type="submit" aria-label="Subscribe to newsletter" className="absolute right-0 bottom-2 text-xs font-mono tracking-widest uppercase hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 cursor-pointer">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
        <div className="flex gap-8 text-[10px] font-mono tracking-widest uppercase text-white/30">
          <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">Cookie Policy</a>
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">
          © 2026 LUMINA LUXE. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
