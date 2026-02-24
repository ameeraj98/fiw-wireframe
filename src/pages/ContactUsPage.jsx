import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-24 bg-base-200 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            Have questions about our speculative world? Whether you're planning a school trip or a media visit, our team is here to help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
{/* LEFT SIDE: DIRECT CONTACT INFO */}
<div className="space-y-10">
  <div>
    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">
      Contact Details
    </h2>
    <div className="space-y-8 mb-10">
      {/* Location */}
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 bg-base-200 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>
        <div className="pt-1">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">Location</h4>
          <p className="text-sm opacity-60 leading-relaxed">45 Mull Street, Glenorchy 9372,<br />Otago, New Zealand</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 bg-base-200 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <div className="pt-1">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">Email</h4>
          <p className="text-sm opacity-60">info@futureiswildglenorchy.com</p>
        </div>
      </div>
    </div>

    {/* LIVE GOOGLE MAP EMBED */}
    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-base-200">
      <iframe 
        title="Glenorchy Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.904838618776!2d168.383296576856!3d-44.8493174643037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d29a5fcb895475f%3A0x4e0485cb866478d8!2s45%20Mull%20Street%2C%20Glenorchy%209372%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) invert(0.9) hue-rotate(150deg)' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</div>

{/* RIGHT SIDE: REFINED CONTACT FORM */}
          <div className="bg-base-200 p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control w-full">
                  <label className="mb-3"><span className="text-xs font-bold uppercase tracking-widest opacity-40">Your Name</span></label>
                  <input type="text" placeholder="John Doe" className="input input-bordered w-full bg-base-300 border-white/10 focus:border-emerald-500 rounded-xl h-14" required />
                </div>
                <div className="form-control w-full">
                  <label className="mb-3"><span className="text-xs font-bold uppercase tracking-widest opacity-40">Email Address</span></label>
                  <input type="email" placeholder="john@example.com" className="input input-bordered w-full bg-base-300 border-white/10 focus:border-emerald-500 rounded-xl h-14" required />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="mb-3"><span className="text-xs font-bold uppercase tracking-widest opacity-40">Subject</span></label>
                <select className="select select-bordered w-full bg-base-300 border-white/10 focus:border-emerald-500 rounded-xl h-14">
                  <option disabled selected>Select an option</option>
                  <option>General Inquiry</option>
                  <option>School/Education Booking</option>
                  <option>Media & Press</option>
                  <option>Conservation Partnership</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="mb-3"><span className="text-xs font-bold uppercase tracking-widest opacity-40">Message</span></label>
                <textarea 
                  className="textarea textarea-bordered w-full bg-base-300 border-white/10 focus:border-emerald-500 rounded-xl h-40 pt-4" 
                  placeholder="How can we help you explore the future?"
                ></textarea>
              </div>

              <button className="btn bg-emerald-500 border-none text-black w-full h-16 rounded-xl font-black uppercase tracking-[0.2em] text-sm">
                Send Message
              </button>
            </form>
          </div>


        </div>
      </section>

    </div>
  );
};

export default ContactUsPage;