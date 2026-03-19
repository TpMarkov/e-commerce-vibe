import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Minimalist Ceramic Vase",
    price: "$120",
    oldPrice: null,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800",
    urgency: "In Stock - Ships Tomorrow"
  },
  {
    id: 2,
    name: "Pure Linen Bedding Set",
    price: "$290",
    oldPrice: "$340",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    urgency: "Only 3 left in stock"
  },
  {
    id: 3,
    name: "Sculptural Oak Chair",
    price: "$850",
    oldPrice: null,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800",
    urgency: "In Stock - Fast Delivery"
  },
  {
    id: 4,
    name: "Hand-Blown Glass Carafe",
    price: "$85",
    oldPrice: null,
    category: "Dining",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    urgency: "In Stock"
  },
  {
    id: 5,
    name: "Organic Cotton Throw",
    price: "$99",
    oldPrice: "$145",
    category: "Living Room (SALE)",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    urgency: "Trending - Selling Fast"
  },
  {
    id: 6,
    name: "Matte Black Table Lamp",
    price: "$210",
    oldPrice: null,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800",
    urgency: "In Stock - Ships Tomorrow"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-primary">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">Curated Selection</h2>
          <p className="text-muted font-light leading-relaxed">
            Discover our latest arrivals, where form meets function in the most elegant way. 
            Each piece is selected for its unique character and timeless appeal.
          </p>
        </div>
        <div className="flex gap-4">
          <button type="button" aria-label="View All Products" className="text-xs font-mono tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 cursor-pointer">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent rounded-sm"
            tabIndex={0}
            role="link"
            aria-label={`View details for ${product.name}, price ${product.price}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6 rounded-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" aria-hidden="true" />
              
              <button 
                type="button" 
                aria-label={`Quick add ${product.name} to cart`}
                className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out-expo shadow-xl focus-visible:opacity-100 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black cursor-pointer"
                tabIndex={-1}
              >
                <Plus size={20} aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex justify-between items-start mt-2">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-muted mb-1 block">
                  {product.category}
                </span>
                <h3 className="text-lg font-serif tracking-tight group-hover:opacity-70 transition-opacity mb-1">
                  {product.name}
                </h3>
                <span className={`text-xs font-medium tracking-wide ${product.urgency.includes('left') || product.urgency.includes('Trending') ? 'text-red-400' : 'text-green-500'}`}>
                  {product.urgency}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-sm font-medium ${product.oldPrice ? 'text-red-400' : ''}`}>{product.price}</span>
                {product.oldPrice && (
                  <span className="text-xs text-muted line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
