import { Flame, BookOpen, MessageSquare, Footprints, PenLine, Sparkles } from "lucide-react";

const sections = [
  { key: "scripture",     icon: BookOpen,      label: "Scripture",     refKey: "reference" },
  { key: "encouragement", icon: Sparkles,      label: "Encouragement" },
  { key: "prayer",        icon: MessageSquare, label: "Prayer" },
  { key: "declaration",   icon: Flame,         label: "Declaration" },
  { key: "actionStep",    icon: Footprints,    label: "Action Step" },
  { key: "journalPrompt", icon: PenLine,       label: "Journal Prompt" },
];

export default function FireCard({ data, title }) {
  if (!data) return null;

  return (
    <div className="relative rounded-2xl overflow-hidden shimmer-gold"
      style={{
        background: "linear-gradient(145deg, hsla(350,48%,13%,0.93) 0%, hsla(355,55%,7%,0.98) 100%)",
        border: "1px solid hsla(43,85%,58%,0.50)",
        boxShadow: "0 0 55px hsla(43,95%,58%,0.18), 0 20px 60px rgba(0,0,0,0.60), inset 0 1px 0 hsla(43,95%,68%,0.16)"
      }}>
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,72%), transparent)" }} />

      <div className="p-5 md:p-8 space-y-5">
        {title && (
          <h2 className="font-heading text-xl md:text-2xl text-gold-gradient text-shadow-gold text-center pb-2">
            {title}
          </h2>
        )}

        {sections.map(({ key, icon: Icon, label, refKey }, idx) => {
          const content = data[key];
          if (!content) return null;
          const ref = refKey ? data[refKey] : null;
          const isLast = idx === sections.length - 1;
          const isScripture = key === "scripture";

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
                  <h3 className="font-heading text-[10px] tracking-[0.22em] uppercase text-gold">{label}</h3>
                  {ref && <span className="ml-auto font-accent italic text-xs" style={{ color: "hsla(43,95%,62%,0.65)" }}>{ref}</span>}
                </div>
                <p className={`font-accent leading-relaxed pl-8 ${isScripture ? "italic text-lg md:text-xl font-medium" : "text-base md:text-lg"}`}
                  style={{ color: "hsla(40,38%,95%,0.94)" }}>
                  {content}
                </p>
              </div>
              {!isLast && <div className="divider-gold mt-5" />}
            </div>
          );
        })}
      </div>

      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,72%), transparent)" }} />
    </div>
  );
}