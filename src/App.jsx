import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Star, Quotes, UserCircle } from "@phosphor-icons/react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PanoramaViewer from "./components/PanoramaViewer";
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
import ExplorePage from './pages/ExplorePage';

const NavMenu = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link 
            to={link.path} 
            className={`relative px-4 py-2 transition-colors duration-300 rounded-md hover:bg-transparent
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
              after:origin-left after:scale-x-0 after:bg-emerald-500
              after:transition-transform after:duration-300 after:ease-out
              hover:after:scale-x-100
              
                ${location.pathname === link.path ? 'text-emerald-500 font-bold after:scale-x-100' : 'hover:text-emerald-500'}`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-transparent border-b border-white/5 sticky top-0 z-50 px-4 md:px-8">
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
        <Link to="/" className="text-xl font-black uppercase tracking-tighter" aria-label="Homepage">
          Future <span className="text-emerald-500">is Wild™</span>
        </Link>
      </div>

      <div className="navbar-end gap-4">
        <div className="hidden lg:flex">
          <ul className="text-base menu menu-horizontal px-1 gap-2 font-medium">
            <NavItems />
          </ul>

          
        </div>
        
        {/* BOOK NOW BUTTON IN HERO  SECTION */}
        <Link to="/booking" className="group relative inline-flex items-center justify-center px-8 min-h-[50px] rounded-lg bg-emerald-500 backdrop-blur-md text-base-content font-semibold tracking-wide shadow-xl shadow-emerald-500/20 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 overflow-hidden">
        <span className="relative z-10 flex items-center gap-2"> Book now <span className="transition-transform duration-300 group-hover:translate-x-1">
        </span>
        </span>
        
        {/* animated shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
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
      {/* Container: Adjusted padding for better horizontal breathing room and vertical balance */}
      <div className="footer max-w-7xl mx-auto py-12 px-6 grid grid-cols-3 md:grid-cols-3 gap-12 lg:gap-16 items-start">
        
        {/* BRAND SECTION */}
        <aside className="flex flex-col gap-3 md:col-span-1">
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Future <span className="text-emerald-500">is Wild™</span>
          </h2>
          <p className="opacity-80 text-sm leading-relaxed max-w-xs">
            A world-first speculative biology attraction in Glenorchy. 
            Journey through the evolution of the Hillocks via immersive VR and AR.
          </p>
          <div className="flex flex-wrap gap-3 mt-1">
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

        {/* NEWSLETTER SECTION */}
        <section className="flex flex-col gap-3 w-full">
          <h2 className="footer-title opacity-100 text-emerald-500 uppercase tracking-widest mb-4">Newsletter</h2>
          <form onSubmit={(e) => e.preventDefault()} className="form-control w-full">
            <label className="label pt-0" htmlFor="footer-email">
              <span className="label-text opacity-70 mb-2">Get the latest evolution updates and rewilding milestones.</span>
            </label>
            <div className="join w-full">
              <input
                id="footer-email"
                type="email"
                placeholder="email@example.com"
                className="input input-bordered join-item w-full bg-base-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
              <button className="btn border-none bg-emerald-500 hover:bg-emerald-400 text-base-content join-item px-8">
                Join
              </button>
            </div>
          </form>
        </section>

        {/* LEGAL SECTION */}
        <section className="flex flex-col gap-3 w-full items-end">
          <h2 className="footer-title opacity-100 text-emerald-500 uppercase tracking-widest mb-4 items-start">Legal</h2>
          <div className="flex flex-col gap-3 md:text-left">
            <Link to="/privacy" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Terms of Service</Link>
            <Link to="/cookies" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Cookie Policy</Link>
            <Link to="/accessibility" className="link link-hover text-sm opacity-60 hover:opacity-100 transition-opacity">Accessibility Statement</Link>
          </div>
        </section>

        
      </div>

      <div className="footer footer-center p-6 bg-base-300 text-xs opacity-50 border-t border-white/5">
        <aside><p>© 2026 The Hillocks Holdings Limited | The Future is Wild is a registered Trademark</p></aside>
      </div>
    </footer>
  );
};

