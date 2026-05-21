import { useState, useEffect } from "react";
import { journalSections } from "../data/content";
import { Save, Trash2, PenLine } from "lucide-react";
import PageHero from "../components/PageHero";
import { toast } from "sonner";

const STORAGE_KEY = "kingdom-fire-journal";

export default function Journal() {
  const [entries, setEntries] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setEntries(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  const update = (id, value) => setEntries((prev) => ({ ...prev, [id]: value }));

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
      toast.success("Journal saved");
    } catch {
      toast.error("Could not save. Please copy your notes.");
    }
  };

  const clear = () => {
    if (window.confirm("Clear all journal entries? This cannot be undone.")) {
      setEntries({});
      localStorage.removeItem(STORAGE_KEY);
      toast.success("Journal cleared");
    }
  };

  if (!loaded) return null;

  return (
    <div className="pb-24 lg:pb-12">
      <PageHero
        pageKey="journal"
        title="Breakthrough Journal"
        subtitle="Pour out your heart. Record what God is speaking. Capture every testimony and breakthrough."
      />

      <div className="max-w-3xl mx-auto px-4 py-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-40 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(25,100%,45%,0.10) 0%, hsla(43,95%,55%,0.06) 40%, transparent 70%)" }} />

        <div className="flex justify-center gap-3 mb-8">
          <button onClick={save} className="btn-gold rounded-xl py-2.5 px-5 text-[11px] flex items-center gap-2 transition-all tracking-widest uppercase">
            <Save className="w-3.5 h-3.5" /> Save Journal
          </button>
          <button onClick={clear} className="btn-glass rounded-xl py-2.5 px-5 text-[11px] flex items-center gap-2 transition-all tracking-widest uppercase">
            <Trash2 className="w-3.5 h-3.5" /> Clear
          </button>
        </div>

        <div className="space-y-4">
          {journalSections.map((section) => (
            <div key={section.id}
              className="relative rounded-2xl overflow-hidden shimmer-gold"
              style={{
                background: "linear-gradient(145deg, hsla(350,48%,14%,0.90), hsla(355,55%,8%,0.96))",
                border: "1px solid hsla(43,82%,52%,0.42)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.40), inset 0 1px 0 hsla(43,95%,65%,0.10), 0 0 30px hsla(43,90%,50%,0.06)"
              }}>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center"
                    style={{
                      background: "hsla(43,95%,60%,0.18)",
                      border: "1px solid hsla(43,95%,62%,0.35)",
                      boxShadow: "0 0 10px hsla(43,95%,58%,0.18)"
                    }}>
                    <PenLine className="w-3 h-3 text-gold" />
                  </div>
                  <h3 className="font-heading text-xs text-gold tracking-wide">{section.title}</h3>
                </div>
                <textarea
                  value={entries[section.id] || ""}
                  onChange={(e) => update(section.id, e.target.value)}
                  placeholder={section.placeholder}
                  rows={4}
                  className="w-full rounded-xl p-3 text-sm placeholder:text-muted-foreground/45 focus:outline-none resize-y font-accent text-base leading-relaxed"
                  style={{
                    background: "hsla(350,40%,8%,0.72)",
                    border: "1px solid hsla(43,70%,42%,0.28)",
                    color: "hsl(40,40%,96%)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "hsla(43,92%,60%,0.60)"; e.target.style.boxShadow = "0 0 16px hsla(43,90%,55%,0.14)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "hsla(43,70%,42%,0.28)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-6 italic font-accent" style={{ color: "hsla(40,20%,70%,0.65)" }}>
          Your journal is saved locally in your browser. For extra safety, copy important notes to a safe place.
        </p>
      </div>
    </div>
  );
}