import { useState, useEffect } from "react";

const sections = ["about", "skills", "projects", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  // Active section highlight
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
        {/* Brand */}
        <div className="text-xl font-bold tracking-tight">
          <span className="text-primary">Shazzad</span>
          <span>.dev</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`capitalize transition-colors ${
                active === sec
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {sec}
            </a>
          ))}
        </div>

        {/* Right Side Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-linear-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
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
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setIsOpen(false)}
                className={`capitalize ${
                  active === sec
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {sec}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-lg bg-linear-to-r from-primary to-accent"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
