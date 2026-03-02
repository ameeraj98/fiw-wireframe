import React from 'react';

const BlogPage = () => {
  const posts = [
    {
      category: "Conservation",
      date: "Oct 12, 2025",
      title: "The Return of the Beech: 5,000 Trees Established",
      desc: "Our reforestation partnership with Te Tapu O Tane hits a major milestone. Discover how your visits are physically transforming the Dart Valley.",
      img: "https://blocks.astratic.com/img/general-video.png"
    },
    {
      category: "VR Update",
      date: "Nov 02, 2025",
      title: "Decoding the Future: Designing the 'Squibbon'",
      desc: "Take a behind-the-scenes look at how our speculative biologists used AI and skeletal modeling to bring the 200-million-year-future to life.",
      img: "https://blocks.astratic.com/img/general-video.png"
    },
    {
      category: "Milestone",
      date: "Jan 15, 2026",
      title: "15% Impact: Where Your Support Goes",
      desc: "An annual breakdown of the Future is Wild Environmental Trust's latest investments in local predator-free initiatives and clean water projects.",
      img: "https://blocks.astratic.com/img/general-video.png"
    }
  ];

  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            <span className="text-emerald-500">Blogs </span> and News
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            Dispatches from the intersection of technology and ecology. Stay updated on our rewilding milestones, VR breakthroughs, and the evolving story of the Glenorchy Hillocks.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="flex flex-col bg-base-100 border border-white/5 rounded-3xl overflow-hidden shadow-sm">
              {/* Image Container */}
              <div className="relative aspect-video border-b border-white/5">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-80"
                />

              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <time className="text-xs opacity-40 font-mono mb-3">{post.date}</time>
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm opacity-60 leading-relaxed mb-8 flex-grow">
                  {post.desc}
                </p>
                <button className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-xs">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER INTEGRATION */}
      <section className="bg-emerald-950/20 py-24 border-y border-emerald-500/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black uppercase mb-4 italic">Never Miss an Evolution</h2>
          <p className="opacity-70 mb-10">Join 5,000+ explorers and receive monthly updates on our 2026 opening and conservation impact.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-base-100 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button className="btn bg-emerald-500 hover:bg-emerald-600 text-black border-none px-10 font-black uppercase">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;