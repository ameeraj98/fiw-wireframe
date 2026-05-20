import React, { useState } from 'react';

const LegacyPage = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  return (
    <div className="bg-base-300 min-h-screen text-white relative antialiased">
      {/* HEADER */}
      <section className="py-20 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* First Column */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              A Global Legacy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
              From a global documentary phenomenon to an immersive reality in the heart of Glenorchy.
              <br /><br />
              "The Future is Wild" began as a groundbreaking documentary series that captured the world's imagination by applying hard science to the distant future. We carry that legacy forward, taking the genuine concept of evolution and adaptation into a more contemporary context. Focusing on the dramatic effects that climate change might bring to the human kind we go back from past, present to all the way to the future.
            </p>
          </div>

          {/* Second Column */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-3xl w-full mt-2">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-emerald-500">Brand Legacy</h3>
            <ul className="space-y-4 text-lg text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Based on the original 2002 documentary series</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Validated by world-leading evolutionary biologists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span>A 20-year journey from television to Glenorchy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CARDS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <button 
            onClick={() => setActiveOverlay('overlay1')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">01</span>
              THE FUTURE IS WILD™ LEGACY
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>
          </button>

          {/* Card 2 */}
          <button 
            onClick={() => setActiveOverlay('overlay2')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">02</span>
              EVOLUTION OF THE CONCEPT
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>

          {/* Card 3 */}
          <button 
            onClick={() => setActiveOverlay('overlay3')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">03</span>
              THE HILLOCKS: PAST, PRESENT, FUTURE
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>

          {/* Card 4 */}
          <button 
            onClick={() => setActiveOverlay('overlay4')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">04</span>
              CONTINUOUS EVOLUTION
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>

          {/* Card 5 */}
          <button 
            onClick={() => setActiveOverlay('overlay5')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">05</span>
              TECHNOLOGY LEADERSHIP
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>
          
          {/* Card 6 */}
          <button 
            onClick={() => setActiveOverlay('overlay6')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">06</span>
              PROTECTING THE BRAND, DETERRING COPYCATS
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>

          {/* Card 7 */}
          <button 
            onClick={() => setActiveOverlay('overlay7')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">07</span>
              VISITOR ATTRACTIONS
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>

          {/* Card 8 */}
          <button 
            onClick={() => setActiveOverlay('overlay8')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">08</span>
              AWARDS & RECOGNITION
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>

          {/* Card 9 */}
          <button 
            onClick={() => setActiveOverlay('overlay9')}
            className="p-8 md:p-10 bg-base-200 hover:bg-base-100 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-left transition-all duration-300 group flex justify-between items-center w-full"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center">
              <span className="text-yellow-500 mr-4 font-mono">09</span>
              THE FUTURE IS WILD™ @ THE HILLOCKS
            </span>
            <span className="text-2xl md:text-3xl text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300 ml-4">
              ↗
            </span>  
          </button>
        </div>
      </section>

      {/* OVERLAY 1: THE FUTURE IS WILD™ LEGACY */}
      {activeOverlay === 'overlay1' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-emerald-500">THE FUTURE IS WILD™ LEGACY</h2>
              <div className="relative w-full flex justify-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ol5qjD1mMiI?si=gyBzM8I9lznxP-sL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="space-y-6 max-w-5xl mx-auto w-full">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">From Visionary Concept to Global Innovation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl text-white/80 leading-relaxed">
                  <div>The Future is Wild began as a radical question: What will life on Earth look like 5 million, 100 million, even 200 million years from now? <br /><br />The original prime-time documentary series brought rigorous evolutionary science to mass audiences.</div>
                  <div>The concept resonated globally, spawning an animated series, books in multiple languages, museum exhibitions, and educational programs reaching over 1 billion viewers worldwide. <br /><br /> The Future is Wild was never just about imaginary creatures in a distant future.</div>
                </div>
                <div className="border-t border-white/10 my-8 w-full"></div>
                <div className="pl-6 border-l-4 border-yellow-500 py-1 flex justify-center text-center">
                  <p className="text-xl md:text-3xl font-medium italic text-white/80 tracking-wide leading-relaxed">
                    "It was always about adaptation, evolution, and humanity's relationship with a changing planet."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 2: EVOLUTION OF THE CONCEPT */}
      {activeOverlay === 'overlay2' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-8">
<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-emerald-500">
  EVOLUTION OF THE CONCEPT
</h2>

<div className="relative w-full flex flex-col items-center gap-4">
  <div className="relative aspect-video max-w-3xl w-full bg-base-300 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
    <img
      src="https://i.ytimg.com/vi/KE8fYGeWnXU/maxresdefault.jpg"
      alt="Speculative Evolution"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Caption */}
  <p className="text-center text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
    For reference only- image source: https://i.ytimg.com/vi/KE8fYGeWnXU/maxresdefault.jpg

  </p>
</div>

              
              <div className="space-y-6 max-w-5xl mx-auto w-full">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">From "What If?" to "What Now?"</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl text-white/80 leading-relaxed">
                  <div>
                    The original series explored planetary change over millions of years - continental drift, climate shifts, speculative evolution - in a world without humans. It was pure imagination grounded in science.
                    <br /><br />
                    The Future is Wild @ The Hillocks takes that intellectual framework and brings it into urgent, contemporary relevance:
                  </div>
                  <div>
                    Instead of asking "What will Earth look like in 200 million years?" we're now asking:
                    <ul className="space-y-4 mt-4 list-none pl-6">
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What did our landscapes look like before we changed them?"</li>
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What have we lost?"</li>
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What are we losing now?"</li>
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What future are we creating - and what future could we still choose?"</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-white/10 my-8 w-full"></div>
                <div>
                  <p className="text-lg md:text-2xl text-white/70 tracking-wide leading-relaxed">
                    We're applying The Future is Wild's core methodology - rigorous science, speculative thinking, immersive storytelling - to the climate crisis happening now, in a specific place (New Zealand), with real consequences and real solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 3: THE HILLOCKS: PAST, PRESENT, FUTURE */}
      {activeOverlay === 'overlay3' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-12 max-w-5xl mx-auto w-full">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-emerald-500">THE HILLOCKS: PAST, PRESENT, FUTURE</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">Our Experience Structure</h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  A journey across past, present, and future—revealing how nature changes, and how we shape what comes next.
                </p>
              </div>

              {/* SECTION: PAST */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                  <img src="https://images.nzgeo.com/1970/01/4_eagle_header-2000x1571.jpg" alt="Past NZ" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">PAST (PRE-HUMAN NEW ZEALAND)</h4>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    VR experiences showing the Moa, Haast Eagle, and pristine ecosystems before humans arrived. This isn't nostalgia - it's context. Visitors see what "untouched nature" actually looked like, understanding the scale of change humans brought to New Zealand faster than anywhere else on Earth.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 w-full"></div>

              {/* SECTION: PRESENT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5 lg:order-2">
                  <img src="https://fiw.co.nz/images/about/Location-2.avif" alt="Present" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 lg:order-1">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">PRESENT (GEOLOGICAL FORCES & HUMAN IMPACT)</h4>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    The massive rockfall that created The Hillocks 8,000 years ago. Environmental changes since human arrival. The climate challenges we face today.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 w-full"></div>

              {/* SECTION: FUTURE */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                  <img src="https://static.wixstatic.com/media/5d5f9e_482437efe1da467c8d5a1dcdc6878f63~mv2.png/v1/fill/w_427,h_255,al_c,lg_1,q_85,enc_avif,quality_auto/Reg-4.png" alt="Replanting trees" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">FUTURE (ADAPTATION & HOPE)</h4>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    Reforestation, species recovery, climate resilience. Every visitor plants a tree. The future isn't predetermined - it's being created by choices we make now.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 my-8 w-full"></div>
              <div>
                <p className="text-lg md:text-2xl text-white/70 tracking-wide leading-relaxed">
                  This is The Future is Wild's founding question - "What if?" - applied to climate action instead of deep-time speculation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 4: CONTINUOUS EVOLUTION */}
      {activeOverlay === 'overlay4' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-8 max-w-5xl mx-auto w-full">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-emerald-500">CONTINUOUS EVOLUTION</h2>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">A Living Platform for Ongoing Exploration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-white/80 leading-relaxed">
                  <div>Like the original series, which grew from documentary to books to animation to museum exhibitions, The Future is Wild @ The Hillocks is a living, evolving platform.</div>
                  <div>
                    We'll add new VR experiences annually, continuing the intellectual exercise The Future is Wild pioneered:
                    <ul className="space-y-3 mt-4 pl-6">
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What if sea levels rise 2 meters?"</li>
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What if native forests expand across 50% more land?"</li>
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What if extinct species are reintroduced?"</li>
                      <li className="text-white font-medium relative before:content-['•'] before:absolute before:-left-5 before:text-emerald-500">"What if climate adaptation succeeds - or fails?"</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-white/10 my-8 w-full"></div>
                <div className="max-w-4xl">
                  <p className="text-lg md:text-2xl text-white/90 tracking-wide leading-relaxed">
                    Each new experience explores scenarios grounded in science, presented through cutting-edge immersive technology, engaging visitors emotionally and intellectually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 5: TECHNOLOGY LEADERSHIP */}
      {activeOverlay === 'overlay5' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-8 max-w-5xl mx-auto w-full">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-emerald-500">TECHNOLOGY LEADERSHIP</h2>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">Two Decades of Innovation in Immersive Storytelling</h3>
                <div className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl">
                  <p>The Future is Wild has always been at the forefront of technology in education and entertainment.</p>
                </div>

                {/* TIMELINE COMPONENT */}
                <div className="relative my-16 pl-6 md:pl-0">
                  <div className="absolute left-0 md:left-1/2 top-0 bottom-0 flex justify-center pointer-events-none w-0.5 md:w-auto transform md:-translate-x-1/2">
                    <div className="w-0.5 h-full bg-white/10"></div>
                  </div>
                  
                  <div className="space-y-12 relative">
                    {/* Item 1 - Left Side content */}
                    <div className="relative md:grid md:grid-cols-2 md:gap-8 items-start">
                      <div className="relative pl-6 md:pl-0 md:text-right md:pr-10">
                        <div className="absolute left-[-24px] md:left-auto md:right-0 md:translate-x-1/2 top-[10px] w-3 h-3 rounded-full bg-yellow-500 z-10"></div>
                        <span className="block text-2xl font-black text-yellow-500 mb-1 font-mono">2003</span>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                          Groundbreaking CGI animation bringing speculative creatures to life (pre-Avatar, pre-modern VR)
                        </p>
                      </div>
                      <div className="hidden md:block"></div>
                    </div>

                    {/* Item 2 - Right Side content */}
                    <div className="relative md:grid md:grid-cols-2 md:gap-8 items-start">
                      <div className="hidden md:block"></div>
                      <div className="relative pl-6 md:pl-10">
                        <div className="absolute left-[-24px] md:left-0 md:-translate-x-1/2 top-[10px] w-3 h-3 rounded-full bg-yellow-500 z-10"></div>
                        <span className="block text-2xl font-black text-yellow-500 mb-1 font-mono">2014</span>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                          Les Animaux du Futur at Futuroscope, France - the world's first Augmented Reality dark ride, merging physical ride experience with AR creatures
                        </p>
                      </div>
                    </div>

                    {/* Item 3 - Left Side content */}
                    <div className="relative md:grid md:grid-cols-2 md:gap-8 items-start">
                      <div className="relative pl-6 md:pl-0 md:text-right md:pr-10">
                        <div className="absolute left-[-24px] md:left-auto md:right-0 md:translate-x-1/2 top-[10px] w-3 h-3 rounded-full bg-yellow-500 z-10"></div>
                        <span className="block text-2xl font-black text-yellow-500 mb-1 font-mono">2026</span>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                          The Future is Wild @ The Hillocks - the world's first immersive VR eco-tourism attraction, combining guided nature walks through spectacular landscape with synchronized multi-user VR experiences and interactive AR wildlife encounters
                        </p>
                      </div>
                      <div className="hidden md:block"></div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 my-8 w-full"></div>
                <div className="pl-6 border-l-4 border-yellow-500 py-1">
                  <p className="text-xl md:text-3xl font-medium italic text-white/90 tracking-wide leading-relaxed">
                    "We don't follow trends. We create them."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 6: PROTECTING THE BRAND, DETERRING COPYCATS */}
      {activeOverlay === 'overlay6' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-12 max-w-5xl mx-auto w-full">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-emerald-500">PROTECTING THE BRAND, DETERRING COPYCATS</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">A Defensible Platform Built on Legacy, Science, and IP</h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
                  The Future is Wild @ The Hillocks isn't just "VR nature attraction." It's the continuation of a 25-year intellectual and creative legacy that includes:
                </p>
                <ul className="space-y-4 max-w-4xl text-base md:text-lg text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>1 billion+ global viewers across multiple media platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Peer-reviewed scientific foundation (original series consulted leading evolutionary biologists, geologists, climatologists)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Proven track record of innovation in immersive storytelling (world-first AR dark ride, now world-first VR eco-tourism)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Deep brand recognition with new 8-episode TV series in development (2026/2027)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Proprietary technology (synchronized multi-user VR playback system) developed specifically for this application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Licensed IP - "The Future is Wild" trademark protects the brand globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Cultural partnerships with Ngāi Tahu organisations (Murihiku Regeneration, Te Tapu O Tane) grounding our work in mātauranga Māori (indigenous knowledge)</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/10 my-8 w-full"></div>
              <div>
                <p className="text-lg md:text-2xl text-white/70 tracking-wide leading-relaxed">
                  Anyone can create a VR nature experience. No one else has The Future is Wild legacy, brand recognition, scientific credibility, technology leadership, and proven track record of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 7: VISITOR ATTRACTIONS */}
      {activeOverlay === 'overlay7' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-12 max-w-5xl mx-auto w-full">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-emerald-500">VISITOR ATTRACTIONS</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">A Track Record of World-Class Visitor Experiences</h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Across theme parks, museums, and immersive venues, The Future is Wild has evolved into a series of globally recognised visitor experiences—blending scientific insight with powerful storytelling.
                </p>
              </div>

              {/* SECTION: FUTUROSCOPE */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <div className="w-full max-w-md aspect-[3/4] bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
    <img
      src="https://www.thefutureiswild.com/wp-content/uploads/2014/01/tfiw-exhib-hl-futuroscope.jpg"
      alt="image of Les Animaux du Futur at Futuroscope Parc"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="space-y-4">
    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-sm font-mono">
      Poitiers, France
    </span>

    <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">
      Les Animaux du Futur at Futuroscope Parc
    </h4>

    <span className="block text-white/50 text-sm uppercase tracking-wide font-medium">
      World’s first augmented reality dark ride
    </span>

    <p className="text-base md:text-lg text-white/70 leading-relaxed pt-2">
      Opened in 2008, it allowed visitors to see future creatures in their habitats via specialized glasses.
      The attraction closed in 2012 and was replaced by The Time Machine.
      <br />
      <br />
      Equipped with AR binoculars and sensor technology, guests experience close encounters with future life
      forms in fully immersive environments.
    </p>

    <ul className="space-y-2 text-white/90 pt-2 text-base">
      <li className="flex items-start gap-2">
        <span className="text-emerald-500 font-bold">→</span>
        <span>Millions of annual visitors, including school groups across Europe</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-emerald-500 font-bold">→</span>
        <span>One of the earliest large-scale AR attractions globally</span>
      </li>
    </ul>
  </div>
</div>

              <div className="border-t border-white/10 w-full"></div>

              {/* SECTION: PLANETARIUM */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5 lg:order-2">
                  <img src="https://i.ytimg.com/vi/UiKwxhAiOYY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBouMm03iNTzebXpT7gaRfKnX-8Yg" alt="The Future is Wild - 3D Planetarium" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 lg:order-1">
                  <span className="block text-yellow-500 font-bold uppercase tracking-widest text-sm font-mono">Salt Lake City, USA</span>
                  <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">The Future is Wild - 3D Planetarium special by Evans & Sutherland</h4>
                  <span className="block text-white/50 text-sm uppercase tracking-wide font-medium">3D immersive space experience</span>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed pt-2">
                    The Future is Wild is a 20-minute fulldome 3D planetarium show created by Evans & Sutherland (E&S) Digital Theater in Salt Lake City, USA, released in January 2004. The intention was to
                  </p>
                  <ul className="space-y-2 text-white/90 pt-2 text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">→</span>
                      <span>to demonstrate the quality and performance of their projection systemusing the content of FIW</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 w-full"></div>

              {/* SECTION: MÜNCHEHAGEN */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div className="w-full max-w-md aspect-[3/4] bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
    <img
      src="https://www.thefutureiswild.com/wp-content/uploads/2014/01/tfiw-exhib-hl-dinopark.jpg"
      alt="Münchehagen Dinosaur Park Exhibition"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="space-y-4">
    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-sm font-mono">
      Münchehagen, Germany
    </span>

    <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">
      Dinosaur Park Exhibition
    </h4>

    <span className="block text-white/50 text-sm uppercase tracking-wide font-medium">
      Permanent exhibition
    </span>

    <p className="text-base md:text-lg text-white/70 leading-relaxed pt-2">
      In 2012 the Dinosaur Park at Münchehagen celebrated its 20th Birthday.
      A dedicated FIW exhibition hall featuring 16 life-sized future creatures
      in fully realised habitats.
    </p>

    <ul className="space-y-2 text-white/90 pt-2 text-base">
      <li className="flex items-start gap-2">
        <span className="text-emerald-500 font-bold">→</span>
        <span>
          Combines physical installations with sound, video, and storytelling
        </span>
      </li>
    </ul>
  </div>
</div>

              <div className="border-t border-white/10 w-full"></div>

{/* SECTION: TEUFELSSCHLUCHT */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div className="w-full max-w-xl bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5 lg:order-2">
    <img
      src="https://static.wikia.nocookie.net/the-future-is-wild/images/0/09/FullSizeModelsTeaser.jpg"
      alt="Teufelsschlucht Dinosaur Park Exhibition"
      className="w-full h-auto object-contain"
    />
  </div>

  <div className="space-y-4 lg:order-1">
    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-sm font-mono">
      Teufelsschlucht, Germany
    </span>

    <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">
      Dinosaur Park Exhibition
    </h4>

    <span className="block text-white/50 text-sm uppercase tracking-wide font-medium">
      Permanent exhibition
    </span>

    <p className="text-base md:text-lg text-white/70 leading-relaxed pt-2">
      Extends traditional dinosaur park experiences into the future; exploring
      how life may evolve millions of years ahead.
    </p>

    <ul className="space-y-2 text-white/90 pt-2 text-base">
      <li className="flex items-start gap-2">
        <span className="text-emerald-500 font-bold">→</span>
        <span>
          Blends education with family-friendly exploration
        </span>
      </li>
    </ul>
  </div>
</div>

              <div className="border-t border-white/10 w-full"></div>

{/* SECTION: SYDNEY */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div className="w-full max-w-md aspect-[3/4] bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
    <img
      src="https://www.thefutureiswild.com/wp-content/uploads/2014/01/tfiw-exhib-hl-sydney.jpg"
      alt="SEA LIFE Sydney Aquarium"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="space-y-4">
    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-sm font-mono">
      Sydney, Australia
    </span>

    <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">
      SEA LIFE Sydney Aquarium
    </h4>

    <span className="block text-white/50 text-sm uppercase tracking-wide font-medium">
      Integrated immersive exhibition
    </span>

    <p className="text-base md:text-lg text-white/70 leading-relaxed pt-2">
      Opened in 1988, it features a large variety of Australian aquatic life,
      displaying more than 700 species comprising more than 13,000 individual
      fish and other sea and water creatures from most of Australia's water
      habitats.
    </p>

    <ul className="space-y-2 text-white/90 pt-2 text-base">
      <li className="flex items-start gap-2">
        <span className="text-emerald-500 font-bold">→</span>
        <span>One of the most immersive FIW exhibitions to date</span>
      </li>
    </ul>
  </div>
</div>

              <div className="border-t border-white/10 my-8 w-full"></div>
              <div>
                <p className="text-lg md:text-2xl text-white/70 tracking-wide leading-relaxed">
                  These attractions demonstrate the scalability of The Future is Wild—from broadcast IP to world-class physical experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 8: AWARDS & RECOGNITION */}
      {activeOverlay === 'overlay8' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-12 max-w-5xl mx-auto w-full">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-emerald-500">AWARDS & RECOGNITION</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">Recognised Across Science, Storytelling, and Innovation</h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Over the years, The Future is Wild has been recognised not just for what it imagines—but for how it connects science, storytelling, and audiences around the world.
                </p>
              </div>

              {/* GRID SYSTEM: TWO COLUMNS PER ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Award 1 */}
                <div className="space-y-4">
                  <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://i.ytimg.com/vi/_h4x8Ui-SAs/maxresdefault.jpg" alt="DOC SERIES" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black uppercase text-emerald-500 tracking-wide">DOC SERIES</h4>
                    <ul className="space-y-2 text-white/70 text-base md:text-lg leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Finalist at the four major natural history festivals of Tokyo, Wildscreen, Jackson Hole and Missoula</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Winner at Czech Eko Film</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Silver Medal Winner at New York Festivals</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Award 2 */}
                <div className="space-y-4">
                  <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://img.rgstatic.com/content/show/84e6de56-a649-4b5c-b6a8-499dc6aa4a15/beebb802-0d66-4fc5-8cef-c1b69b1def18/5c0c885d-f924-43ff-b7c5-a2ab9aa316fa/screenshot-400.jpg" alt="ANIMATED KIDS SERIES" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black uppercase text-emerald-500 tracking-wide">ANIMATED KIDS SERIES</h4>
                    <ul className="space-y-2 text-white/70 text-base md:text-lg leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Artios Award for Casting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Emmy nominations for Scripting, Directing & Sound</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Award 3 */}
                <div className="space-y-4">
                  <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://static.wikia.nocookie.net/the-future-is-wild/images/8/81/WWF1.jpg" alt="THE WILD WORLD OF THE FUTURE BOOK" className="w-full h-full object-contain " />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black uppercase text-emerald-500 tracking-wide">THE WILD WORLD OF THE FUTURE BOOK</h4>
                    <ul className="space-y-2 text-white/70 text-base md:text-lg leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Winner Seoul Book Awards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Award 4 */}
                <div className="space-y-4">
                  <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://i.ytimg.com/vi/UiKwxhAiOYY/hq720.jpg" alt="DIGISTAR DOME FILM" className="w-full h-full object-cover opacity-75" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black uppercase text-emerald-500 tracking-wide">DIGISTAR DOME FILM</h4>
                    <ul className="space-y-2 text-white/70 text-base md:text-lg leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Winner of two Telly Awards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Award 5 */}
                <div className="space-y-4">
                  <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://res.dayoutwiththekids.co.uk/image/upload/c_fill%2Cq_auto%2Cw_1196%2C/v1753873562/attractions/t/9b8e95d0-084b-4376-a14e-0b222b5a1936/file_dllwzb.webp" alt="TWYCROSS FIW EDUCATIONAL EXPERIENCE" className="w-full h-full object-cover opacity-75" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black uppercase text-emerald-500 tracking-wide">TWYCROSS FIW EDUCATIONAL EXPERIENCE</h4>
                    <ul className="space-y-2 text-white/70 text-base md:text-lg leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>BIAZA award for Best Education Project in British Zoos and Aquariums</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Award 6 */}
                <div className="space-y-4">
                  <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <img src="https://i.postimg.cc/3r4pn9FP/LES-ANIMAUX-DU-FUTUR-DARK-RIDE.png" alt="LES ANIMAUX DU FUTUR DARK RIDE" className="w-full h-full object-cover opacity-75" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black uppercase text-emerald-500 tracking-wide">LES ANIMAUX DU FUTUR DARK RIDE</h4>
                    <ul className="space-y-2 text-white/70 text-base md:text-lg leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span>–</span>
                        <span>Laval Technology Prize</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="border-t border-white/10 my-8 w-full"></div>
              <div>
                <p className="text-lg md:text-2xl text-white/70 tracking-wide leading-relaxed">
                  These attractions demonstrate the scalability of The Future is Wild—from broadcast IP to world-class physical experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY 9: THE FUTURE IS WILD™ @ THE HILLOCKS */}
      {activeOverlay === 'overlay9' && (
        <div 
          className="fixed inset-0 z-50 bg-base-200 flex flex-col overflow-y-auto animate-fade-in"
          onClick={() => setActiveOverlay(null)}
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-end">
            <button onClick={() => setActiveOverlay(null)} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Close [X]</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-6 pb-20 flex-1 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-12 max-w-5xl mx-auto w-full">
              
              {/* HEADER SECTION */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-emerald-500">THE FUTURE IS WILD™ @ THE HILLOCKS</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">The Convergence of Science, Technology, and Living Landscape</h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Where a global brand meets a local landscape. Where 25 years of visionary thinking meets urgent climate action. Where entertainment and education merge with conservation and hope.
                  <br /><br />
                  The story began in 2002 with a question about the distant future.
                  <br /><br />
                  It continues in 2026 with a question about the future we're creating right now.
                  <br /><br />
                  What if we could see the past we've lost, understand the present we've created, and shape the future we choose?
                  <br /><br />
                  Welcome to The Future is Wild @ The Hillocks.
                </p>
              </div>

              <div className="border-t border-white/10 w-full"></div>

              {/* PROJECT STRUCTURE */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                  <img src="https://i.ibb.co/HDrQ7hqG/Hillocks-Holding-Flyer-20-Pages-19052026pdf-08.png" alt="Project Structure" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">PROJECT STRUCTURE</h4>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    Designed as an integrated ecosystem of learning and discovery, our facility links physical terrain and digital space. The journey weaves across specialized zones—from high-tech immersion hubs to outdoor discovery loops—giving visitors a beautifully continuous path to engage with planetary change, native ecosystem restoration, and active habitat creation.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 w-full"></div>

              {/* PROJECT TEAM */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-2xl border border-white/5 lg:order-2">
                  <img src="https://i.ibb.co/NdWDjxgQ/Hillocks-Holding-Flyer-20-Pages-19052026pdf-15.png" alt="Project Team" className="w-full h-full object-contain" />
                </div>
                <div className="space-y-4 lg:order-1">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">OUR PROJECT TEAM</h4>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    Bringing this ambitious masterplan to life requires an incredible collaborative brain trust. Our team seamlessly unites international visionaries, world-class XR environment developers, indigenous cultural guardians, and pioneering ecologists. Together, we match groundbreaking technological precision directly with deep ancestral knowledge and scientific rigor.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 w-full"></div>

              {/* BEHIND THE SCENES CONTENT */}
              <div className="space-y-8">

                <h4 className="text-xl md:text-2xl font-black uppercase text-emerald-500">BEHIND THE SCENES</h4>
                              
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Building a state-of-the-art technological ecosystem in the raw, natural topography of Glenorchy means taking innovation directly into the wild. We pull back the curtain on how advanced engineering, high-fidelity world building, and spatial compute mechanics bind perfectly with the physical soil.
                </p>

                                                <div className="relative w-full flex justify-center">
                  <div className="relative aspect-video max-w-3xl w-full bg-base-300 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                  <img
                    src="https://blocks.astratic.com/img/general-video.png"
                    alt="Legacy"
                    className="w-full h-full object-cover opacity-60"
                  />
                  </div> 
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                  <div className="bg-base-100 p-6 rounded-2xl border border-white/5 space-y-3">
                    <h5 className="text-lg font-bold text-white uppercase tracking-wider">Onsite Development</h5>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                      To create our AR/VR experiences, we used LiDAR scanning to map the Glenorchy Hillocks down to the millimeter. This allows our digital creatures to "step" over real rocks and navigate the actual terrain of the trail with absolute precision.
                    </p>
                  </div>

                  <div className="bg-base-100 p-6 rounded-2xl border border-white/5 space-y-3">
                    <h5 className="text-lg font-bold text-white uppercase tracking-wider">VR Productions</h5>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                      Crafting a fully responsive 360-degree environment means balancing raw visual rendering with complex scientific data. Our VR workflows utilize advanced cinematic fluid dynamics and customized asset rigging to deliver highly realistic, interactive climate and evolutionary scenarios.
                    </p>
                  </div>

                  <div className="bg-base-100 p-6 rounded-2xl border border-white/5 space-y-3">
                    <h5 className="text-lg font-bold text-white uppercase tracking-wider">AR Productions</h5>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                      By anchoring complex geospatial anchors along the trail, our augmented reality layer seamlessly aligns real-time lighting and shadows with local weather. The result is an invisible overlay that instantly turns the living forest into an educational, responsive canvas.
                    </p>
                  </div>


                  
                </div>
              </div>

              {/* BLOCKQUOTE SECTION */}
              <div className="border-t border-white/10 my-8 w-full"></div>
              <div className="pl-6 border-l-4 border-yellow-500 py-1 flex justify-center text-center">
                <p className="text-xl md:text-3xl font-medium italic text-white/80 tracking-wide leading-relaxed">
                  "The future is not a place we are going, but a place we are actively building through design, technology, and conscious choice."
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegacyPage;