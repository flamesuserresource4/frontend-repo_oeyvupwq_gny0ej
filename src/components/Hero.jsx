import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 h-full flex flex-col">
        <nav className="w-full">
          <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
            <a href="#home" className="text-xl font-semibold tracking-tight text-slate-800">Flowmint</a>
            <div className="hidden md:flex items-center gap-6 text-slate-700">
              <a href="#features" className="hover:text-slate-900">Features</a>
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              <a href="#blog" className="hover:text-slate-900">Blog</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-slate-700 hover:text-slate-900">Sign in</a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow-md hover:bg-slate-800 transition"
              >
                Get started
                <Rocket size={16} />
              </a>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="backdrop-blur-[1px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/60 px-3 py-1 text-xs text-slate-700 mb-4 shadow-sm">
                <Shield size={14} />
                Automation & Marketing Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
                Grow on autopilot with pastel-perfect simplicity
              </h1>
              <p className="mt-4 text-slate-700 md:text-lg max-w-prose">
                Flowmint centralizes campaigns, automations, and analytics so your brand can scale calmly. No clutter—just modern fintech-grade smoothness.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm shadow hover:bg-slate-800 transition">
                  Start free
                  <Star size={16} />
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-slate-200 text-slate-800 px-5 py-3 text-sm hover:bg-white transition">
                  See how it works
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 max-w-sm text-center text-xs text-slate-600">
                <div>
                  <div className="font-semibold text-slate-900">+18%</div>
                  CTR lift
                </div>
                <div>
                  <div className="font-semibold text-slate-900">-42%</div>
                  CAC reduction
                </div>
                <div>
                  <div className="font-semibold text-slate-900">99.9%</div>
                  Uptime
                </div>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
