import React from 'react';
import { Link } from 'react-router-dom';

const BrowsePage = () => {
  const usefulPages = [
    { name: "The Experience", path: "/experience", desc: "Step into the future of the Glenorchy Hillocks." },
    { name: "The Story", path: "/story", desc: "The science and speculation behind the project." },
    { name: "Plan Your Visit", path: "/plan", desc: "Everything you need to know before you arrive." },
    { name: "Booking", path: "/booking", desc: "Secure your tickets for the 2026 season." },
    { name: "Education", path: "/education", desc: "Resources for schools and research groups." },
    { name: "Conservation", path: "/conservation", desc: "Our commitment to the local ecosystem." },
    { name: "Contact Us", path: "/contact", desc: "Get in touch with our team in Glenorchy." },
  ];

  const legalPages = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Accessibility Statement", path: "/accessibility" },
  ];

  // Reusable Arrow SVG Component
  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );

  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Browse All
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl leading-relaxed">
            A complete directory of our digital and physical world. Navigate through the evolution of the project.
          </p>
        </div>
      </section>

      {/* DIRECTORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* USEFUL PAGES - Spans 2 columns */}
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Useful Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usefulPages.map((page) => (
                <Link 
                  key={page.name} 
                  to={page.path}
                  className="p-8 bg-base-200 border border-white/5 rounded-3xl flex justify-between items-start"
                >
                  <div className="max-w-[85%]">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {page.name}
                    </h3>
                    <p className="text-sm opacity-60 leading-relaxed">
                      {page.desc}
                    </p>
                  </div>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL PAGES - Spans 1 column */}
          <div className="space-y-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Legal Docs
            </h2>
            <div className="flex flex-col gap-4">
              {legalPages.map((page) => (
                <Link 
                  key={page.name} 
                  to={page.path}
                  className="p-6 bg-base-100 border border-white/5 rounded-2xl flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-white uppercase tracking-widest">
                    {page.name}
                  </span>
                  <ArrowIcon />
                </Link>
              ))}
            </div>

            {/* QUICK CONTACT MINI-CARD */}
            <div className="p-8 bg-emerald-950/20 border border-emerald-500/20 rounded-3xl mt-12">
              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Need Immediate Help?</h4>
              <p className="text-xs opacity-60 mb-6 leading-relaxed">Our guest services team is available Mon–Fri, 9am–5pm NZST.</p>
              <Link to="/contact" className="flex items-center gap-2 text-emerald-500 text-xs font-black uppercase tracking-widest">
                Go to Support
                <ArrowIcon />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BrowsePage;