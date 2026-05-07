import React from 'react';

const BookingPage = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            <span className="text-emerald-500">Book </span> with us
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            Check availability and book your immersive time-travel experience. The future is closer than you think.
          </p>
        </div>
      </section>

      {/* TRAVEL ESTIMATION INFO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Slot Duration", 
              value: "60 Mins", 
              desc: "Includes VR briefing and AR trail hike." 
            },
            { 
              title: "Max Group Size", 
              value: "15 People", 
              desc: "To maintain immersion and trail safety." 
            },
            { 
              title: "Arrival Window", 
              value: "15 Mins", 
              desc: "Required check-in time before VR departure." 
            }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 border border-white/5 rounded-3xl bg-base-200/50">
              <p className="text-xs uppercase tracking-widest opacity-50 mb-2">{stat.title}</p>
              <p className="text-4xl font-black text-emerald-500 mb-2">{stat.value}</p>
              <p className="text-sm opacity-60">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING SYSTEM PLACEHOLDER */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-base-100 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Coming Soon Status */}
            <div className="p-12 space-y-8 bg-gradient-to-br from-emerald-500/10 to-transparent">
              <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 text-emerald-500 text-xs font-bold uppercase tracking-widest ">
                System Status: Launching Late 2026
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                Our Secure Booking Portal is <span className="italic">Under Construction.</span>
              </h2>
              <p className="opacity-70 leading-relaxed">
                We are currently fine-tuning our neural-link reservation system to ensure a seamless departure from the present. Early bird slots will open in August 2026.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Priority access to opening week slots",
                  "Exclusive digital collectibles for early adopters",
                  "Monthly updates on speculative biology breakthroughs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Waitlist Form */}
            <div className="p-12 flex flex-col justify-center bg-base-200">
              <h3 className="text-xl font-bold mb-6">Join the Waitlist</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-widest opacity-50 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-base-300 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest opacity-50 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@future.com" 
                    className="w-full bg-base-300 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                
                {/* JOIN PRE-LAUNCH LIST BUTTON */}
                <button 
                type="submit" 
                className="w-full group relative inline-flex items-center justify-center px-8 min-h-[50px] rounded-lg bg-emerald-500 backdrop-blur-md text-base-content font-semibold tracking-wide shadow-xl shadow-emerald-500/20 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-emerald-500/20  hover:scale-105  overflow-hidden "
>
  {/* The Animated Shine Effect */}
  <span className="
    absolute inset-0
    bg-gradient-to-r from-transparent via-white/30 to-transparent
    -translate-x-[150%] group-hover:translate-x-[150%]
    transition-transform duration-700 ease-out
  " />

  <span className="relative z-10 flex items-center justify-center gap-2">
    Join Pre-launch List

  </span>
</button>

                
                <p className="text-xl
                 opacity-40 text-center mt-4">
                  By joining, you agree to receive communications regarding the 2026 Glenorchy opening.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default BookingPage;