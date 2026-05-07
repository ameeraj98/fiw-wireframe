import React from 'react';
import { Link } from 'react-router-dom';

const ExperiencePage = () => {
  const journeySteps = [
    {
      step: "01",
      title: "Arrival at the Visitor Center",
      desc: "Our purpose-built visitor centre features ticket counter and check-in, merchandising store, 100 sqm rotating exhibition space, and etc."
    },
    {
      step: "02",
      title: "Guided VR Experience",
      desc: "Groups of up to 15 people depart with their dedicated guide for a journey through time."
    },
    {
      step: "03",
      title: "AR Self Guided Return",
      desc: "After Hide 4, visitors proceed to the AR Experience, encountering 4-5 AR stations."
    },
    {
      step: "04",
      title: "End of Journey",
      desc: "Return back to the Visitor Center after completing the journeys."
    }
  ];

  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-16 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            The Experience
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl">
            A 1.5km looped route through the Southern Hillocks, featuring four discrete viewing hides and an elevated AR platform.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-base-200 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">What To Expect</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    { 
      title: "Duration", 
      desc: "Approximately 90 minutes for the full loop.", 
      icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
    },
    { 
      title: "Accessibility", 
      desc: "Gravel paths; suitable for all-terrain equipment.", 
      icon: "M9 6.75V15m6-10.5v.112c0 .071 0 .141-.021.21L13.65 11.543a.375.375 0 01-.7a0L11.622 4.821a.75.75 0 00-.02-.21V4.5M9 9h.008v.008H9V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" 
    },
    { 
      title: "Clothing", 
      desc: "Outdoor footwear and wind-proof layers recommended.", 
      icon: "M8.25 2.25h7.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25zM12 9.75v3m-3-3l3-3 3 3" 
    },
    { 
      title: "Age", 
      desc: "Recommended for ages 7+. Adult supervision required.", 
      icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" 
    }
  ].map((item, i) => (
    <div key={i} className="card bg-base-300 border border-white/5 text-center p-8 hover:bg-base-200 transition-colors duration-300">
      <div className="text-emerald-500 mb-4 flex justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
        </svg>
      </div>
      <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
      <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* VISITOR JOURNEY & MAP GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: INTERACTIVE TRAIL MAP */}
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold mb-6 italic text-emerald-500">Interactive Trail Map</h2>
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-base-100 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png" 
                alt="2D Trail Map of the Hillocks" 
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: STEP-BY-STEP JOURNEY */}
          <div className="space-y-12">

            <div className="space-y-12">
              {journeySteps.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-black text-white/10 group-hover:text-emerald-500/30 transition-colors duration-300">
                      {item.step}
                    </div>
                    {index !== journeySteps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VR HIDE SECTION - Left Content / Right Image Layout */}
<section className="bg-base-200 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      {/* LEFT SIDE: Section Header + VR HIDE DETAILS */}
      <div className="space-y-10 order-2 lg:order-1">
        {/* Section Title & Description */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">VR Experience</h2>
          <p className="text-xl opacity-70 leading-relaxed">
            Immerse yourself in a 360-degree speculative evolution experience from the safety of our VR Hides.
          </p>
        </div>

        {/* VR HIDE LIST */}
        <div className="space-y-6">
          {[
            { 
              title: "VR Hide 1 - Ancient Encounters", 
              desc: "Journey back to the beginning of the Hillocks' evolutionary path. Witness the early ancestors of the creatures that now roam the future landscape."
            },
              { 
              title: "VR Hide 2 - Forces of Nature", 
              desc: "Experience the dramatic environmental shifts that shaped the world. From volcanic eruptions to massive floods, see how life adapted to survive." 
            },
            { 
              title: "VR Hide 3 - Ice Age Wonders", 
              desc: "Step into a frozen future. Explore the unique biology of creatures that thrive in the extreme cold of the coming ice ages." 
            },
            { 
              title: "VR Hide 4 - Future Visions", 
              desc: "Peer into the ultimate horizon where nature and human legacy collide. Explore a world of extreme resilience, witnessing how life persists and flourishes through the most radical climate shifts of the next 200 million years." 
            }
          ].map((hide, i) => (
            <div key={i} className="card bg-base-100 border border-white/10 shadow-lg hover:border-emerald-500/50 transition-colors">
              <div className="card-body p-6">
                <h3 className="card-title text-emerald-500 text-xl font-bold">{hide.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{hide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Image (Maintains Map properties) */}
      <div className="lg:sticky lg:top-24 order-1 lg:order-2">
        <div className="relative aspect-square md:aspect-video lg:aspect-square bg-base-100 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png" 
            alt="VR Hide Preview" 
            className="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* AR Stations SECTION - Left Image / Right Content Layout */}
<section className="bg-base-200 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      {/* LEFT SIDE: Image (Maintains Map properties) */}
      <div className="lg:sticky lg:top-24">
        <div className="relative aspect-square md:aspect-video lg:aspect-square bg-base-100 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png" 
            alt="VR Hide Preview" 
            className="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT SIDE: Section Header + VR HIDE DETAILS */}
      <div className="space-y-10">
        {/* Section Title & Description moved here */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">AR Experience</h2>
          <p className="text-xl opacity-70 leading-relaxed">
            Use your mobile/tablet device to bring extinct giants to life in the palm of your hand upon completion of VR hides.
          </p>
        </div>

        {/* VR HIDE LIST */}
        <div className="space-y-6">
          {[
            { 
              title: "Moa Lookout", 
              desc: "Witness the return of a giant in a life-sized encounter, where you can get closer, feed, and observe their nature behaviors." 
            },
            { 
              title: "Haast Eagle Lookout", 
              desc: "Experience the sheer scale of the world’s largest eagle as its 3-meter wingspan sweeps across the sky for an unforgettable moment." 
            },
            { 
              title: "Kiwi Lookout", 
              desc: "Get up close with New Zealand's national icon to help it build its nest." 
            },
            { 
              title: "Ancient Forest Immersion Lookout", 
              desc: "Step into a pre-human sanctuary to discover a hidden world of extinct and rare species that once ruled the New Zealand wilderness." 
            },
                        { 
              title: "Ice Age Valley Lookout", 
              desc: "Compare the present-day landscape with a frozen past, using your lens to reveal towering glaciers as they appeared at the end of the last ice age." 
            }
          ].map((hide, i) => (
            <div key={i} className="card bg-base-100 border border-white/10 shadow-lg hover:border-emerald-500/50 transition-colors">
              <div className="card-body p-6">
                <h3 className="card-title text-emerald-500 text-xl font-bold">{hide.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{hide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      

      
    </div>
  );
};

export default ExperiencePage;