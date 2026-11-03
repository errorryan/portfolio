
import portfolioData from "../data";

export default function Contact() {
  return (
    <section
      id="contacts"
      className="bg-[#3B2523] text-[#FFF9F3] py-24 px-6 md:px-12 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="w-10 h-[1px] bg-[#D6B9AE]"></span>
                <p className="text-sm uppercase tracking-[0.3em] text-[#D6B9AE]">
                  Get in touch
                </p>
              </div>

              <h2 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
                Let's
                <br />
                create
                <br />
                <span className="text-[#D6B9AE] italic font-serif">
                  something.
                </span>
              </h2>

              <p className="mt-10 text-[#D8C2B6] text-base md:text-lg leading-8 max-w-md">
                Have a project in mind, an opportunity, or simply want to connect?
                I'd love to hear from you. Let's start a conversation.
              </p>
            </div>

            <div className="hidden lg:block mt-20">
              <p className="text-xs tracking-[0.25em] uppercase text-[#B58B70]">
                Available for opportunities
              </p>
              <div className="w-20 h-[2px] bg-[#702F3D] mt-4"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">

            <p className="text-xs uppercase tracking-[0.25em] text-[#B58B70] mb-8">
              Contact Information
            </p>

            <div className="border-t border-[#70534B]">

              {/* Email */}
              {portfolioData.email && (
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="group flex justify-between items-center gap-5 py-8 border-b border-[#70534B] hover:px-4 transition-all duration-300"
                >
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#D6B9AE] mb-3">
                      01 / EMAIL
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium break-all">
                      {portfolioData.email}
                    </h3>
                  </div>
                  <span className="text-3xl text-[#D6B9AE] group-hover:translate-x-2 transition-transform">
                    ↗
                  </span>
                </a>
              )}

              {/* GitHub */}
              {portfolioData.github && (
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center gap-5 py-8 border-b border-[#70534B] hover:px-4 transition-all duration-300"
                >
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#D6B9AE] mb-3">
                      02 / GITHUB
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium">
                      Explore my code
                    </h3>
                  </div>
                  <span className="text-3xl text-[#D6B9AE] group-hover:translate-x-2 transition-transform">
                    ↗
                  </span>
                </a>
              )}

              {/* LinkedIn */}
              {portfolioData.linkedin && (
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center gap-5 py-8 border-b border-[#70534B] hover:px-4 transition-all duration-300"
                >
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#D6B9AE] mb-3">
                      03 / LINKEDIN
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium">
                      Let's connect
                    </h3>
                  </div>
                  <span className="text-3xl text-[#D6B9AE] group-hover:translate-x-2 transition-transform">
                    ↗
                  </span>
                </a>
              )}

            </div>

            <p className="text-sm text-[#BFA69A] mt-8 leading-7">
              I'm always open to learning, collaboration, and new experiences.
              Feel free to reach out.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-28 pt-8 border-t border-[#70534B] flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <p className="text-lg font-bold tracking-wider">
              {portfolioData.name}
              <span className="text-[#D6B9AE]">.</span>
            </p>
            <p className="text-xs text-[#BFA69A] mt-2">
              © 2026 All rights reserved.
            </p>
          </div>

          <a
            href="#home"
            className="text-sm text-[#D6B9AE] hover:text-white transition"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </section>
  );
}
