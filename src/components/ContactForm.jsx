import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // In a full app this would call the backend. For now, simulate success.
    setTimeout(() => {
      setLoading(false);
      alert('Thanks! We\'ll be in touch shortly.');
      setForm({ name: '', email: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <span className="inline-block text-xs tracking-wider uppercase text-slate-600">Get in touch</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Let’s build your growth engine</h2>
          <p className="mt-3 text-slate-700">
            Tell us about your goals and we’ll tailor a plan—whether you’re launching or scaling to millions.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Friendly onboarding and migrations</li>
            <li>• Pastel UI your team will love using daily</li>
            <li>• Enterprise security and privacy baked in</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="grid gap-4">
            <label className="text-sm text-slate-700">
              Name
              <div className="mt-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><User size={16} /></span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-white/70 px-9 py-2 outline-none focus:ring-2 focus:ring-slate-200"
                  placeholder="Jane Doe"
                />
              </div>
            </label>

            <label className="text-sm text-slate-700">
              Email
              <div className="mt-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Mail size={16} /></span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-white/70 px-9 py-2 outline-none focus:ring-2 focus:ring-slate-200"
                  placeholder="you@company.com"
                />
              </div>
            </label>

            <label className="text-sm text-slate-700">
              Message
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-slate-200"
                placeholder="How can we help?"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
