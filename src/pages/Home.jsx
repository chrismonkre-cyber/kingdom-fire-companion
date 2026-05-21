import { Link } from "react-router-dom";
import { Flame, BookOpen, MessageSquare, Footprints, PenLine } from "lucide-react";

const HERO_BG  = "https://media.base44.com/images/public/6a0e1f09c87023fd78585d5c/fb6e1530d_generated_image.png";
const KMM_LOGO = "https://media.base44.com/images/public/6a0e1f09c87023fd78585d5c/662c415f8_logopng.png";

const valueCards = [
  { icon: BookOpen,      title: "Scripture to Stand On",      desc: "Powerful, curated Scriptures for every battle you face." },
  { icon: MessageSquare, title: "Prayer to Speak",            desc: "Spirit-filled prayers to pray with boldness and authority." },
  { icon: Flame,         title: "Declarations to Release",    desc: "Faith-filled declarations that align your mouth with Heaven." },
  { icon: Footprints,    title: "Action Steps to Walk Out",   desc: "Practical steps to activate your faith daily." },
  { icon: PenLine,       title: "Journal Prompts to Capture", desc: "Guided prompts to record breakthrough and testimony." },
];

export default function Home() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* ——— HERO ——— */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Kingdom Fire throne room glory" className="w-full h-full object-cover object-center" />
          {/* Overlay — warm, not dark */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(5,1,8,0.15) 0%, rgba(5,1,8,0.30) 38%, rgba(8,2,12,0.72) 72%, hsl(350,42%,5%) 100%)"
          }} />
          {/* Warm gold upper glow */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 90% 75% at 50% 22%, hsla(43,100%,58%,0.22) 0%, hsla(25,100%,50%,0.10) 40%, transparent 68%)"
          }} />
          {/* Fire rising from bottom */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
            background: "linear-gradient(to top, hsla(15,100%,35%,0.22) 0%, hsla(25,100%,50%,0.12) 30%, hsla(43,95%,55%,0.06) 60%, transparent 100%)"
          }} />
        </div>

        <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto flex flex-col items-center gap-5">

          {/* KMM Logo — intense fire halo */}
          <div style={{ filter: "drop-shadow(0 0 40px hsla(43,100%,65%,0.95)) drop-shadow(0 0 100px hsla(25,100%,55%,0.55))" }}>
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden animate-pulse-gold"
              style={{
                background: "#0d1a2e",
                boxShadow: "0 0 50px hsla(43,100%,60%,0.75), 0 0 120px hsla(25,100%,50%,0.40), 0 6px 32px rgba(0,0,0,0.85)"
              }}>
              <img src={KMM_LOGO} alt="Kingdom Mandate Ministry" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="font-heading text-[10px] md:text-[11px] tracking-[0.38em] uppercase"
            style={{ color: "hsla(43,100%,72%,0.82)" }}>
            Kingdom Mandate Ministry
          </p>

          {/* Title — maximum authority */}
          <div className="relative">
            {/* Deep dark radial halo */}
            <div className="absolute inset-0 -m-10" style={{
              background: "radial-gradient(ellipse 100% 90% at 50% 50%, hsla(350,65%,6%,0.75) 0%, hsla(350,55%,5%,0.35) 65%, transparent 100%)",
              filter: "blur(16px)",
              zIndex: -1
            }} />
            <div className="relative space-y-0.5">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider leading-tight font-black animate-gold-text"
                style={{
                  color: "hsl(43,100%,82%)",
                  textShadow: "0 0 60px hsla(43,100%,70%,0.90), 0 0 140px hsla(43,95%,60%,0.45), 0 0 3px rgba(0,0,0,1), 3px 3px 0 rgba(0,0,0,0.95), -1px -1px 0 rgba(0,0,0,0.80), 0 6px 30px rgba(0,0,0,0.80)",
                  fontWeight: 900,
                  letterSpacing: "0.04em"
                }}>
                Kingdom Fire
              </h1>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider leading-tight font-black animate-gold-text"
                style={{
                  color: "hsl(43,100%,82%)",
                  textShadow: "0 0 60px hsla(43,100%,70%,0.90), 0 0 140px hsla(43,95%,60%,0.45), 0 0 3px rgba(0,0,0,1), 3px 3px 0 rgba(0,0,0,0.95), -1px -1px 0 rgba(0,0,0,0.80), 0 6px 30px rgba(0,0,0,0.80)",
                  fontWeight: 900,
                  letterSpacing: "0.04em",
                  animationDelay: "0.4s",
                }}>
                Companion
              </h1>
            </div>
          </div>

          <p className="font-heading text-xs md:text-sm tracking-[0.32em] uppercase animate-pulse-gold"
            style={{ color: "hsl(43,100%,80%)" }}>
            Scripture · Prayer · Power · Daily Breakthrough
          </p>

          <p className="font-accent text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-medium"
            style={{
              color: "hsl(40,50%,97%)",
              textShadow: "0 0 20px hsla(43,95%,65%,0.40), 0 3px 12px rgba(0,0,0,0.92), 0 8px 24px rgba(0,0,0,0.70)"
            }}>
            {"A Spirit-filled companion to help you stand on the Word, pray with boldness, speak life, and walk in the fire of God's promises every day."}
          </p>

          <div className="grid grid-cols-2 gap-3 w-full max-w-sm pt-2">
            <Link to="/daily-fire" className="btn-gold rounded-xl py-3.5 px-4 text-[11px] text-center tracking-widest uppercase transition-all">
              Start Today's Fire
            </Link>
            <Link to="/choose" className="btn-glass rounded-xl py-3.5 px-4 text-[11px] text-center tracking-widest uppercase transition-all">
              Choose Your Battle
            </Link>
            <Link to="/declarations" className="btn-glass rounded-xl py-3.5 px-4 text-[11px] text-center tracking-widest uppercase transition-all">
              Speak Declarations
            </Link>
            <Link to="/journal" className="btn-glass rounded-xl py-3.5 px-4 text-[11px] text-center tracking-widest uppercase transition-all">
              Journal Breakthrough
            </Link>
          </div>
        </div>

        {/* Fade to page background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(350,42%,5%))" }} />
      </section>

      {/* ——— VALUE SECTION ——— */}
      <section className="relative max-w-5xl mx-auto px-4 py-16">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 55% at 50% 50%, hsla(43,95%,48%,0.07) 0%, transparent 68%)" }} />
        <div className="text-center mb-10 space-y-3">
          <h2 className="font-heading text-2xl md:text-3xl text-gold-gradient text-shadow-gold-strong tracking-wide">
            What This Companion Gives You
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(43,95%,60%))" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-gold" />
            <div className="w-12 h-px" style={{ background: "linear-gradient(to left, transparent, hsl(43,95%,60%))" }} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="glass-card-bright glass-card-hover shimmer-gold rounded-2xl p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "hsla(43,92%,58%,0.18)",
                    border: "1px solid hsla(43,92%,60%,0.38)",
                    boxShadow: "0 0 14px hsla(43,95%,58%,0.20)"
                  }}>
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading text-sm text-gold tracking-wide text-shadow-gold">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsla(40,30%,90%,0.82)" }}>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <div className="relative rounded-2xl overflow-hidden fire-card shimmer-gold">
          <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,70%), transparent)" }} />
          <div className="p-8 md:p-12 space-y-5">
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 animate-fire-breathe" style={{ color: "hsl(25,100%,62%)" }} />
              <Flame className="w-8 h-8 animate-pulse-gold text-gold" style={{ filter: "drop-shadow(0 0 12px hsl(43,95%,62%))" }} />
              <Flame className="w-5 h-5 animate-fire-breathe" style={{ color: "hsl(25,100%,62%)", animationDelay: "0.4s" }} />
            </div>
            <h2 className="font-heading text-lg md:text-2xl text-gold-gradient text-shadow-gold tracking-wide">
              Choose Your Battle. Stand on the Word. Pray with Fire.
            </h2>
            <p className="font-accent text-lg leading-relaxed" style={{ color: "hsla(40,30%,90%,0.82)" }}>
              Whatever you are facing, God has a Word for it, a prayer for it, and power to break through it.
            </p>
            <Link to="/choose" className="btn-gold rounded-xl py-3.5 px-10 text-sm inline-block transition-all tracking-widest uppercase">
              Begin Now
            </Link>
          </div>
          <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,70%), transparent)" }} />
        </div>
      </section>
    </div>
  );
}