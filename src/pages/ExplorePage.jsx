import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "@phosphor-icons/react";

const ExplorePage = () => {
  const theJourney = [
    { name: "The Experience", path: "/experience", desc: "Step into the future of the Hillocks." },
    { name: "A Global Legacy", path: "/legacy", desc: "Connection to the origins." },
    { name: "Plan Your Visit", path: "/plan", desc: "Everything you need to know before you arrive." },
    { name: "Booking", path: "/booking", desc: "Secure your passage. Reservations are now open for the 2026 season." },
  ];

  const impactLegacy = [
    { name: "Education", path: "/education", desc: "Curated resources and programs for schools, universities, and research" },
    { name: "Conservation", path: "/conservation", desc: "Protecting our local ecosystem through dedicated conservation." },
  ];

    const support = [
    { name: "Contact Us", path: "/contact", desc: "Need help or support? Our guest services team is available Mon–Fri, 9am–5pm NZST." },
  ];

  const legalPages = [
    { name: "Privacy Policy", path: "/privacy", desc: "A transparent look at how we respect your data, manage your information, and ensure your digital footprint remains secure."  },
    { name: "Terms of Service", path: "/terms", desc: "The foundational agreement defining the rules of engagement for our platforms and the mutual expectations for our users."  },
    { name: "Cookie Policy", path: "/cookies", desc: "A detailed breakdown of the digital tools we use to enhance your browsing experience and how you can manage them."  },
    { name: "Accessibility Statement", path: "/accessibility", desc: "Our ongoing commitment to ensuring our digital world remains inclusive and navigable for everyone, regardless of ability."  },
  ];

  // Arrow Icon
  const ArrowIcon = () => (
    <ArrowRight
      size={20}
      weight="bold"
      className="text-emerald-500"
    />
  );

  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            <span className="text-emerald-500">Explore </span> our world
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            A complete directory of our digital and physical landscape. From the first spark of an idea to the ground beneath your feet, navigate the evolution of the Hillocks.
          </p>
        </div>
      </section>

      {/* DIRECTORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-24">
          
          {/* THE JOURNEY SUBSECTION */}
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold mb-6 italic text-base-content">The Journey</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {theJourney.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className="group relative p-8 bg-base-200/80 backdrop-blur border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-emerald-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                  <div className="flex justify-between items-start relative z-10">
                    <div className="max-w-[85%] space-y-3">
                      <h3 className="text-xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
                        {page.name}
                      </h3>
                      <p className="text-base opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity duration-300">
                        {page.desc}
                      </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-emerald-400">
                      <ArrowRight size={22} weight="bold" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>

          {/* IMPACT & LEGACY SUBSECTION */}
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold mb-6 italic text-base-content">Impact & Legacy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {impactLegacy.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className="group relative p-8 bg-base-200/80 backdrop-blur border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-emerald-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                  <div className="flex justify-between items-start relative z-10">
                    <div className="max-w-[85%] space-y-3">
                      <h3 className="text-xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
                        {page.name}
                      </h3>
                      <p className="text-base opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity duration-300">
                        {page.desc}
                      </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-emerald-400">
                      <ArrowRight size={22} weight="bold" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>

          {/* SUPPORT SUBSECTION */}
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold mb-6 italic text-base-content">Support</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {support.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className="group relative p-8 bg-emerald-950/20 backdrop-blur border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-emerald-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                  <div className="flex justify-between items-start relative z-10">
                    <div className="max-w-[85%] space-y-3">
                      <h3 className="text-xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
                        {page.name}
                      </h3>
                      <p className="text-base opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity duration-300">
                        {page.desc}
                      </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-emerald-400">
                      <ArrowRight size={22} weight="bold" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL DOCS */}
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold mb-6 italic text-base-content">Legal Docs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {legalPages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className="group relative p-8 bg-base-200/80 backdrop-blur border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-yellow-500/20"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-yellow-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-yellow-600 transition-all duration-500 group-hover:w-full" />
                  <div className="flex justify-between items-start relative z-10">
                    <div className="max-w-[85%] space-y-3">
                      <h3 className="text-xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-yellow-400">
                        {page.name}
                      </h3>
                      <p className="text-base opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity duration-300">
                        {page.desc}
                      </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-yellow-400">
                      <ArrowRight size={22} weight="bold" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Link>
              ))}
            </div>

            
          </div>

        </div>
      </section>
    </div>
  );
};

export default ExplorePage;