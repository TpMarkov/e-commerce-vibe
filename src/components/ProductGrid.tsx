import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Minimalist Ceramic Vase",
    price: "$120",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Pure Linen Bedding Set",
    price: "$340",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Sculptural Oak Chair",
    price: "$850",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Hand-Blown Glass Carafe",
    price: "$85",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Organic Cotton Throw",
    price: "$145",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Matte Black Table Lamp",
    price: "$210",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800"
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
          <button className="text-xs font-mono tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-colors">
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
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6 rounded-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              
              <button className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out-expo shadow-xl">
                <Plus size={20} />
              </button>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-muted mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-lg font-serif tracking-tight group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
              </div>
              <span className="text-sm font-medium">{product.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
