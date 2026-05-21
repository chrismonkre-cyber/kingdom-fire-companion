import { useState, useEffect } from "react";
import { prayerCategories } from "../data/content";
import { Plus, X, Check, ExternalLink, Lock } from "lucide-react";
import PageHero from "../components/PageHero";
import { toast } from "sonner";

const STORAGE_KEY = "kingdom-fire-prayer-vault";

const fieldStyle = {
  background: "hsla(350,42%,8%,0.75)",
  border: "1px solid hsla(43,70%,42%,0.30)",
  color: "hsl(40,40%,96%)",
  borderRadius: "0.75rem",
  padding: "0.75rem",
  width: "100%",
  fontSize: "0.875rem",
  outline: "none",
};

const cardStyle = {
  background: "linear-gradient(145deg, hsla(350,48%,14%,0.90), hsla(355,55%,8%,0.96))",
  border: "1px solid hsla(43,82%,52%,0.42)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.40), inset 0 1px 0 hsla(43,95%,65%,0.10), 0 0 28px hsla(43,90%,50%,0.06)"
};

export default function PrayerVault() {
  const [prayers, setPrayers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: prayerCategories[0], text: "", status: "Praying" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setPrayers(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  const savePrayers = (list) => {
    setPrayers(list);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch {}
  };

  const addPrayer = () => {
    if (!form.title.trim() || !form.text.trim()) { toast.error("Please fill in title and prayer text."); return; }
    savePrayers([{ ...form, id: Date.now(), date: new Date().toLocaleDateString() }, ...prayers]);
    setForm({ title: "", category: prayerCategories[0], text: "", status: "Praying" });
    setShowForm(false);
    toast.success("Prayer saved to vault");
  };

  const toggleStatus = (id) => savePrayers(prayers.map((p) => p.id === id ? { ...p, status: p.status === "Praying" ? "Answered" : "Praying" } : p));
  const removePrayer = (id) => { if (window.confirm("Remove this prayer from the vault?")) savePrayers(prayers.filter((p) => p.id !== id)); };

  if (!loaded) return null;

  return (
    <div className="pb-24 lg:pb-12">
      <PageHero
        pageKey="prayer-vault"
        title="Prayer Vault"
        subtitle="A sacred place to write, save, and revisit your prayers. Watch God move."
      />

      <div className="max-w-3xl mx-auto px-4 py-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-40 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(25,100%,45%,0.10) 0%, hsla(43,95%,55%,0.06) 40%, transparent 70%)" }} />

        <div className="flex justify-center gap-3 mb-8">
          <button onClick={() => setShowForm(!showForm)}
            className="btn-gold rounded-xl py-2.5 px-5 text-[11px] flex items-center gap-2 transition-all tracking-widest uppercase">
            <Plus className="w-3.5 h-3.5" /> New Prayer
          </button>
        </div>

        {showForm && (
          <div className="relative rounded-2xl overflow-hidden shimmer-gold mb-6" style={cardStyle}>
            <div className="h-0.5 rounded-full" style={{ background: "linear-gradient(90deg, transparent, hsl(43,100%,68%), transparent)" }} />
            <div className="p-5 space-y-3">
              <input type="text" placeholder="Prayer title..." value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })} style={fieldStyle} />
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={fieldStyle}>
                {prayerCategories.map((c) => <option key={c} value={c} style={{ background: "hsl(350,42%,8%)" }}>{c}</option>)}
              </select>
              <textarea placeholder="Write your prayer..." value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                rows={5} style={{ ...fieldStyle, resize: "vertical", fontFamily: "var(--font-accent)", fontSize: "1rem" }} />
              <div className="flex gap-2">
                <button onClick={addPrayer} className="btn-gold rounded-xl py-2.5 px-5 text-[11px] tracking-widest uppercase">Save Prayer</button>
                <button onClick={() => setShowForm(false)} className="btn-glass rounded-xl py-2.5 px-5 text-[11px] tracking-widest uppercase">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {prayers.length === 0 ? (
          <div className="relative rounded-2xl overflow-hidden shimmer-gold p-10 text-center space-y-3" style={cardStyle}>
            <Lock className="w-8 h-8 mx-auto animate-pulse-gold" style={{ color: "hsla(43,95%,60%,0.55)" }} />
            <p className="font-accent text-base italic" style={{ color: "hsla(40,25%,80%,0.65)" }}>
              Your prayer vault is empty. Add your first prayer above.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {prayers.map((prayer) => (
              <div key={prayer.id} className="relative rounded-2xl overflow-hidden shimmer-gold" style={cardStyle}>
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-sm text-gold">{prayer.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-heading tracking-wider uppercase" style={{ color: "hsla(43,95%,62%,0.55)" }}>{prayer.category}</span>
                        <span style={{ color: "hsla(40,15%,55%,0.5)" }}>·</span>
                        <span className="text-[10px]" style={{ color: "hsla(40,15%,65%,0.65)" }}>{prayer.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button onClick={() => toggleStatus(prayer.id)}
                        className={`text-[9px] font-heading tracking-wider px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                          prayer.status === "Answered"
                            ? "bg-emerald-900/50 text-emerald-400 border border-emerald-700/40"
                            : "text-gold border"}`}
                        style={prayer.status !== "Answered" ? { background: "hsla(43,95%,55%,0.12)", borderColor: "hsla(43,95%,58%,0.32)" } : {}}>
                        {prayer.status === "Answered" && <Check className="w-2.5 h-2.5" />}
                        {prayer.status}
                      </button>
                      <button onClick={() => removePrayer(prayer.id)}
                        className="p-1 transition-colors" style={{ color: "hsla(40,15%,55%,0.45)" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "hsl(0,70%,60%)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "hsla(40,15%,55%,0.45)"}>
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="font-accent text-sm italic leading-relaxed whitespace-pre-wrap"
                    style={{ color: "hsla(40,32%,90%,0.85)" }}>{prayer.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 relative rounded-2xl overflow-hidden shimmer-gold p-5 text-center space-y-3" style={cardStyle}>
          <p className="font-accent text-sm italic" style={{ color: "hsla(40,25%,80%,0.72)" }}>Need others to stand with you in prayer?</p>
          <a href="https://prayer.kingdommandateministry.com" target="_blank" rel="noopener noreferrer"
            className="btn-glass rounded-xl py-2 px-5 text-[11px] inline-flex items-center gap-2 transition-all tracking-widest uppercase">
            <ExternalLink className="w-3 h-3" /> Visit Kingdom Prayer Wall
          </a>
        </div>
        <p className="text-xs text-center mt-4 italic font-accent" style={{ color: "hsla(40,15%,60%,0.60)" }}>
          Your prayers are saved locally in your browser for your eyes only.
        </p>
      </div>
    </div>
  );
}