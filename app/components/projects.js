import portfolioData from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#FFF9F3] dark:bg-[#241817] text-[#3B2523] dark:text-[#FFF9F3] py-24 md:py-32 px-6 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-20">

          <div>
            <p className="text-xs font-bold tracking-[0.35em] uppercase text-[#702F3D] dark:text-[#D6A0A8] mb-6">
              04 / The things I've created
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Ideas into
              <br />
              <span className="font-serif italic font-normal text-[#702F3D] dark:text-[#D6A0A8]">
                reality.
              </span>
            </h2>
          </div>

          <div className="md:pb-2">
            <p className="text-[#806C64] dark:text-[#D8C2B6] text-base md:text-lg leading-8 max-w-lg">
              Each project allows me to explore new ideas, improve my creativity, and develop my design skills. Here are some of the development projects. I have created along my learning journey.
            </p>
          </div>

        </div>

        {/* Project Showcase */}
        <div className="space-y-24 md:space-y-32">

          {portfolioData.projects.map((project, index) => (
            <article
              key={project.title}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >

              {/* Project Image */}
              <div
                className={`md:col-span-7 ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <div className="relative bg-[#F3E8DC] dark:bg-[#30211F] border border-[#E5D3C7] dark:border-[#493431] p-3 md:p-5 rounded-sm">

                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAD9D0] dark:bg-[#3B2926] flex items-center justify-center">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-4 text-[#A98578] dark:text-[#B58B70]">
                        <span className="text-6xl">✧</span>
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase">
                          Project Preview
                        </p>
                      </div>
                    )}

                  </div>

                  <div className="flex justify-between items-center pt-4 text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#916F63] dark:text-[#D6B9AE]">
                    <span>Portfolio Collection</span>
                    <span>{String(index + 1).padStart(2, "0")} / {String(portfolioData.projects.length).padStart(2, "0")}</span>
                  </div>

                </div>
              </div>

              {/* Project Information */}
              <div
                className={`md:col-span-5 ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >

                <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#702F3D] dark:text-[#D6A0A8] mb-5">
                  Featured Work — {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6 group-hover:text-[#702F3D] dark:group-hover:text-[#D6A0A8] transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="w-12 h-[2px] bg-[#B58B70] mb-6"></div>

                <p className="text-[#806C64] dark:text-[#D8C2B6] leading-8 text-base mb-8">
                  {project.description}
                </p>

                {/* Technology List */}
                <div className="mb-9">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#916F63] dark:text-[#D6B9AE] mb-4">
                    Built With
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-[#702F3D] dark:text-[#E8C7C9] bg-[#F3E8DC] dark:bg-[#493431] border border-[#E5D3C7] dark:border-[#654B45] px-4 py-2 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap items-center gap-5">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-bold text-[#3B2523] dark:text-[#FFF9F3] border-b border-[#702F3D] dark:border-[#D6A0A8] pb-2 hover:text-[#702F3D] dark:hover:text-[#D6A0A8] transition-colors"
                    >
                      View Source Code <span>↗</span>
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#702F3D] text-[#FFF9F3] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#55232E] hover:-translate-y-1 transition-all duration-300"
                    >
                      Visit Website <span>↗</span>
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Closing Message */}
        <div className="mt-28 pt-8 border-t border-[#D6B9AE] dark:border-[#493431] flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#916F63] dark:text-[#D6B9AE]">
            A little progress, one project at a time.
          </p>

          <p className="text-xs tracking-[0.2em] uppercase text-[#916F63] dark:text-[#D6B9AE]">
            More to come ✧
          </p>
        </div>

      </div>

      {/* Decorative Background */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full border border-[#B58B70]/10 pointer-events-none"></div>
      <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full border border-[#702F3D]/10 pointer-events-none"></div>

    </section>
  );
}