const SEO = ({ title, description, image }) => {
  const siteName = "The Future is Wild™";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDesc = "Speculative biology attraction in Glenorchy. Discover the evolution of the Hillocks.";
  const defaultImage = "https://iili.io/qqhFiYb.jpg";

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
        description="Experience an interactive 360° view of Future is Wild™ @ the Hillocks." 
      />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden rounded-b-[2rem] shadow-2xl">
        <div className="absolute inset-0 z-0">
<PanoramaViewer image="https://iili.io/qqhFiYb.jpg" />

          
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none flex items-center justify-center text-center">
          <div className="max-w-2xl px-4 pointer-events-auto">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-base-content drop-shadow-2xl">
              Future is Wild™ <br />
              <span className="text-emerald-500">@ the Hillocks</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-base-content font-medium drop-shadow-md">
              Drag to explore the evolution. Step into the speculative biology of Glenorchy. Ready to experience wonderful things? 
            </p>
        {/* BOOK NOW BUTTON IN NAVI SECTION */}
        <Link to="/booking" className="group relative inline-flex items-center justify-center px-8 min-h-[56px] rounded-lg bg-emerald-500 backdrop-blur-md text-base-content font-semibold tracking-wide shadow-xl shadow-emerald-500/20 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 overflow-hidden">
        <span className="relative z-10 flex items-center gap-2"> Book now <span className="transition-transform duration-300 group-hover:translate-x-1">
        </span>
        </span>
        
        {/* animated shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
        </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS SECTION */}
      <section className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-100 border border-white/5">
            <div className="stat place-items-center">
              <div className="stat-title text-yellow-600">Global Audience</div>
              <div className="stat-value text-emerald-500">1B+</div>
              <div className="stat-desc">Viewers Worldwide</div>
            </div>
            <div className="stat place-items-center border-white/5">
              <div className="stat-title text-yellow-600">Technology</div>
              <div className="stat-value text-emerald-500 text-2xl lg:text-3xl">WORLD-FIRST</div>
              <div className="stat-desc font-bold">Immersive Experience</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-yellow-600">Location</div>
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
          <span className="text-emerald-500">The Future is Wild™?</span>
        </h2>
        <p className="text-xl opacity-80 leading-relaxed max-w-xl">
          Step beyond the boundaries of time. Based on the award-winning documentary series, 
          this world-first experience brings speculative biology to life in the heart of Glenorchy. 
          Discover how Earth's ecosystems might evolve 5, 100, and 200 million years into the future.
        </p>
        
        <div className="pt-6">
          <Link to="/story" className="group inline-flex items-center gap-2 text-yellow-600 font-semibold text-lg relative transition-all duration-300"
          >
            <span className="relative"> Discover the full story <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-800 transition-all duration-300 group-hover:w-full"></span> </span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1"> → </span>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - Image (No Hover Effects) */}
<div className="order-1 lg:order-2">
  <div className="relative group cursor-pointer">
    
    {/* Glow effect background */}
    <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20 group-hover:scale-110"></div>
    
    <img 
      src="https://iili.io/qqwoll2.jpg" 
      alt="Futuristic nature and speculative evolution" 
      className="relative rounded-2xl shadow-2xl object-cover w-full h-[300px] md:h-[500px] transition-all duration-500 ease-in-out group-hover:scale-[1.02] group-hover:-rotate-1"
      loading="lazy"
    />
  </div>
</div>

    </div>
  </div>
</section>

      {/* TESTIMONIALS SECTION */}
<section className="relative bg-gradient-to-b from-base-200/40 to-base-100 py-28">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
        Loved by Our Visitors
      </h2>
      <p className="mt-4 text-xl text-base-content/70 max-w-2xl mx-auto">
        Thousands have experienced the Hillocks in a way never seen before.
        Here’s what they’re saying.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          name: "Jamie L.",
          role: "Glenorchy Visitor",
          text: "An absolute mind-bender. Seeing the Hillocks transform through the AR lens was unforgettable.",
        },
        {
          name: "Dr. Aris V.",
          role: "Evolutionary Biologist",
          text: "A spectacular fusion of evolutionary biology and digital artistry. A must-see in NZ.",
        },
        {
          name: "The Miller Family",
          role: "Glenorchy Local",
          text: "The kids were mesmerized. It's educational, fun, and visually stunning.",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="group relative rounded-2xl bg-base-100 border border-white/10 p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/40"
        >
          {/* Decorative Quote Icon */}
          <Quotes
            size={64}
            weight="fill"
            className="absolute top-6 right-6 text-emerald-500/10 group-hover:text-emerald-500/20 transition"
          />

          {/* Star Rating */}
          <div className="flex gap-1 mb-4 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} weight="fill" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-lg leading-relaxed italic mb-6 relative z-10">
            "{t.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <UserCircle
                size={32}
                weight="duotone"
                className="text-emerald-500"
              />
            </div>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-base-content/60">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* MEDIA GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24 py-28">
  {/* Section Header */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
      Media Gallery
    </h2>
    <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
      Explore stunning visuals from the Hillocks experience — immersive
      landscapes, AR moments, and unforgettable scenes captured by our visitors.
    </p>
  </div>
  
  <section className="p-4">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
    {/* Large Feature Tile */}
    <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
      <img 
        src="https://iili.io/qBKERm7.jpg" 
        alt="Landscape" 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer" 
        loading="lazy" 
      />
    </div>

    {/* Small Tile 1 */}
    <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
      <img 
        src="https://iili.io/qBKMGDP.jpg" 
        alt="Nature" 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer" 
        loading="lazy" 
      />
    </div>

    {/* Vertical Tile */}
    <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl">
      <img 
        src="https://iili.io/qBKvEox.jpg" 
        alt="Forest" 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer" 
        loading="lazy" 
      />
    </div>

    {/* Small Tile 2 */}
    <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
      <img 
        src="https://iili.io/qBKhFe4.jpg" 
        alt="Mountains" 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer" 
        loading="lazy" 
      />
    </div>
  </div>
</section>

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
            <Route path="/explore" element={<ExplorePage />} />
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