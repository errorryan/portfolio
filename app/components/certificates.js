import portfolioData from "../data";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-[#F3E8DC] dark:bg-[#2D201E] text-[#3B2523] dark:text-[#FFF9F3] py-24 md:py-32 px-6 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">

          <div>
            <p className="text-xs font-bold tracking-[0.35em] uppercase text-[#702F3D] dark:text-[#D6A0A8] mb-6">
              05 / Learning & Recognition
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Proof of
              <br />
              <span className="font-serif italic font-normal text-[#702F3D] dark:text-[#D6A0A8]">
                progress.
              </span>
            </h2>
          </div>

          <p className="text-[#806C64] dark:text-[#D8C2B6] leading-8 max-w-md">
            Each certificate reflects my dedication to learning, gaining new knowledge, and continuously developing my skills in design and technology.
          </p>

        </div>

        {/* Certificate Gallery */}
        <div className="space-y-8">

          {portfolioData.certificates.map((certificate, index) => (
            <article
              key={index}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center border-b border-[#D6B9AE] dark:border-[#493431] pb-10 md:pb-12"
            >

              {/* Certificate Number */}
              <div className="md:col-span-1 flex md:justify-center">
                <span className="font-serif italic text-4xl text-[#B58B70] dark:text-[#A98578]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Certificate Preview */}
              <div className="md:col-span-6">
                <div className="relative bg-[#FFF9F3] dark:bg-[#30211F] p-3 md:p-5 border border-[#E5D3C7] dark:border-[#493431] shadow-sm group-hover:shadow-xl group-hover:shadow-[#3B2523]/10 transition-all duration-500">

                  <div className="aspect-[4/3] flex items-center justify-center bg-[#EAD9D0] dark:bg-[#3B2926] overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#916F63] dark:text-[#D6B9AE]">
                      Certificate Archive
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#916F63] dark:text-[#D6B9AE]">
                      No. {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                </div>
              </div>

              {/* Certificate Information */}
              <div className="md:col-span-5 md:pl-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#702F3D] dark:text-[#D6A0A8] mb-5">
                  Certificate of Achievement
                </p>

                <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-7 group-hover:text-[#702F3D] dark:group-hover:text-[#D6A0A8] transition-colors duration-300">
                  {certificate.title}
                </h3>

                <div className="space-y-5 mb-9">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A98578] dark:text-[#B58B70] mb-2">
                      Issuing Organization
                    </p>

                    <p className="text-sm md:text-base font-medium text-[#755F57] dark:text-[#E8D8CC]">
                      {certificate.issuer}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A98578] dark:text-[#B58B70] mb-2">
                      Date Received
                    </p>

                    <p className="text-sm md:text-base font-medium text-[#755F57] dark:text-[#E8D8CC]">
                      {certificate.date}
                    </p>
                  </div>

                </div>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-sm font-bold text-[#702F3D] dark:text-[#D6A0A8] border-b border-[#702F3D] dark:border-[#D6A0A8] pb-2 hover:gap-6 transition-all duration-300"
                >
                  View Certificate <span>↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>

        {/* Closing Note */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#916F63] dark:text-[#D6B9AE]">
            Learning never stops.
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-[#916F63] dark:text-[#D6B9AE]">
            Always growing ✧
          </p>
        </div>

      </div>

      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-[#B58B70]/15 pointer-events-none"></div>
      <div className="absolute bottom-20 -left-32 w-72 h-72 rounded-full border border-[#702F3D]/10 pointer-events-none"></div>

    </section>
  );
}