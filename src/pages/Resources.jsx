import { resources } from "../data/content";
import { ExternalLink, Flame, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";

const cardStyle = {
  background: "linear-gradient(145deg, hsla(350,48%,15%,0.90), hsla(355,55%,8%,0.96))",
  border: "1px solid hsla(43,82%,55%,0.48)",
  boxShadow: "0 0 35px hsla(43,95%,55%,0.12), 0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 hsla(43,95%,68%,0.14)"
};

export default function Resources() {
  return (
    <div className="pb-24 lg:pb-12">
      <PageHero
        pageKey="resources"
        title="Kingdom Fire Resources"
        subtitle="Go deeper. Equip yourself. Carry the fire further."
      />

      <div className="max-w-4xl mx-auto px-4 py-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(25,100%,45%,0.12) 0%, hsla(43,95%,55%,0.07) 40%, transparent 70%)" }} />

        <p className="text-center font-accent text-base italic max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: "hsla(40,28%,82%,0.78)" }}>
          Deeper resources are being prepared to help you walk through 30 days of Scripture, prayer, declarations, and breakthrough journaling.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {resources.map((r) => (
            <div key={r.title} className="relative rounded-2xl overflow-hidden shimmer-gold glass-card-hover" style={cardStyle}>
              <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,72%), transparent)" }} />
              <div className="p-6 space-y-4">
                {r.badge && (
                  <span className="inline-block text-[9px] font-heading tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                    style={{
                      color: "hsl(43,95%,70%)",
                      background: "hsla(43,95%,55%,0.12)",
                      border: "1px solid hsla(43,95%,60%,0.28)"
                    }}>
                    {r.badge}
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" style={{ filter: "drop-shadow(0 0 6px hsl(43,95%,60%))" }} />
                  <h3 className="font-heading text-sm text-gold tracking-wide text-shadow-gold">{r.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsla(40,28%,85%,0.80)" }}>{r.description}</p>
                <a href="https://kingdommandateministry.com" target="_blank" rel="noopener noreferrer"
                  className="btn-gold rounded-xl py-2.5 px-5 text-[11px] inline-flex items-center gap-2 transition-all tracking-widest uppercase">
                  {r.button} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-12 relative rounded-2xl overflow-hidden fire-card shimmer-gold">
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,74%), transparent)" }} />
          <div className="p-8 md:p-12 text-center space-y-5">
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 animate-fire-breathe" style={{ color: "hsl(25,100%,62%)" }} />
              <Flame className="w-7 h-7 animate-pulse-gold text-gold" style={{ filter: "drop-shadow(0 0 12px hsl(43,95%,62%))" }} />
              <Flame className="w-5 h-5 animate-fire-breathe" style={{ color: "hsl(25,100%,62%)", animationDelay: "0.5s" }} />
            </div>
            <h3 className="font-heading text-xl text-gold-gradient text-shadow-gold tracking-wide">
              Partner with Kingdom Mandate Ministry
            </h3>
            <p className="font-accent text-lg italic max-w-lg mx-auto leading-relaxed"
              style={{ color: "hsla(40,28%,84%,0.80)" }}>
              {"Your generosity fuels the fire. When you sow into this ministry, you are helping advance the Kingdom through The Holy Spirit, Healing & Power."}
            </p>
            <a href="https://kingdommandateministry.com" target="_blank" rel="noopener noreferrer"
              className="btn-gold rounded-xl py-3.5 px-10 text-sm inline-flex items-center gap-2 transition-all tracking-widest uppercase">
              Partner / Sow <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,74%), transparent)" }} />
        </div>
      </div>
    </div>
  );
}