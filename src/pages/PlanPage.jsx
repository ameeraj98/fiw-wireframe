import React from 'react';

const PlanPage = () => {
  const accommodations = [
    "The Headwaters Eco Lodge",
    "Kinloch Wilderness Reatreat",
    "The Great Glenorchy Alpine BaseCamp",
    "Blanket Bay Luxury Lodge",
  ];

  const activities = [
    "Dart River Jet Boat Experiences",
    "Routeburn Track Access",
    "Wilderness Valley Exploration",
    "Mt Aspiring National Park Trails",
  ];

  return (
    <div className="min-h-screen bg-base-300 text-white antialiased">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <img
            src="https://fiw.co.nz/images/about/Location-2.avif"
            alt="The Hillocks"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
              Plan Your Visit
            </h1>

                        <p className="text-emerald-500 uppercase tracking-[0.2em] text-sm font-semibold mb-5 mt-5">
              Opening September 1, 2026
            </p>

            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              Prepare for your visit to The Future is Wild™ @ The Hillocks,
              beside Te Awa Whakatipu (Dart River), surrounded by native
              forests, waterways, and internationally recognised alpine scenery.
            </p>
          </div>
        </div>
      </section>

      {/* COMING SOON NOTICE */}
<section className="bg-base-200 border-b border-white/5">
  <div className="max-w-5xl mx-auto px-6 py-14">

    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/15 bg-base-300 px-8 py-10 md:px-10 md:py-12">

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-3xl">

        <p className="text-emerald-500 uppercase tracking-[0.2em] text-sm font-semibold">
          Coming Soon
        </p>

        <h2 className="mt-4 text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
          Ticket Information Will Be Announced Closer To Launch
        </h2>

        <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
          The Future is Wild™ @ The Hillocks is scheduled to open on September 1, 2026. Final ticket structures will be announced closer to launch as part of our competitive pricing strategy. Please check back nearer to opening for booking information.</p>

      </div>
    </div>
  </div>
</section>

      {/* THE HILLOCKS LOCATION */}
<section className="py-24 bg-base-300 border-b border-white/5">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION INTRO */}
    <div className="max-w-4xl">


      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white">
        The Hillocks Location
      </h2>

      <div className="mt-8 space-y-6 text-lg text-white/70 leading-relaxed">
        <p>
          The Hillocks, beside Te Awa Whakatipu (Dart River) is a gateway to
          some of New Zealand’s greatest walks.
        </p>

        <p>
          Queenstown, a premier tourism destination is only a one hour away.
        </p>

        <p>
          The Hillocks is ideally located for those seeking an immersive nature
          experience among native forests, waterways and scenery made famous in
          many blockbuster movies, including “Lord of the Rings”, “Vertical
          Limits” and “Chronicles of Narnia”.
        </p>
      </div>
    </div>

    {/* IMAGE GALLERY */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <img
          src="https://static.wixstatic.com/media/5d5f9e_0fac4a47c97249ff9731517e4e2525c9~mv2.jpg/v1/fill/w_600,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Location-2.jpg"
          alt="The Hillocks Landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <img
          src="https://static.wixstatic.com/media/5d5f9e_5faff4ec72be40c89ff29b1efcdb5d71~mv2.jpg/v1/fill/w_600,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Location-1.jpg"
          alt="The Hillocks Scenic Environment"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* MAP + ADDRESS */}
    <div className="mt-16">

      <div className="overflow-hidden rounded-3xl border border-white/10 aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90635.9609471386!2d168.19559876250003!3d-44.7731846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d5bcaafc62f1f9%3A0xdd45761afd84f86!2sIsengard%20Lookout!5e0!3m2!1sen!2smy!4v1779279412198!5m2!1sen!2smy"
          className="w-full h-full border-0"
          loading="lazy"
          title="The Hillocks Location Map"
        />
      </div>

      {/* ADDRESS */}
      <div className="mt-8 max-w-xl">
        <p className="text-emerald-500 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
          The Hillocks Address
        </p>

        <div className="space-y-2 text-white/75 text-lg leading-relaxed">
          <p>"The Future is Wild™ @ The Hillocks"</p>

          <p>Glenorchy-Routeburn Road (at the Dart Bridge)</p>

          <p>Glenorchy, 9372</p>

          <p>New Zealand.</p>
        </div>
      </div>

    </div>

  </div>
</section>


      {/* OPERATING HOURS + PARKING */}
<section className="py-24 bg-base-200 border-b border-white/5">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* OPERATING HOURS */}
      <div className="rounded-3xl border border-white/10 bg-base-300 p-8 md:p-10">


        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
          Operating Hours
        </h2>

        <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl">
          Visitors are encouraged to allow time to fully experience the
          surrounding landscape, native environment, and arrival journey at
          The Hillocks.
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-white font-medium">
              Monday - Friday
            </span>

            <span className="text-white/70">
              10:00 AM to 4:00 PM
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white font-medium">
              Saturday - Sunday
            </span>

            <span className="text-white/70">
              10:00 AM to 5:00 PM
            </span>
          </div>

        </div>
      </div>

      {/* PARKING & ARRIVAL */}
      <div className="rounded-3xl border border-white/10 bg-base-300 p-8 md:p-10">


        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
          Parking & Arrival
        </h2>

        <div className="mt-6 space-y-6 text-lg text-white/70 leading-relaxed">

          <p>
            Visitors will arrive at the designated parking area before taking
            a brief walk to the visitor center.
          </p>

          <p>
            The arrival experience offers guests an opportunity to begin
            immersing themselves in the surrounding natural environment before
            entering the main visitor facilities.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>

