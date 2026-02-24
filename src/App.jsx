import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Pannellum } from "pannellum-react";
import ExperiencePage from './pages/ExperiencePage';
import StoryPage from './pages/StoryPage';
import PlanPage from './pages/PlanPage';
import BookingPage from './pages/BookingPage';
import EducationPage from './pages/EducationPage';
import ConservationPage from './pages/ConservationPage';
import ContactUsPage from './pages/ContactUsPage';
import BlogPage from './pages/BlogPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePage from './pages/CookiePage';
import AccessibilityPage from './pages/AccessibilityPage';
import BrowsePage from './pages/BrowsePage';

const NavMenu = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Browse all', path: '/browse' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link 
            to={link.path} 
            className={`px-4 py-2 transition-colors rounded-md
              ${location.pathname === link.path ? 'text-emerald-500 font-bold' : 'hover:text-emerald-500'}`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b border-white/5 sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-white/10">
            <NavItems />
          </ul>
        </div>
        <Link to="/" className="text-xl font-black uppercase tracking-tighter" aria-label="FIW Home">
          Future <span className="text-emerald-500">is Wild</span>
        </Link>
      </div>

      <div className="navbar-end gap-4">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            <NavItems />
          </ul>
        </div>
<Link to="/booking" className="btn border-none bg-emerald-500 min-h-[44px] px-8 shadow-lg hover:scale-105 transition-all">
  Book now
</Link>
      </div>
    </div>
  );
};

