import { ShieldCheck, Truck, RotateCcw, Wallet } from 'lucide-react';

const BADGES = [
  {
    icon: Truck,
    title: "Next-Day Shipping",
    desc: "Order by 2 PM. Free delivery on orders over $50."
  },
  {
    icon: RotateCcw,
    title: "Zero-Risk Returns",
    desc: "30-day money-back guarantee. No questions asked."
  },
  {
    icon: Wallet,
    title: "Cash on Delivery",
    desc: "Pay safely when the product arrives at your door."
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "100% secure payment with Visa, Mastercard, and more."
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
