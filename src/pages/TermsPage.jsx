import React from 'react';

const TermsPage = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl leading-relaxed">
            The legal framework for your journey into the future of the Glenorchy Hillocks.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-12">
          
          {/* 1. Ticketing & 15% Trust */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500">1. Ticketing & Conservation</h2>
            <p className="opacity-70 leading-relaxed">
              All ticket sales are final. By purchasing a ticket, you acknowledge that **15% of the net profit** is non-refundable and designated for the <span className="text-white font-bold">Future is Wild Environmental Trust</span>. Your ticket also covers the planting of one native tree through our reforestation partnerships.
            </p>
          </section>

          {/* 2. VR/AR Technology Use */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500">2. Technology & Equipment</h2>
            <p className="opacity-70 leading-relaxed">
              Visitors using company-provided VR headsets or AR devices agree to handle equipment with care. Liability for intentional damage to hardware rests with the visitor. We are not responsible for motion sickness or visual fatigue resulting from prolonged use of speculative biology simulations.
            </p>
          </section>

          {/* 3. Site Conduct - Leave No Trace */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500">3. Physical Site Conduct</h2>
            <p className="opacity-70 leading-relaxed">
              To protect the Dart Valley ecosystem, visitors must adhere to our <span className="text-white italic">"Leave No Trace"</span> policy. This includes:
            </p>
            <ul className="list-disc list-inside opacity-70 space-y-2 ml-4">
              <li>Staying on designated digital/physical trails.</li>
              <li>No removal of natural materials (rocks, plants, soil).</li>
              <li>Respecting the quiet zones required for VR immersion.</li>
            </ul>
          </section>

          {/* 4. Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500">4. Speculative Biology IP</h2>
            <p className="opacity-70 leading-relaxed">
              All creature designs, environmental renderings, and speculative biological data presented are the intellectual property of **The Future is Wild Ltd**. Photography for personal use is encouraged, but commercial reproduction of AR creature models is strictly prohibited.
            </p>
          </section>

                    {/* 5. Safety & Liability  */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-500">5. Safety & Liability </h2>
            <p className="opacity-70 leading-relaxed">
While we use non-invasive technology to minimize impact, the Glenorchy Hillocks remain a natural outdoor environment. The Future is Wild Ltd is not liable for injuries sustained due to off-trail wandering or disregard for weather warnings in the Whakatipu Basin.
            </p>
          </section>


          {/* Acceptance Box */}
          <div className="text-center py-10 border-t border-white/5">
            <p className="text-xs opacity-40 uppercase tracking-[0.2em] mb-4">
              By accessing this site or purchasing a ticket, you agree to these terms.
            </p>
            <p className="text-[10px] opacity-30 uppercase tracking-[0.1em]">
              Revision: 2026.02.01 // Governing Law: New Zealand
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsPage;