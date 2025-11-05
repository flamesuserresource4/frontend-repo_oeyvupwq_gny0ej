import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Automations that actually convert',
    excerpt: 'We rebuilt our flow builder to feel like calm creativity. Here’s how to map intent to outcomes.',
    tag: 'Playbooks',
  },
  {
    title: 'The pastel psychology of trust',
    excerpt: 'Soft palettes reduce friction and improve perceived safety. We dug into the data behind design choices.',
    tag: 'Design',
  },
  {
    title: 'From CAC chaos to clarity',
    excerpt: 'A practical guide to lowering blended CAC with better lifecycle messaging—plus templates to copy.',
    tag: 'Growth',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block text-xs tracking-wider uppercase text-slate-600">Insights</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">From our blog</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-slate-900 hover:gap-3 transition-all">
            Read all
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 hover:shadow-md transition">
              <div className="text-[10px] uppercase tracking-wider text-slate-600">{p.tag}</div>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-slate-700">{p.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{p.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-slate-900">
                Read more <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
