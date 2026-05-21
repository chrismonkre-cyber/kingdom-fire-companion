import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, Compass, Flame, MessageSquare, BookOpen, Lock, Gift, Info } from "lucide-react";
import GoldLogo from "./GoldLogo";
import Footer from "./Footer";
import EmberParticles from "./EmberParticles";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/choose", label: "Choose", icon: Compass },
  { path: "/daily-fire", label: "Daily Fire", icon: Flame },
  { path: "/declarations", label: "Declarations", icon: MessageSquare },
  { path: "/journal", label: "Journal", icon: BookOpen },
  { path: "/prayer-vault", label: "Prayer Vault", icon: Lock },
  { path: "/resources", label: "Resources", icon: Gift },
  { path: "/about", label: "About", icon: Info },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global fire background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div style={{
          background: "radial-gradient(ellipse 110% 55% at 50% -5%, hsla(35,95%,48%,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 15% 100%, hsla(15,100%,40%,0.20) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 100%, hsla(25,100%,42%,0.18) 0%, transparent 55%), hsl(350,42%,5%)"
        }} className="absolute inset-0" />
        {/* Edge fire columns */}
        <div className="absolute inset-0 fire-corner-left" />
        <div className="absolute inset-0 fire-corner-right" />
      </div>

      <EmberParticles count={32} />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b"
        style={{
          borderColor: "hsla(43,70%,45%,0.3)",
          background: "hsla(340,35%,7%,0.88)",
          backdropFilter: "blur(20px)",
        }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
          <Link to="/" className="flex items-center gap-2.5 group">
            <GoldLogo size="md" />
            <div className="hidden sm:block">
              <p className="font-heading text-[11px] tracking-[0.22em] leading-none" style={{ color: 'hsl(43,92%,68%)' }}>KINGDOM FIRE COMPANION</p>
              <p className="font-heading text-[8px] tracking-[0.18em] leading-none mt-0.5" style={{ color: 'hsla(43,80%,55%,0.55)' }}>KINGDOM MANDATE MINISTRY</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-heading tracking-widest uppercase transition-all ${
                    active
                      ? "text-gold bg-amber-500/10 glow-gold"
                      : "text-foreground/60 hover:text-gold hover:bg-amber-500/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gold p-2">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden border-t"
            style={{ borderColor: "hsla(43,70%,45%,0.2)", background: "hsla(340,35%,8%,0.97)", backdropFilter: "blur(20px)" }}>
            <nav className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all ${
                      active
                        ? "text-gold bg-amber-500/10 glow-gold"
                        : "text-foreground/65 hover:text-gold hover:bg-amber-500/8"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-heading text-[10px] tracking-widest uppercase">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      <Footer />

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t"
        style={{ borderColor: "hsla(43,70%,45%,0.25)", background: "hsla(340,35%,7%,0.96)", backdropFilter: "blur(20px)" }}>
        <div className="flex justify-around py-1.5 px-1">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-2 rounded-lg transition-all ${active ? "text-gold" : "text-foreground/45"}`}>
                <Icon className="w-4 h-4" />
                <span className="text-[8px] font-heading tracking-wider uppercase">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}