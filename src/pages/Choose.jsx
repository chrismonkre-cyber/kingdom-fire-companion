import { useState } from "react";
import { categories } from "../data/content";
import { Shield, Heart, Users, Coins, CloudRain, Compass, Swords, Crown, Flame, Leaf, Target, Mountain, ArrowLeft } from "lucide-react";
import FireCard from "../components/FireCard";
import PageHero from "../components/PageHero";

const iconMap = { Shield, Heart, Users, Coins, CloudRain, Compass, Swords, Crown, Flame, Leaf, Target, Mountain };

export default function Choose() {
  const [selected, setSelected] = useState(null);
  const selectedCat = categories.find((c) => c.id === selected);

  return (
    <div className="pb-24 lg:pb-12">
      <PageHero
        pageKey="choose"
        title="Choose What You're Facing"
        subtitle="Select your battle. Receive Scripture, prayer, declarations, and an action step."
      />

      <div className="max-w-5xl mx-auto px-4 py-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(25,100%,45%,0.12) 0%, hsla(43,95%,55%,0.07) 40%, transparent 70%)" }} />

        {!selected ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Flame;
              return (
                <button key={cat.id} onClick={() => setSelected(cat.id)}
                  className="glass-card-bright glass-card-hover shimmer-gold rounded-2xl p-4 text-left space-y-3 transition-all group"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.40), inset 0 1px 0 hsla(43,95%,65%,0.10)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "hsla(43,95%,60%,0.18)", border: "1px solid hsla(43,95%,62%,0.38)", boxShadow: "0 0 14px hsla(43,95%,58%,0.22)" }}>
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xs text-gold tracking-wide leading-tight">{cat.title}</h3>
                    <p className="text-[11px] text-foreground/60 leading-relaxed mt-1">{cat.description}</p>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest text-gold/55 uppercase">Open →</span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6">
            <button onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-gold/70 hover:text-gold text-sm transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="font-heading text-[10px] tracking-widest uppercase">Back to Categories</span>
            </button>
            <FireCard data={selectedCat} title={selectedCat.title} />
            <div className="pt-2">
              <p className="text-[10px] text-muted-foreground/70 text-center mb-3 font-heading tracking-[0.2em] uppercase">Switch Category</p>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => setSelected(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-heading tracking-wider transition-all ${cat.id === selected ? "btn-gold" : "btn-glass"}`}>
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}