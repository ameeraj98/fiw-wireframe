import React from 'react';

const ConservationPage = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Conservation
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl leading-relaxed">
            The future of our planet begins with the land beneath our feet. Every journey through The Hillocks helps restore native ecosystems, regenerate the landscapes of Aotearoa and protect the wild places that inspire us to imagine what comes next.
          </p>
        </div>
      </section>

{/* EDUCATIONAL TRUST SECTION */}
<section className="py-24 bg-base-300">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div className="w-20 h-20 bg-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-10 h-10 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>

    <div className="mb-8">
      <span className="text-emerald-500 text-5xl md:text-6xl font-black tracking-tighter">
        15%
      </span>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] opacity-70">
        Of Net Profit · Environmental Trust
      </p>
    </div>

    <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
      Restoring Aotearoa,
      <br />
      <span className="text-emerald-500">
        One Tree at a Time
      </span>
    </h2>

    <p className="text-xl opacity-80 leading-relaxed mb-6">
      The Environmental Trust funds large-scale reforestation across The
      Hillocks site, the broader Glenorchy region, and beyond.
    </p>

    <p className="text-xl opacity-80 leading-relaxed mb-10">
      At full operational capacity, we plant more than 120,000 native trees
      per year — in partnership with iwi-owned conservation organisations
      deeply rooted in this land.
    </p>

    <p className="text-sm md:text-base font-bold uppercase tracking-widest text-emerald-500">
      ® Every ticket plants one tree. Every year, over 120,000 trees.
    </p>
  </div>
</section>

            {/* 2. TREE PLANTING PROGRAM - The Active Engagement */}
      <section className="py-24 bg-emerald-950/20 border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black uppercase">Tree Planting Program</h2>
              <p className="text-xl opacity-80 leading-relaxed">
                For every ticket purchased, we fund the planting of a native tree within the Glenorchy Hillocks. This isn't just about offsetting carbon—it's about rebuilding the Beech forests and Tussock grasslands that local species depend on.
              </p>
              <div className="p-6 bg-base-100/50 rounded-2xl border border-emerald-500/20 italic opacity-80 text-emerald-100">
                "We are building a bridge between digital exploration and physical restoration. Your visit directly funds the soil of tomorrow."
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://blocks.astratic.com/img/general-video.png" 
                alt="Native tree planting in New Zealand landscape" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>



      {/* 4. IMPACT METRICS - The Final Results */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="px-6 text-center text-3xl md:text-4xl font-black uppercase tracking-tighter">
            Impact Metrics
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Trees Planted", value: "xxx", sub: "Native species established" },
            { label: "CO2 Offset", value: "xxx", sub: "Calculated annual sequestration" },
            { label: "Hectares Restored", value: "xxx Ha", sub: "Dart Valley buffer zone" }
          ].map((metric, i) => (
            <div key={i} className="bg-base-100 border border-white/10 rounded-3xl p-10 text-center shadow-xl hover:border-emerald-500/20 transition-colors">
              <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">{metric.label}</p>
              <h2 className="text-3xl font-black text-emerald-500 mb-2 tracking-tighter">{metric.value}</h2>
              <p className="text-sm opacity-70">{metric.sub}</p>
            </div>
          ))}
        </div>
      </section>

{/* 2. Reforestation Partnerships */}
<section className="py-24 bg-emerald-950/20 border-y border-emerald-500/10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://blocks.astratic.com/img/general-video.png" 
                alt="Native tree planting in New Zealand landscape" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>

      {/* Content on the Right (on Desktop) */}
      <div className="order-1 lg:order-2 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
            Reforestation Partnerships
          </h2>
          <p className="text-xl opacity-80 leading-relaxed">
            Collaborating with world-class conservation leaders in Murihiku (Southland) to ensure a thriving indigenous ecosystem.
          </p>
        </div>

        {/* Horizontal Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-base-100/40 border border-white/5 rounded-2xl flex flex-col justify-between">
            <h4 className="text-emerald-500 font-black uppercase tracking-widest text-l mb-2">
              Murihiku Regeneration
            </h4>
            <p className="text-white text-l opacity-90 leading-relaxed">
              Focused on the long-term environmental health and green energy transition of the South Island.
            </p>
          </div>

          <div className="p-6 bg-base-100/40 border border-white/5 rounded-2xl flex flex-col justify-between">
            <h4 className="text-emerald-500 font-black uppercase tracking-widest text-l mb-2">
              Te Tapu O Tane
            </h4>
            <p className="text-white text-l opacity-90 leading-relaxed">
              An iwi-owned nursery providing native plants and leading the reforestation of our catchment areas.
            </p>
          </div>
        </div>


      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default ConservationPage;