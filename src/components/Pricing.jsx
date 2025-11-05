import React from 'react';
import { Check, Rocket, Shield } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'Perfect to explore',
    features: ['1,000 contacts', 'Email campaigns', 'Basic automation', 'Community support'],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$39',
    period: '/mo',
    highlight: 'Most popular',
    featured: true,
    features: ['10,000 contacts', 'Multichannel campaigns', 'Visual workflows', 'A/B testing', 'Priority support'],
    cta: 'Upgrade',
    icon: Rocket,
  },
  {
    name: 'Scale',
    price: '$149',
    period: '/mo',
    highlight: 'Advanced controls',
    features: ['Unlimited contacts', 'AI optimization', 'Advanced analytics', 'SLA + SSO', 'Dedicated manager'],
    cta: 'Contact sales',
    icon: Shield,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs tracking-wider uppercase text-slate-600">Pricing</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Simple, pastel-friendly plans</h2>
          <p className="mt-3 text-slate-600">Start free, grow when you’re ready. Switch or cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border ${tier.featured ? 'border-slate-900 bg-white shadow-xl' : 'border-slate-200 bg-white/80 backdrop-blur'} p-6 flex flex-col`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-slate-900 text-white px-3 py-1 rounded-full shadow">Most popular</div>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                    <p className="text-sm text-slate-600">{tier.highlight}</p>
                  </div>
                  {Icon ? (
                    <div className="rounded-full bg-slate-900 text-white p-2">
                      <Icon size={18} />
                    </div>
                  ) : null}
                </div>
                <div className="mt-6 flex items-end gap-1">
                  <div className="text-4xl font-bold text-slate-900">{tier.price}</div>
                  <div className="text-slate-600 mb-2">{tier.period}</div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-emerald-600"><Check size={16} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="#contact" className={`w-full inline-flex justify-center rounded-full px-4 py-2 text-sm ${tier.featured ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                    {tier.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
