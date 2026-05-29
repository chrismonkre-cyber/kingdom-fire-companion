import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/8f57531dd_newlogo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily Fire" },
  { to: "/choose", label: "Choose" },
  { to: "/declarations", label: "Declarations" },
  { to: "/journal", label: "Journal" },
  { to: "/prayer", label: "Prayer Altar" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={LOGO}
            alt="Kingdom Mandate Ministry"
            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover"
          />
          <span className="font-cinzel font-semibold text-sm md:text-base drop-shadow-lg" style={{ color: "#d4a843" }}>
            Kingdom Fire Companion
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded-lg text-sm font-inter font-medium transition-all ${
                location.pathname === l.to
                  ? "bg-amber-500/20 text-amber-300"
                  : "text-amber-100/80 hover:text-amber-200 hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-amber-200 hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-md border-t border-amber-500/20">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-inter font-medium transition-all ${
                  location.pathname === l.to
                    ? "bg-amber-500/20 text-amber-300"
                    : "text-amber-100/80 hover:text-amber-200 hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}