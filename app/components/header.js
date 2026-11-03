
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const darkMode = savedTheme === "dark";

    setIsDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  function toggleTheme() {
    const newTheme = !isDark;

    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Certificates", "#certificates"],
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F3]/95 dark:bg-[#241817]/95 backdrop-blur-lg transition-colors duration-300">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between min-h-[90px] border-b border-[#E5D3C5] dark:border-[#493431]">

          {/* Brand */}
          <a
            href="#home"
            className="flex flex-col leading-none"
          >
            <span className="text-2xl font-bold tracking-[0.12em] text-[#3B2523] dark:text-[#FFF9F3]">
              BERNADETTE<span className="text-[#702F3D]">.</span>
            </span>

            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A17C68] dark:text-[#D6B9AE] mt-2">
              Personal Portfolio
            </span>
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-7">
            {navLinks.map(([label, link], index) => (
              <a
                key={label}
                href={link}
                className="relative text-sm font-medium text-[#755E55] dark:text-[#D8C2B6] hover:text-[#702F3D] dark:hover:text-[#D6B9AE] transition-colors duration-300 group"
              >
                {label}

                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#702F3D] dark:bg-[#D6B9AE] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-10 h-10 rounded-full bg-[#F3E8DC] dark:bg-[#3B2926] text-[#702F3D] dark:text-[#D6B9AE] hover:scale-110 transition-transform duration-300"
            >
              {isDark ? "☀️" : "☾"}
            </button>

            {/* Contact Button */}
            <a
              href="#contacts"
              className="bg-[#702F3D] text-[#FFF9F3] px-6 py-3 text-sm font-medium rounded-full hover:bg-[#55232E] hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch ↗
            </a>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">

          <div className="flex items-center justify-between py-5">

            {/* Brand */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex flex-col leading-none"
            >
              <span className="text-xl font-bold tracking-[0.12em] text-[#3B2523] dark:text-[#FFF9F3]">
                BERNADETTE<span className="text-[#702F3D]">.</span>
              </span>

              <span className="text-[9px] tracking-[0.3em] uppercase text-[#A17C68] dark:text-[#D6B9AE] mt-2">
                Personal Portfolio
              </span>
            </a>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="w-10 h-10 rounded-full bg-[#F3E8DC] dark:bg-[#3B2926] text-[#702F3D] dark:text-[#D6B9AE]"
              >
                {isDark ? "☀️" : "☾"}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-[#D6B9AE] dark:border-[#755F57]"
              >
                {menuOpen ? (
                  <span className="text-2xl leading-none text-[#702F3D] dark:text-[#D6B9AE]">
                    ×
                  </span>
                ) : (
                  <>
                    <span className="w-5 h-0.5 bg-[#3B2523] dark:bg-[#FFF9F3] rounded-full"></span>
                    <span className="w-5 h-0.5 bg-[#3B2523] dark:bg-[#FFF9F3] rounded-full"></span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="pb-6 pt-3 border-t border-[#E5D3C5] dark:border-[#493431]">

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#A17C68] dark:text-[#D6B9AE] mb-4">
                Navigation
              </p>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map(([label, link], index) => (
                  <a
                    key={label}
                    href={link}
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl bg-[#F3E8DC] dark:bg-[#30211F] text-[#3B2523] dark:text-[#FFF9F3] hover:bg-[#D6B9AE] dark:hover:bg-[#493431] transition-colors duration-300"
                  >
                    <span className="text-xs text-[#A17C68] dark:text-[#D6B9AE]">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium">
                      {label}
                    </span>
                  </a>
                ))}
              </div>

              <a
                href="#contacts"
                onClick={closeMenu}
                className="mt-4 block text-center bg-[#702F3D] text-[#FFF9F3] px-5 py-4 rounded-xl font-medium hover:bg-[#55232E] transition-colors duration-300"
              >
                Get in Touch ↗
              </a>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}