const Footer = () => {
  const socialLinks = [
    { url: "https://instagram.com", label: "Instagram" },
    { url: "https://google.com", label: "Google Profile" },
    { url: "https://tripadvisor.com", label: "TripAdvisor" },
    { url: "https://facebook.com", label: "Facebook" },
    { url: "https://twitter.com", label: "Twitter" },
    { url: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-base-200 text-base-content border-t border-white/5 mt-auto">
      {/* Changed grid-cols to 4 to allow for finer control of width */}
      <div className="footer max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* BRAND SECTION - Takes 1 col */}
        <aside className="flex flex-col gap-4 md:col-span-1">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            Future <span className="text-emerald-500">is Wild</span>
          </h2>
          <p className="opacity-80 text-sm leading-relaxed max-w-xs">
            A world-first speculative biology attraction in Glenorchy. 
            Journey through the evolution of the Hillocks via immersive VR and AR.
          </p>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <SocialIcon 
                key={social.label}
                url={social.url} 
                aria-label={`Follow us on ${social.label}`}
                style={{ height: 32, width: 32 }} 
                className="hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </aside>

        {/* NEWSLETTER SECTION - Now spans 2 cols to be wider */}
        <section className="md:col-span-2 w-full">
          <h2 className="footer-title opacity-100 text-emerald-500 uppercase tracking-widest">Newsletter</h2>
          <form onSubmit={(e) => e.preventDefault()} className="form-control w-full">
            <label className="label" htmlFor="footer-email">
              <span className="label-text opacity-70">Get the latest evolution updates and rewilding milestones.</span>
            </label>
            <div className="join w-full">
              <input
                id="footer-email"
                type="email"
                placeholder="email@example.com"
                className="input input-bordered join-item w-full bg-base-300 focus:border-emerald-500"
                required
              />
              <button className="btn border-none bg-emerald-500 hover:bg-emerald-600 text-black join-item px-8">
                Join
              </button>
            </div>
          </form>
        </section>

        {/* LEGAL SECTION - Takes 1 col */}
        <nav className="md:col-span-1 lg:place-self-end">
          <h2 className="footer-title opacity-100 text-emerald-500 uppercase tracking-widest">Legal</h2>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Terms of Service</Link>
            <Link to="/cookies" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Cookie Policy</Link>
            <Link to="/accessibility" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Accessibility Statement</Link>
          </div>
        </nav>
      </div>

      <div className="footer footer-center p-4 bg-base-300 text-xs opacity-50 border-t border-white/5">
        <aside><p>© 2026 Future is Wild Ltd. All rights reserved.</p></aside>
      </div>
    </footer>
  );
};

const SEO = ({ title, description, image }) => {
  const siteName = "The Future is Wild";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDesc = "Speculative biology attraction in Glenorchy. Discover the evolution of the Hillocks.";
  const defaultImage = "https://i.postimg.cc/CLSxrkFR/a-panoramic-view-of-wetlands-of-north-africa-in-the-v0-1cozv67ougec1-(1).png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

const Home = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Experience an interactive 360° view of Future is Wild @ the Hillocks." 
      />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden rounded-b-[2rem] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Pannellum
            width="100%"
            height="100%"
            image="https://i.postimg.cc/CLSxrkFR/a-panoramic-view-of-wetlands-of-north-africa-in-the-v0-1cozv67ougec1-(1).png"
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            autoRotate={-2}
            showControls={false}
            aria-label="Interactive 360 degree view of the Hillocks"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none flex items-center justify-center text-center">
          <div className="max-w-2xl px-4 pointer-events-auto">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
              Future is Wild <br />
              <span className="text-emerald-500">@ the Hillocks</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white font-medium drop-shadow-md">
              Drag to explore the evolution. Step into the speculative biology of Glenorchy. Ready to experience wonderful things? 
            </p>
<Link 
  to="/booking" 
  className="btn border-none bg-emerald-500 text-white hover:bg-emerald-600 btn-lg min-h-[54px] px-12 shadow-2xl hover:scale-105 transition-all"
>
  Book now
</Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS SECTION */}
      <section className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-100 border border-white/5">
            <div className="stat place-items-center">
              <div className="stat-title text-yellow-300">Global Audience</div>
              <div className="stat-value text-emerald-500">1B+</div>
              <div className="stat-desc">Viewers Worldwide</div>
            </div>
            <div className="stat place-items-center border-white/5">
              <div className="stat-title text-yellow-300">Technology</div>
              <div className="stat-value text-emerald-500 text-2xl lg:text-3xl">WORLD-FIRST</div>
              <div className="stat-desc font-bold">Immersive Experience</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-yellow-300">Location</div>
              <div className="stat-value text-emerald-500 text-2xl lg:text-3xl">NZ-FIRST</div>
              <div className="stat-desc font-bold">Glenorchy Attraction</div>
            </div>
          </div>
        </div>
      </section>

            {/* WHAT IS THE FUTURE IS WILD SECTION - 2 COLUMN LAYOUT */}
<section className="bg-base-100">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT SIDE - Content */}
      <div className="space-y-6 text-left order-2 lg:order-1">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          What is <br />
          <span className="text-emerald-500">The Future is Wild?</span>
        </h2>
        <p className="text-lg opacity-80 leading-relaxed max-w-xl">
          Step beyond the boundaries of time. Based on the award-winning documentary series, 
          this world-first experience brings speculative biology to life in the heart of Glenorchy. 
          Discover how Earth's ecosystems might evolve 5, 100, and 200 million years into the future.
        </p>
        <div className="pt-4">
          <Link 
            to="/story" 
            className="btn border-none bg-emerald-500 hover:bg-emerald-600 btn-lg min-h-[54px] px-12 shadow-2xl hover:scale-105 transition-all"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - Image (No Hover Effects) */}
      <div className="order-1 lg:order-2">
        <div className="relative">
          {/* Static decorative element behind image */}
          <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" 
            alt="Futuristic nature and speculative evolution" 
            className="relative rounded-2xl shadow-2xl object-cover w-full h-[300px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials from Our Visitors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Jamie L.", text: "An absolute mind-bender. Seeing the Hillocks transform through the AR lens was unforgettable." },
            { name: "Dr. Aris V.", text: "A spectacular fusion of evolutionary biology and digital artistry. A must-see in NZ." },
            { name: "The Miller Family", text: "The kids were mesmerized. It's educational, fun, and visually stunning." }
          ].map((t, i) => (
            <div key={i} className="card bg-base-100 border border-white/10 shadow-xl">
              <div className="card-body">
                <p className="italic text-lg">"{t.text}"</p>
                <div className="card-actions justify-end mt-4">
                  <span className="font-bold text-emerald-500">- {t.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIA GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Media Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" alt="Landscape" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400" alt="Nature" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-2">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400" alt="Forest" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=400" alt="Mountains" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

const Placeholder = ({ title }) => <div className="p-20 text-center text-3xl font-bold">{title} Page Coming Soon</div>;

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-base-300 text-base-content flex flex-col">
        <NavMenu />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/education" element={<EducationPage />}/>
            <Route path="/conservation" element={<ConservationPage />}/>
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/blog" element={<BlogPage />} />

            <Route path="/privacy" element={<PrivacyPage />}  />
            <Route path="/terms" element={<TermsPage />}/>
            <Route path="/cookies" element={<CookiePage />}/>
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}