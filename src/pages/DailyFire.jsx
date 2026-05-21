import { useState, useMemo } from "react";
import { dailyFireEntries } from "../data/content";
import { Flame, ChevronLeft, ChevronRight, BookOpen, MessageSquare, Footprints, PenLine, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";

const sectionConfig = [
  { key: "scripture",     icon: BookOpen,      label: "Scripture",      sub: "reference", italic: true },
  { key: "fireWord",      icon: Flame,         label: "Fire Word" },
  { key: "prayer",        icon: MessageSquare, label: "Prayer" },
  { key: "declaration",   icon: Sparkles,      label: "Declaration" },
  { key: "actionStep",    icon: Footprints,    label: "Action Step" },
  { key: "journalPrompt", icon: PenLine,       label: "Journal Prompt" },
];

export default function DailyFire() {
  const todayIndex = useMemo(() => {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    return dayOfYear % dailyFireEntries.length;
  }, []);

  const [activeIndex, setActiveIndex] = useState(todayIndex);
  const entry = dailyFireEntries[activeIndex];

  return (
    <div className="pb-24 lg:pb-12">
      <PageHero
        pageKey="daily-fire"
        title="Daily Fire"
        subtitle="A daily word of fire to strengthen your faith, fuel your prayer, and ignite your walk with God."
      />

      <div className="max-w-3xl mx-auto px-4 py-6 relative">
        {/* Fire glow behind card area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(25,100%,45%,0.12) 0%, hsla(43,95%,55%,0.08) 40%, transparent 70%)" }} />

        {/* Navigator */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={() => setActiveIndex(i => (i === 0 ? dailyFireEntries.length - 1 : i - 1))}
            className="btn-glass rounded-full p-2.5 transition-all">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="text-center px-4">
            <p className="font-heading text-[10px] tracking-[0.28em] uppercase" style={{ color: "hsla(43,95%,62%,0.65)" }}>
              {activeIndex === todayIndex ? "Today's Fire" : `Entry ${activeIndex + 1} of ${dailyFireEntries.length}`}
            </p>
            <h2 className="font-heading text-lg md:text-xl text-gold-gradient text-shadow-gold mt-0.5">{entry.title}</h2>
          </div>
          <button onClick={() => setActiveIndex(i => (i === dailyFireEntries.length - 1 ? 0 : i + 1))}
            className="btn-glass rounded-full p-2.5 transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Altar card */}
        <div className="relative rounded-2xl overflow-hidden fire-card shimmer-gold">
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,70%), transparent)" }} />

          <div className="p-5 md:p-8 space-y-5">
            {sectionConfig.map(({ key, icon: Icon, label, sub, italic }, idx) => {
              const content = entry[key];
              if (!content) return null;
              const subText = sub ? entry[sub] : null;
              const isLast = idx === sectionConfig.length - 1;
              return (
                <div key={key}>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md flex items-center justify-center"
                        style={{
                          background: "hsla(43,95%,60%,0.18)",
                          border: "1px solid hsla(43,95%,62%,0.35)",
                          boxShadow: "0 0 10px hsla(43,95%,58%,0.18)"
                        }}>
                        <Icon className="w-3 h-3 text-gold" />
                      </div>
                      <span className="font-heading text-[10px] tracking-[0.22em] uppercase text-gold">{label}</span>
                      {subText && <span className="ml-auto font-accent italic text-xs" style={{ color: "hsla(43,95%,62%,0.65)" }}>{subText}</span>}
                    </div>
                    <p className={`font-accent leading-relaxed pl-8 ${italic ? "italic text-lg md:text-xl font-medium" : "text-base md:text-lg"}`}
                      style={{ color: "hsla(40,35%,94%,0.94)" }}>
                      {content}
                    </p>
                  </div>
                  {!isLast && <div className="divider-gold mt-5" />}
                </div>
              );
            })}
          </div>

          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,70%), transparent)" }} />
        </div>

        {/* Day dots */}
        <div className="flex justify-center gap-2 mt-6">
          {dailyFireEntries.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all ${i === activeIndex ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-muted hover:bg-primary/40"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}