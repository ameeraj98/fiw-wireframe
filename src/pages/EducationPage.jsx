import React from 'react';

const EducationPage = () => {
  const curriculumPoints = [
    { level: "Levels 2–3", focus: "Point 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    { level: "Levels 4–5", focus: "Point 2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    { level: "Technology", focus: "Point 3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " }
  ];

  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Education & <span className="text-emerald-500">Learning</span>
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl leading-relaxed">
            Inspiring the next generation of explorers to understand, protect, and reimagine our world through STEM-based discovery.
          </p>
        </div>
      </section>

      {/* SCHOOL PROGRAM INFO - Zig-Zag Layout (Text Left / Image Right) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">School Program Information</h2>
              <p className="text-xl opacity-80 leading-relaxed">
                Our programs bridge the gap between classroom theory and physical exploration, aligned with the New Zealand Curriculum.
              </p>
            </div>
            
            <div className="space-y-4">
              {curriculumPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-base-100 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">

                  <div>
                    <h4 className="font-bold text-white text-lg">{point.focus}</h4>
                    <p className="text-l opacity-60 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square bg-base-100 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://blocks.astratic.com/img/general-video.png" 
              alt="Students using AR on trail" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* DOWNLOADABLE RESOURCES - Zig-Zag Layout (Image/Box Left / Text Right) */}
      <section className="py-24 bg-base-200 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Box Container on the Left */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-3xl order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest text-emerald-500">Teacher Toolkit</h3>
              <ul className="space-y-4 opacity-80">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Item 1
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Item 2
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Item 3
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Item 4
                </li>
              </ul>
              <button className="btn w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-black border-none font-bold uppercase">
                Download Resources (PDF)
              </button>
            </div>

            {/* Text on the Right */}
            <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">Downloadable Teaching Resources</h2>
              <p className="text-xl opacity-70 leading-relaxed">
                We provide a comprehensive suite of teaching materials to ensure your visit is as educational as it is immersive. Our resources are crafted by speculative biologists and educators to spark curiosity.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* EDUCATIONAL TRUST SECTION */}
<section className="py-24 bg-emerald-950/30">
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
        3%
      </span>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] opacity-70">
        Of Net Profit · Educational Trust
      </p>
    </div>

    <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
      Education Since 2002.
      <br />
      <span className="text-emerald-500">
        Now in Its Next Generation.
      </span>
    </h2>

    <p className="text-xl opacity-80 leading-relaxed mb-10">
      The Future is Wild™ has been driving environmental education
      programmes since 2002 — across every school level and across every
      continent, with established programmes in the US, throughout Europe,
      and into Asia.
    </p>

    <p className="text-sm md:text-base font-bold uppercase tracking-widest text-emerald-500">
      ® Over two decades of education. A new generation of impact.
    </p>
  </div>
</section>

      {/* VIRTUAL FIELD TRIPS (FUTURE) */}
      <section className="py-32 bg-base-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl grayscale">
              <img 
                src="https://blocks.astratic.com/img/general-video.png" 
                alt="Virtual Field Trip Concept" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/90 backdrop-blur-md px-8 py-3 rounded-full border border-emerald-500/40 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
                  Coming soon
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white/40">Virtual Field Trips</h2>
              <p className="text-xl opacity-50 leading-relaxed">
                Can't make it to Glenorchy? We are developing a livestream VR program allowing classes to join our explorers on a live expedition from anywhere in the world.
              </p>
              <div className="pt-4">
                 <span className="text-xs font-black uppercase tracking-widest px-4 py-2 border border-white/10 rounded-lg opacity-40">Development Phase</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;