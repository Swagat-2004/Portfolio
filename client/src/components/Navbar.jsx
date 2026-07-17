import { useEffect, useState } from "react";

const tabs = [
  { id: "home", label: "Hero.jsx" },
  { id: "about", label: "About.jsx" },
  { id: "skills", label: "Skills.jsx" },
  { id: "projects", label: "Projects.jsx" },
  { id: "contact", label: "Contact.jsx" },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActive(tabs[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* "window controls" + logo, like a title bar */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-tag/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-string/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-keyword/70" />
          </div>
          <span className="font-mono text-sm text-muted">swagat@portfolio:~$</span>
        </div>

        {/* Desktop tabs */}
        <nav className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              className={`rounded-t-md border-b-2 px-3 py-2 font-mono text-sm transition-colors ${
                active === tab.id
                  ? "border-keyword bg-surfacehi text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col border-t border-border bg-surface md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              className={`px-6 py-3 text-left font-mono text-sm ${
                active === tab.id ? "bg-surfacehi text-ink" : "text-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
