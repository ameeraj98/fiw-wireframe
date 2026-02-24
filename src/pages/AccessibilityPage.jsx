import React from 'react';

const AccessibilityPage = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Accessibility  Statement
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl leading-relaxed">
            Ensuring the 200-million-year journey is open to everyone, regardless of physical or cognitive ability.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-16">
          
          {/* Our Commitment */}
          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-6">Our Commitment</h2>
            <p className="opacity-70 leading-relaxed text-xl">
              Hillocks Holdings Ltd  is dedicated to digital and physical inclusivity. We believe that technology should act as a bridge, not a barrier, allowing all visitors to explore the Glenorchy Hillocks and our speculative future.
            </p>
          </section>

          {/* Accessibility Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-base-200 border border-white/5 rounded-3xl space-y-4">

              <h3 className="text-white font-bold uppercase tracking-widest text-l">Digital Access</h3>
              <p className="text-l opacity-60 leading-relaxed">
                Our website follows WCAG 2.1 Level AA standards. We prioritize high-contrast ratios, screen-reader compatibility, and keyboard navigation.
              </p>
            </div>

            <div className="p-8 bg-base-200 border border-white/5 rounded-3xl space-y-4">

              <h3 className="text-white font-bold uppercase tracking-widest text-l">Inclusive AR/VR</h3>
              <p className="text-l opacity-60 leading-relaxed">
                Our AR experiences include text-to-speech descriptions of creatures and adjustable UI scaling for those with visual impairments.
              </p>
            </div>
          </div>

          {/* Physical Site Info */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-emerald-500">On-Site Accessibility</h2>
            <div className="text-xl space-y-4 opacity-70 leading-relaxed">
              <p>While the Glenorchy Hillocks is a natural environment, we have taken steps to ensure the experience is accessible:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Designated wheelchair-accessible viewing platforms for VR segments.</li>
                <li>Sensory-friendly hours for visitors who prefer lower-volume audio environments.</li>
                <li>Companion tickets available for registered support workers.</li>
              </ul>
            </div>
          </section>

          {/* Feedback Box */}
          <div className="p-10 bg-base-100 border border-white/10 rounded-3xl text-center">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Feedback & Assistance</h3>
            <p className="text-sm opacity-60 mb-8 max-w-md mx-auto">
              We are constantly evolving. If you encounter any barriers on our site or during your visit, please let us know.
            </p>
            <a href="mailto:access@futureiswildglenorchy.com" className="btn bg-emerald-500 border-none text-black px-10 font-black uppercase tracking-widest">
              Contact Support
            </a>
          </div>

          <div className="text-center opacity-30">
            <p className="text-[10px] uppercase tracking-[0.2em]">Updated February 2026 // Glenorchy, NZ</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;