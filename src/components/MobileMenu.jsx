import { useState } from "react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden p-2 flex items-center justify-center text-slate-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-2xl">
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-900"
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-900"
            href="#experience"
          >
            Experience
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-900"
            href="#contact"
          >
            Contact
          </a>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg mt-4 shadow-lg shadow-primary/20">
            Resume
          </button>
        </div>
      )}
    </>
  );
}
