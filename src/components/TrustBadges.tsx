import { Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';

const BADGES = [
  {
    icon: Truck,
    title: "Global Shipping",
    desc: "Complimentary delivery on orders over $500"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    desc: "Fully encrypted transaction processing"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day return policy for peace of mind"
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    desc: "Available for select high-value pieces"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-20 px-6 md:px-12 border-y border-white/5 bg-secondary/30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {BADGES.map((badge, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-full bg-white/5 text-accent">
              <badge.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-medium tracking-wide mb-2 uppercase">{badge.title}</h3>
            <p className="text-xs text-muted font-light leading-relaxed max-w-[200px]">
              {badge.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
