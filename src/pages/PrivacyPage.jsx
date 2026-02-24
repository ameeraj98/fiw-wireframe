import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl leading-relaxed">
            Protecting your digital footprint as carefully as we protect the Glenorchy ecosystem.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-16">
          
{/* Introduction */}
<div className="prose prose-invert max-w-none">
  <h2 className="text-2xl font-black uppercase tracking-widest text-emerald-500 mb-6">Overview</h2>
  <p className="opacity-70 leading-relaxed">
    At The Future is Wild Glenorchy, we are committed to protecting the privacy and security of our visitors. This policy explains how we collect, use, and safeguard your information when you visit our physical site, use our AR/VR technology, or interact with our digital platforms.
  </p>
  
  <ul className="opacity-70 leading-relaxed list-disc pl-5 space-y-2">
    <li><strong>Personal Info:</strong> Names and emails for ticketing and newsletter updates.</li>
    <li><strong>Personal Info:</strong> Booking details and transaction history.</li>
    <li><strong>Personal Info:</strong> Communication preferences and feedback.</li>
  </ul>
</div>
          {/* Detailed Clauses */}
          <div className="grid grid-cols-1 gap-12">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">1. VR & AR Data Usage</h3>
              <p className="opacity-70 leading-relaxed">
                Our Augmented Reality markers do not track individual biological data. We utilize device orientation and GPS coordinates only to render 3D models of future creatures in your field of view. This data is session-based and discarded upon exiting the experience.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">2. The 15% Trust Transparency</h3>
              <p className="opacity-70 leading-relaxed">
                Information regarding ticket sales is shared with the Future is Wild Environmental Trust solely for the purpose of calculating the 15% net profit contribution. No personal visitor data is shared with the Trust or our reforestation partners (Murihiku Regeneration, Te Tapu O Tane) without explicit consent.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">3. Your Rights</h3>
              <p className="opacity-70 leading-relaxed">
                In accordance with the New Zealand Privacy Act 2020, you have the right to request access to and correction of any personal information we hold about you. 
              <br /> <br />Questions?

              <br />For any privacy-related inquiries, please contact our Data Protection Officer at  privacy@futureiswildglenorchy.com.
              
              </p>
            </section>
          </div>

          <p className="text-[10px] opacity-30 text-center uppercase tracking-[0.2em]">
            Last Updated: February 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;