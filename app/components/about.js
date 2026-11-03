
import portfolioData from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#FFF9F3] dark:bg-[#2D201E] text-[#3B2523] dark:text-[#FFF9F3] py-28 px-6 md:px-12 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Top Label */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-4">
            <span className="text-sm font-serif italic text-[#702F3D] dark:text-[#D6B9AE]">
              02
            </span>
            <span className="w-12 h-[1px] bg-[#B58B70]"></span>
            <p className="text-xs uppercase tracking-[0.3em] text-[#916F63] dark:text-[#D6B9AE]">
              A little introduction
            </p>
          </div>

          <span className="hidden sm:block text-xs tracking-[0.2em] text-[#B58B70]">
            ABOUT / 2026
          </span>
        </div>

        {/* Large Heading */}
        <div className="mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-[-0.06em] leading-[0.9]">
            More than
            <span className="block text-[#702F3D] dark:text-[#D6B9AE] font-serif italic font-normal ml-8 md:ml-32 mt-3">
              just a name.
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Information */}
          <div className="lg:col-span-4 flex flex-col justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#A17C68] dark:text-[#D6B9AE] mb-6">
                Who I am
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                A curious mind with a passion for
                <span className="text-[#702F3D] dark:text-[#D6B9AE] font-serif italic">
                  {" "}technology and creativity.
                </span>
              </h3>
            </div>

            <div className="mt-12 lg:mt-24">
              <span className="text-6xl font-serif text-[#D6B9AE] dark:text-[#755F57]">
                “
              </span>

              <p className="font-serif italic text-xl text-[#755E55] dark:text-[#D8C2B6] -mt-4">
                Learning is a journey, and every experience is an opportunity to grow.
              </p>
            </div>

          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">

            <div className="bg-[#F3E8DC] dark:bg-[#30211F] p-8 md:p-12 relative">

              {/* Decorative Number */}
              <span className="absolute top-5 right-7 text-5xl font-serif italic text-[#D6B9AE]/50 dark:text-[#755F57]/40">
                B.
              </span>

              <p className="text-xs uppercase tracking-[0.25em] text-[#A17C68] dark:text-[#D6B9AE] mb-8">
                My Story
              </p>

              <p className="text-lg md:text-xl leading-[2] text-[#755E55] dark:text-[#D8C2B6] max-w-3xl">
                {portfolioData.about}
              </p>

              <div className="mt-12 pt-8 border-t border-[#D6B9AE] dark:border-[#654B45] grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* Location */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A17C68] dark:text-[#D6B9AE] mb-3">
                    Location
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#702F3D] dark:text-[#D6B9AE]">
                      ♧
                    </span>
                    <p className="font-semibold text-[#3B2523] dark:text-[#FFF9F3]">
                      {portfolioData.location}
                    </p>
                  </div>
                </div>

                {/* Field */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A17C68] dark:text-[#D6B9AE] mb-3">
                    Field of Interest
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#702F3D] dark:text-[#D6B9AE]">
                      ✳
                    </span>
                    <p className="font-semibold text-[#3B2523] dark:text-[#FFF9F3]">
                      Design & Technology
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Statement */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
              <p className="text-sm text-[#916F63] dark:text-[#D6B9AE]">
                Driven by curiosity. Inspired by possibilities.
              </p>

              <span className="text-xs tracking-[0.2em] uppercase text-[#B58B70]">
                
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-[#B58B70]/20 pointer-events-none"></div>

    </section>
  );
}