{/* BROCHURE CTA */}
<section className="relative overflow-hidden py-32">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="https://fiw.co.nz/images/about/Location-2.avif"
      alt="The Hillocks Landscape"
      className="w-full h-full object-cover opacity-20"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-base-300 via-base-300/95 to-base-300" />
  </div>

  {/* CONTENT */}
  <div className="relative max-w-4xl mx-auto px-6 text-center">



    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white">
      Interested To Know More?
    </h2>

    <div className="mt-8 max-w-2xl mx-auto space-y-6 text-lg text-white/70 leading-relaxed">

      <p>
        Discover more about The Future is Wild™ @ The Hillocks and begin
        planning your visit to the Glenorchy and Dart River region.
      </p>

      <p>
        Download our brochure for additional visitor information and destination
        highlights.
      </p>

    </div>

    {/* CTA BUTTON */}
    <div className="mt-12">

      <button className="btn btn-lg rounded-2xl px-10 bg-emerald-500 border-0 text-black hover:bg-emerald-400 transition-all duration-300">

        Download Our Brochure

      </button>

    </div>

  </div>
</section>

      {/* STAY NEARBY */}
<section className="py-24 bg-base-300 border-b border-white/5">
  <div className="max-w-7xl mx-auto px-6">

    {/* INTRO */}
    <div className="max-w-4xl">



      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white">
        Stay Nearby
      </h2>

      <div className="mt-8 space-y-6 text-lg text-white/70 leading-relaxed">
        <p>
          Visitors to The Hillocks can continue exploring the surrounding
          Glenorchy and Dart River region through nearby accommodation options
          immersed within the natural landscape.
        </p>

        <p>
          Local accommodation partners offer opportunities to experience the
          region beyond a single day visit, with access to wilderness scenery,
          walking tracks, and the wider Queenstown region.
        </p>
      </div>

    </div>

    {/* ACCOMMODATION GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

      {[
        "The Headwaters Eco Lodge",
        "Kinloch Wilderness Reatreat",
        "The Great Glenorchy Alpine BaseCamp",
        "Blanket Bay Luxury Lodge",
      ].map((place, i) => (
        <div
          key={i}
          className="group rounded-3xl border border-white/10 bg-base-200 p-8 hover:border-emerald-500/20 transition-all duration-300"
        >

          <div className="flex items-start justify-between gap-6">

            <div>
              <h3 className="text-2xl font-semibold text-white leading-snug">
                {place}
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Accommodation partner within the Glenorchy and Dart River
                region.
              </p>
            </div>

            <div className="w-3 h-3 rounded-full bg-emerald-500/70 mt-3 shrink-0" />

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* DISCOVER NEARBY ACTIVITIES */}
<section className="py-24 bg-base-200 border-b border-white/5">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* CONTENT */}
      <div>



        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white">
          Explore The Glenorchy & Dart River Region
        </h2>

        <div className="mt-8 space-y-6 text-lg text-white/70 leading-relaxed">

          <p>
            The Glenorchy and Dart River region is internationally recognised
            for its dramatic alpine scenery, wilderness access, and outdoor
            exploration opportunities.
          </p>

          <p>
            Visitors to The Hillocks can extend their experience through nearby
            guided adventures, river expeditions, and internationally celebrated
            walking tracks.
          </p>

                  <p className="text-emerald-500 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
          Discover Nearby Activities
        </p>

        </div>

        {/* ACTIVITIES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">

          {[
            "Dart River Jet Boat Experiences",
            "Routeburn Track Access",
            "Wilderness Valley Exploration",
            "Mt Aspiring National Park Trails",
          ].map((activity, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-base-300 px-6 py-5 hover:border-emerald-500/20 transition-all duration-300"
            >
              <p className="text-white/80 font-medium leading-relaxed">
                {activity}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/5] lg:aspect-[4/4.5]">

        <img
          src="https://www.unitedwayqc.org/wp-content/uploads/2022/12/placeholder-1024x683.png"
          alt="Glenorchy and Dart River Region"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      </div>

    </div>

  </div>
</section>

      

    </div>
  );
};

export default PlanPage;