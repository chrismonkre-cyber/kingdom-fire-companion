import { useState, useEffect } from "react";
import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";
import { Plus, Trash2, BookOpen } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a553e23e2_journal-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/06b73a1ea_journal-mobile.png";

const PROMPTS = [
  "What battle am I bringing before God today?",
  "What Scripture am I standing on?",
  "What declaration am I speaking over this situation?",
  "What step of obedience do I need to take?",
  "Where have I already seen God moving?",
  "What testimony am I believing for?",
];

const STORAGE_KEY = "kingdom-fire-journal";

function loadEntries() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export default function Journal() {
  const [entries, setEntries] = useState(loadEntries);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    saveEntries(entries);
  }, [entries]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    const entry = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    };
    setEntries([entry, ...entries]);
    setTitle("");
    setContent("");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader title="Breakthrough Journal" subtitle="Write the promise. Track the prayer. Remember the victory." />

        {/* Prompts */}
        <GlassCard className="max-w-3xl w-full p-5 mb-6">
          <h3 className="font-cinzel text-base font-semibold text-amber-400 mb-3">Journal Prompts</h3>
          <ul className="space-y-1.5">
            {PROMPTS.map((p) => (
              <li key={p} className="font-inter text-sm text-amber-100/80 flex gap-2">
                <span className="text-amber-500 shrink-0">•</span> {p}
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* New Entry Toggle */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-6 py-3 mb-6 rounded-xl font-cinzel text-sm font-semibold bg-amber-600/80 hover:bg-amber-500/90 text-white border border-amber-400/40 transition-all shadow-md"
          >
            <Plus className="w-4 h-4" /> New Journal Entry
          </button>
        )}

        {/* New Entry Form */}
        {showForm && (
          <GlassCard className="max-w-3xl w-full p-5 mb-6 space-y-4">
            <input
              type="text"
              placeholder="Entry title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-amber-500/30 text-amber-100 font-inter text-sm placeholder-amber-100/40 focus:outline-none focus:border-amber-400/60"
            />
            <textarea
              placeholder="Write your breakthrough journal entry..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-amber-500/30 text-amber-100 font-inter text-sm placeholder-amber-100/40 focus:outline-none focus:border-amber-400/60 resize-none"
            />
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="px-6 py-2.5 rounded-lg font-cinzel text-sm font-semibold bg-amber-600/80 hover:bg-amber-500/90 text-white border border-amber-400/40 transition-all"
              >
                Save Entry
              </button>
              <button
                onClick={() => { setShowForm(false); setTitle(""); setContent(""); }}
                className="px-6 py-2.5 rounded-lg font-inter text-sm text-amber-200/70 hover:text-amber-200 bg-red-950/30 border border-amber-500/20 transition-all"
              >
                Cancel
              </button>
            </div>
          </GlassCard>
        )}

        {/* Saved Entries */}
        <div className="max-w-3xl w-full space-y-3">
          {entries.length === 0 && (
            <GlassCard className="p-8 text-center">
              <BookOpen className="w-10 h-10 text-amber-400/50 mx-auto mb-3" />
              <p className="font-inter text-sm text-amber-100/60">Your breakthrough journal is waiting. Start writing what God is doing.</p>
            </GlassCard>
          )}
          {entries.map((e) => (
            <GlassCard key={e.id} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-cinzel text-base font-semibold text-amber-300">{e.title}</h3>
                  <p className="font-inter text-xs text-amber-100/50 mb-2">{e.date}</p>
                  <p className="font-inter text-sm text-amber-100/85 leading-relaxed whitespace-pre-wrap">{e.content}</p>
                </div>
                <button
                  onClick={() => handleDelete(e.id)}
                  className="p-2 rounded-lg text-red-400/70 hover:text-red-300 hover:bg-red-900/30 transition-all shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}