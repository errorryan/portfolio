import portfolioData from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F3E8DC] dark:bg-[#241817] text-[#3B2523] dark:text-[#FFF9F3] px-6 md:px-12 py-20 md:py-28 scroll-mt-20 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#D6B9AE]/20 dark:bg-[#702F3D]/10 pointer-events-none"></div>

      <div className="absolute top-24 left-10 text-8xl text-[#B58B70]/20 dark:text-[#D6B9AE]/10 font-serif pointer-events-none">
        ✳
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Main Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

          {/* LEFT - IMAGE */}
          <div className="lg:col-span-5 relative">

            <div className="relative max-w-[420px] mx-auto lg:mx-0">

              {/* Image Frame */}
              <div className="absolute -top-5 -left-5 w-full h-full border border-[#702F3D] dark:border-[#D6B9AE]"></div>

              <div className="relative h-[400px] md:h-[550px] bg-[#D6B9AE] dark:bg-[#493431] overflow-hidden">
                <img
                  src="/BERNA.png"
                  alt="Bernadette's Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Number */}
              <div className="absolute -top-10 -right-5 md:-right-10 bg-[#702F3D] text-[#FFF9F3] w-20 h-20 flex items-center justify-center rounded-full">
                <span className="font-serif italic text-2xl">01</span>
              </div>

              {/* Vertical Label */}
              <div className="absolute -right-10 md:-right-16 top-1/2 -translate-y-1/2 hidden sm:block">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#702F3D] dark:text-[#D6B9AE] [writing-mode:vertical-rl]">
                  Creative Mind · Future Designer
                </p>
              </div>

              {/* Image Caption */}
              <div className="absolute -bottom-6 -left-3 md:-left-8 bg-[#FFF9F3] dark:bg-[#3B2926] px-6 py-4 shadow-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-[#A17C68] dark:text-[#D6B9AE]">
                  Based in
                </p>
                <p className="font-semibold text-sm mt-1 text-[#3B2523] dark:text-[#FFF9F3]">
                  {portfolioData.location}
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT - INTRODUCTION */}
          <div className="lg:col-span-7 lg:pl-10">

            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-[#702F3D]"></span>
              
            </div>

            <p className="text-lg md:text-xl font-serif italic text-[#916F63] dark:text-[#D6B9AE] mb-3">
              Hello, I'm
            </p>

            {/* Reduced Name Font Size */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1] tracking-[-0.04em] break-words">
              {portfolioData.name.split(" ")[0]}

              <span className="block text-[#702F3D] dark:text-[#D6B9AE] font-serif italic font-normal mt-2">
                {portfolioData.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Role */}
            <div className="mt-7 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#702F3D] dark:bg-[#D6B9AE]"></span>
              <h2 className="text-lg md:text-xl font-medium text-[#755E55] dark:text-[#D8C2B6]">
                {portfolioData.role}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-7 text-base md:text-lg leading-8 text-[#806C64] dark:text-[#C8B5AA] max-w-xl">
              I am passionate about designing intuitive and visually appealing user experiences, creating user-friendly interfaces, and continuously exploring new ideas to make digital products more engaging, accessible, and meaningful.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="inline-flex items-center gap-5 bg-[#702F3D] text-[#FFF9F3] px-7 py-4 font-medium hover:bg-[#55232E] transition-all duration-300 group"
              >
                Explore My Work
                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </a>

              <a
                href="/CVB.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#B58B70] dark:border-[#755F57] px-7 py-4 font-medium text-[#702F3D] dark:text-[#FFF9F3] hover:bg-[#EAD9D0] dark:hover:bg-[#493431] transition-all duration-300"
              >
                View Resume
                <span>↓</span>
              </a>

            </div>

            {/* Decorative Quote */}
            <div className="mt-12 pt-6 border-t border-[#D6B9AE] dark:border-[#493431] max-w-lg">
              <p className="font-serif italic text-[#916F63] dark:text-[#D6B9AE] text-lg">
                "Creativity is where ideas meet technology."
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Information Strip */}
        <div className="mt-24 pt-7 border-t border-[#D6B9AE] dark:border-[#493431] grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#A17C68] dark:text-[#D6B9AE]">
              01 / Focus
            </p>
            <p className="mt-2 font-semibold">
              UI/UX Design
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#A17C68] dark:text-[#D6B9AE]">
              02 / Interest
            </p>
            <p className="mt-2 font-semibold">
              Technology & Design
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#A17C68] dark:text-[#D6B9AE]">
              03 / Mindset
            </p>
            <p className="mt-2 font-semibold">
              Always Learning
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}