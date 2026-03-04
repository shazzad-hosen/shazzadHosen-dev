import { useState, useEffect } from "react";

const sections = ["about", "skills", "projects", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand*/}
        <div className="text-3xl font-bold tracking-tight text-white">
          SH<span className="text-primary">.</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-md font-medium">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`capitalize transition-all duration-300 hover:opacity-100 ${
                active === sec
                  ? "text-primary scale-110"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {sec}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-linear-to-r from-primary to-accent text-white font-medium hover:brightness-110 transition-all active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none"
        >
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/90 backdrop-blur-xl ${
          isOpen ? "max-h-screen border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setIsOpen(false)}
              className={`capitalize text-lg ${
                active === sec ? "text-primary font-bold" : "text-white"
              }`}
            >
              {sec}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
