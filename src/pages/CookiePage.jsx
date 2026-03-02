import React from 'react';

const CookiePage = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Cookie Policy
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl leading-relaxed">
            How we use small data fragments to build a seamless bridge to the future.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-16">
          
          {/* 1. What are Cookies */}
          <section>
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500 mb-6">1. What are Cookies?</h2>
            <p className="text-xl opacity-70 leading-relaxed">
              Cookies are small text files stored on your device that help us remember your preferences, track session data for our VR integrations, and understand how you interact with our digital rewilding updates. 
            </p>
          </section>

          {/* 2. How we use them - The Grid */}
          <section>
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500 mb-8">2. Cookie Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-base-200 border border-white/5 rounded-3xl">
                <h4 className="text-emerald-500 font-bold mb-3 uppercase tracking-widest text-xl">Essential</h4>
                <p className="text-xl opacity-60 leading-relaxed">
                  Necessary for the website and ticketing system to function. These cannot be disabled.
                </p>
              </div>
              <div className="p-8 bg-base-200 border border-white/5 rounded-3xl">
                <h4 className="text-emerald-500 font-bold mb-3 uppercase tracking-widest text-xl">Experience</h4>
                <p className="text-xl opacity-60 leading-relaxed">
                  Remembers your AR settings and progress through our digital evolutionary timelines.
                </p>
              </div>
              <div className="p-8 bg-base-200 border border-white/5 rounded-3xl">
                <h4 className="text-emerald-500 font-bold mb-3 uppercase tracking-widest text-xl">Analytics</h4>
                <p className="text-xl opacity-60 leading-relaxed">
                  Helps us understand visitor traffic to optimize our conservation and tech updates.
                </p>
              </div>
              <div className="p-8 bg-base-200 border border-white/5 rounded-3xl">
                <h4 className="text-emerald-500 font-bold mb-3 uppercase tracking-widest text-xl">Marketing</h4>
                <p className="text-xl opacity-60 leading-relaxed">
                  Allows us to share relevant updates about our 2026 opening on social platforms.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Third Party Cookies */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500">3. Third-Party Integrations</h2>
            <p className="text-xl opacity-70 leading-relaxed">
              We use trusted services like Google Analytics and Stripe for secure payments. These partners may set their own cookies to provide their services. We do not sell any data collected through these cookies to third parties.
            </p>
          </section>

          {/* 4. Control Box */}
          <div className="p-10 bg-emerald-950/20 border border-emerald-500/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Managing Your Cookies</h3>
              <p className="text-sm opacity-70">
                You can adjust your browser settings to refuse cookies or alert you when they are being sent. Note that some parts of our future simulations may not function correctly without them.
              </p>
            </div>
            <button className="btn bg-emerald-500 border-none text-black px-8 font-black uppercase tracking-widest whitespace-nowrap">
              Cookie Settings
            </button>
          </div>

          {/* Footer Metadata */}
          <div className="text-center pt-10 opacity-30">
            <p className="text-[10px] uppercase tracking-[0.2em]">Effective Date: February 2026</p>
            <p className="text-[10px] uppercase tracking-[0.2em] mt-2">The Future is Wild Glenorchy</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CookiePage;