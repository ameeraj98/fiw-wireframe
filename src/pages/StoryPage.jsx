import React from 'react';

const StoryPage = () => {
  const advisors = [
    { name: "Advisor 1", role: "Designation", focus: "field 1" },
    { name: "Advisor 2", role: "Designation", focus: "field 2" },
    { name: "Advisor 3", role: "Designation", focus: "field 3" }
  ];

  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER */}
      <section className="py-20 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            The Story
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl">
            From a global documentary phenomenon to an immersive reality in the heart of Glenorchy.
          </p>
        </div>
      </section>

      {/* CONNECTION TO ORIGINS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 italic text-emerald-500">Connection to Origins</h2>
            <p className="text-xl opacity-80 leading-relaxed">
              "The Future is Wild" began as a groundbreaking documentary series that captured the world's imagination by applying hard science to the distant future. We carry that legacy forward, taking the geniune concept of evolution and adaptaion into a more contemporary context. Focusing on the dramatic effects that climate change might bring to the human kind we go back from past, present to all the way to the future.
            </p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Brand Legacy</h3>
            <ul className="space-y-4 opacity-70">
              <li>• Based on the original 2002 documentary series</li>
              <li>• Validated by world-leading evolutionary biologists</li>
              <li>• A 20-year journey from television to Glenorchy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CLIMATE ADAPTATION */}
      <section className="bg-base-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">Climate-focused Contemporary Adaptation</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            Our adaptation isn't just a fantasy—it's a reflection of our changing world. Going back in time, and presenting what New Zealand once was, the impact the humans had in the last 800 years and what we can do to continue our path with a positive and hopeful outlook into the future. By integrating contemporary climate data, we show how the Hillocks might transform under various global warming scenarios. This isn't just about what *might* happen; it's about understanding the resilience of life in the face of environmental shifts.
          </p>
        </div>
      </section>

      {/* SCIENTIFIC ADVISORS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center"> Advisory Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisors.map((advisor, i) => (
            <div key={i} className="p-8 bg-base-100 rounded-2xl border border-white/5 text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 15l7.74-4.853a4.5 4.5 0 00-6.234-6.234L12 5.25l-1.506-1.337a4.5 4.5 0 10-6.234 6.234z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{advisor.name}</h3>
              <p className="text-emerald-500 text-sm font-bold uppercase mt-1">{advisor.role}</p>
              <div className="divider opacity-10"></div>
              <p className="text-sm opacity-60">Expert in {advisor.focus}</p>
            </div>
          ))}
        </div>
      </section>

{/* BEHIND THE SCENES */}
<section className="bg-base-100 py-20 border-t border-white/5">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-black uppercase mb-16 text-center lg:text-left">
      Behind the Scenes
    </h2>

    <div className="space-y-24">
      {/* ROW 1: Crafting Reality (Text Left, Image Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-emerald-500 italic">Onsite Development</h3>
          <p className="text-xl opacity-80 leading-relaxed">
            To create our AR/VR experiences, we used LiDAR scanning to map the Glenorchy Hillocks down to the millimeter. This allows our digital creatures to "step" over real rocks and navigate the actual terrain of the trail with absolute precision.
          </p>
        </div>
        <div className="relative aspect-video bg-base-300 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://blocks.astratic.com/img/general-video.png" 
            alt="LiDAR Scanning Process" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      {/* ROW 2: Goat-Mice Legend (Image Left, Text Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video bg-base-300 rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-2 lg:order-1">
          <img 
            src="https://blocks.astratic.com/img/general-video.png" 
            alt="Goat-Mice Simulation" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h3 className="text-3xl font-bold text-emerald-500 italic">VR Productions</h3>
          <p className="text-xl opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

            {/* ROW 3: AR Production (Text Left, Image Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-emerald-500 italic">AR Production</h3>
          <p className="text-xl opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative aspect-video bg-base-300 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://blocks.astratic.com/img/general-video.png" 
            alt="LiDAR Scanning Process" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default StoryPage;