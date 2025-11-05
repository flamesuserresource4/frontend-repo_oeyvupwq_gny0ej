import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />

      {/* Features strip */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6">
            <h3 className="text-lg font-semibold">Visual automations</h3>
            <p className="mt-2 text-slate-700 text-sm">Drag-and-drop workflows to nurture, convert, and retain—no chaos, just clarity.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6">
            <h3 className="text-lg font-semibold">Omnichannel messaging</h3>
            <p className="mt-2 text-slate-700 text-sm">Email, SMS, and in-app messages delivered at the perfect moment.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6">
            <h3 className="text-lg font-semibold">Fintech-grade analytics</h3>
            <p className="mt-2 text-slate-700 text-sm">Track ROI with calm precision—attribution and cohorting built in.</p>
          </div>
        </div>
      </section>

      <Pricing />
      <BlogPreview />
      <ContactForm />

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-700">© {new Date().getFullYear()} Flowmint</div>
          <div className="flex items-center gap-6 text-slate-700">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#" className="hover:text-slate-900">Sign in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
