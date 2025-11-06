"use client";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col justify-between px-4 sm:px-6 md:px-8 py-6 md:py-10">

      {/* Top Row */}
      <div className="w-full flex justify-center py-3 bg-white">
        <div className="flex gap-4 md:gap-6">
          <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Studio 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Studio 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full py-3">
        {/* STUDIO Text */}
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-wide text-black">STUDIO</span>
        </div>

        {/* Image Grid */}
        <div className="flex-1 flex gap-4 md:gap-6 justify-center md:justify-start overflow-x-auto md:overflow-visible py-2">
          {/* Image 1 */}
          <div className="w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] shrink-0 overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Studio photography"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] shrink-0 overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Studio photography"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] shrink-0 overflow-hidden rounded-xl shadow-lg sm:block hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Studio photography"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="w-full flex justify-center py-3 bg-white">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start ml-0 md:ml-50">
          <div className="flex gap-4 md:gap-6">
            <div className="w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Studio 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Studio 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] overflow-hidden rounded-xl shadow-lg sm:block hidden">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Studio 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full sm:w-40 flex flex-col text-center sm:text-left mt-4 sm:mt-14">
            <span className="font-bold text-xl sm:text-2xl">Vici Studio</span>
            <span className="text-sm mt-2 sm:mt-3 max-w-xs mx-auto sm:mx-0">
              Discover Sans Photo Studio, the perfect blend of innovation and artistry.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-6 md:mt-10 text-sm font-medium gap-4 sm:gap-0">
        <p className="order-2 sm:order-1">EST 2025</p>
        <p className="order-1 sm:order-2 text-center tracking-wide text-xs sm:text-sm">
          CAPTURE THE MOMENT CREATE THE STORY
        </p>
        <button className="order-3 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition text-xs sm:text-sm">
          Book a Session
        </button>
      </div>
    </section>
  );
}