import { useState } from "react";
import { declarations } from "../data/content";
import { Flame } from "lucide-react";
import PageHero from "../components/PageHero";

export default function Declarations() {
  const [activeCategory, setActiveCategory] = useState(declarations[0].category);
  const activeDec = declarations.find((d) => d.category === activeCategory);

  return (
    <div className="pb-24 lg:pb-12">
      <PageHero
        pageKey="declarations"
        title="Kingdom Declarations"
        subtitle="Speak the Word. Stand in faith. Let your mouth agree with Heaven."
      />

      <div className="max-w-4xl mx-auto px-4 py-6 relative">
        {/* Fire glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(25,100%,45%,0.10) 0%, hsla(43,95%,55%,0.06) 40%, transparent 70%)" }} />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {declarations.map((d) => (
            <button key={d.category} onClick={() => setActiveCategory(d.category)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] transition-all ${d.category === activeCategory ? "btn-gold" : "btn-glass"}`}>
              {d.category}
            </button>
          ))}
        </div>

        {activeDec && (
          <div>
            <div className="text-center mb-6">
              <h3 className="font-heading text-lg text-gold-gradient text-shadow-gold tracking-wide">
                {activeDec.category} Declarations
              </h3>
              <p className="font-accent text-sm mt-1" style={{ color: "hsla(43,95%,70%,0.65)" }}>Speak these aloud with faith and boldness</p>
            </div>
            <div className="space-y-3">
              {activeDec.items.map((item, i) => (
                <div key={i}
                  className="relative rounded-2xl overflow-hidden shimmer-gold glass-card-hover transition-all"
                  style={{
                    background: "linear-gradient(145deg, hsla(350,48%,15%,0.90), hsla(355,55%,8%,0.96))",
                    border: "1px solid hsla(43,85%,55%,0.45)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.38), inset 0 1px 0 hsla(43,95%,65%,0.12)"
                  }}>
                  <div className="flex gap-3 items-start p-5">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-heading font-bold"
                        style={{
                          background: "linear-gradient(135deg, hsl(43,80%,42%), hsl(43,95%,64%))",
                          color: "hsl(350,42%,5%)",
                          boxShadow: "0 0 14px hsla(43,95%,58%,0.40)"
                        }}>
                        {i + 1}
                      </div>
                    </div>
                    <p className="font-accent text-base md:text-lg leading-relaxed italic"
                      style={{ color: "hsla(40,38%,95%,0.94)" }}>"{item}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing fire word */}
        <div className="mt-10 relative rounded-2xl overflow-hidden fire-card shimmer-gold">
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,70%), transparent)" }} />
          <div className="p-6 md:p-8 text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 animate-fire-breathe" style={{ color: "hsl(25,100%,60%)" }} />
              <Flame className="w-7 h-7 animate-pulse-gold text-gold" style={{ filter: "drop-shadow(0 0 10px hsl(43,95%,62%))" }} />
              <Flame className="w-5 h-5 animate-fire-breathe" style={{ color: "hsl(25,100%,60%)", animationDelay: "0.5s" }} />
            </div>
            <p className="font-accent text-lg md:text-xl italic leading-relaxed"
              style={{ color: "hsla(40,38%,94%,0.88)" }}>
              "Speak the Word. Stand in faith. Let your mouth agree with Heaven."
            </p>
          </div>
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,70%), transparent)" }} />
        </div>
      </div>
    </div>
  );
}