import React from 'react';

const PlanPage = () => {
  const ticketTypes = [
    { type: "Adult", price: "$45", desc: "Full access to VR Hides & AR Trail" },
    { type: "Child", price: "$25", desc: "Ages 7-15. Must be with an adult." },
    { type: "Family", price: "$120", desc: "2 Adults + 2 Children" },
    { type: "Concession", price: "$35", desc: "Students & Seniors (ID required)" }
  ];

  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-20 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Plan Your Visit
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl">
            Everything you need to know before stepping into the future of the Glenorchy Hillocks.
          </p>
        </div>
      </section>



      {/* LOCATION & HOURS SECTION */}
      <section className="bg-base-200 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map Placeholder */}
            <div className="relative aspect-video bg-base-100 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://www.unitedwayqc.org/wp-content/uploads/2022/12/placeholder-1024x683.png" 
                alt="Glenorchy Location" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            {/* Hours & Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold italic text-emerald-500">How to find us</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                We are located at the edge of the Glenorchy Hillocks, just a 45-minute scenic drive from Queenstown. Look for the "Future is Wild" banners at the Basecamp entrance.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-bold">Monday — Friday</span>
                  <span className="opacity-70">10:00 AM — 4:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-bold">Saturday — Sunday</span>
                  <span className="opacity-70">10:00 AM — 4:00 PM</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARKING & ARRIVAL SECTION */}
<section className="py-20 bg-base-300">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1 space-y-6">
        <h2 className="text-3xl font-bold italic text-emerald-500">Parking & Arrival</h2>
        <p className="text-lg opacity-80 leading-relaxed">
          Free parking is available for all visitors at the Basecamp Entrance. We provide dedicated spaces for campervans and buses, as well as EV charging stations for those traveling sustainably.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-base-100 border border-white/5 rounded-2xl">
            <h4 className="font-bold text-white mb-1">Parking Type 1</h4>
            <p className="text-sm opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className="p-4 bg-base-100 border border-white/5 rounded-2xl">
            <h4 className="font-bold text-white mb-1">Parking Type 2</h4>
            <p className="text-sm opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <img 
          src="https://www.unitedwayqc.org/wp-content/uploads/2022/12/placeholder-1024x683.png" 
          alt="Parking Area" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </div>
  </div>
</section>

      

      {/* FINAL CTA */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
          Ready to explore?
        </h2>
        <p className="text-xl opacity-70 mb-10">
          Bookings are highly recommended as AR headsets are limited for each time slot.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="btn btn-lg btn-emerald-500 hover:btn-primary-400 text-neutral-900 border-none px-12">
            Book now
          </button>
          <button className="btn btn-lg btn-outline text-white px-12">
            Contact us
          </button>
        </div>
      </section>
{/* ACCOMMODATIONS SECTION */}
<section className="py-20 bg-base-200 border-y border-white/5">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-black uppercase mb-12 text-center">
      Stay Nearby
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Accommodation Name 1", type: "Accommodation Type 1", distance: "x mins away" },
        { name: "Accommodation Name 2", type: "Accommodation Type 2", distance: "x mins away" },
        { name: "Accommodation Name 3", type: "Accommodation Type 3", distance: "x mins away" }
      ].map((place, i) => (
        <div key={i} className="card bg-base-300 border border-white/5 hover:border-emerald-500/50 transition-all p-8">
          <h3 className="text-xl font-bold text-white">{place.name}</h3>
          <p className="text-emerald-500 text-sm font-bold uppercase mt-1">{place.type}</p>
          <div className="divider opacity-5"></div>
          <p className="text-sm opacity-60 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {place.distance}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* LOCAL REGION SECTION */}
<section className="py-20 bg-base-300">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <img 
          src="https://blocks.astratic.com/img/general-video.png" 
          alt="Glenorchy Region" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold italic text-emerald-500">Discover Glenorchy</h2>
        <p className="text-lg opacity-80 leading-relaxed">
          Known as the "Gateway to Paradise," Glenorchy is a hub for outdoor enthusiasts. Beyond the Hillocks, explore the Dart River by jet boat, hike the world-famous Routeburn Track, or visit filming locations from iconic cinematic trilogies.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm opacity-70">
          <li>• Activity 1</li>
          <li>• Activity 2</li>
          <li>• Activity 3</li>
          <li>• Activity 4</li>
        </ul>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default PlanPage;