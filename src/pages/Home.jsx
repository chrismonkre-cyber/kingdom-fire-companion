import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";
import { Flame, Sword, BookOpen, Footprints, Heart } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/8a9f8e783_home-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f28b2f067_home-mobile.png";

const BUTTONS = [
  { label: "Start Today's Fire", to: "/daily", icon: Flame },
  { label: "Choose Your Battle", to: "/choose", icon: Sword },
  { label: "Speak Declarations", to: "/declarations", icon: BookOpen },
  { label: "Prayer Altar", to: "/prayer", icon: Heart },
  { label: "Journal Breakthrough", to: "/journal", icon: Footprints },
  { label: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

const FEATURES = [
  { title: "Scripture to Stand On", text: "Powerful curated Scriptures for every battle you face.", icon: BookOpen },
  { title: "Prayer to Speak", text: "Spirit-filled prayers to help you pray with boldness and authority.", icon: Heart },
  { title: "Declarations to Release", text: "Faith-filled declarations that align your words with Heaven.", icon: Flame },
  { title: "Action Steps to Walk Out", text: "Practical steps to move forward in obedience, faith, and courage.", icon: Footprints },
];

export default function Home() {
  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader
          title="Kingdom Fire Companion"
          subtitle="Scripture. Prayer. Power. Daily breakthrough."
        />

        <GlassCard className="max-w-3xl w-full p-6 md:p-8 mb-8">
          <p className="font-inter text-sm md:text-base text-amber-100/90 leading-relaxed text-center">
            Kingdom Fire Companion helps you stand on the Word of God, pray with boldness, speak faith-filled declarations, and walk in the fire of God's promises. Whatever you are facing, God's Word is alive, His Spirit is present, and breakthrough belongs to those who stand in faith.
          </p>
        </GlassCard>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl w-full mb-10">
          {BUTTONS.map((b) =>
            b.href ? (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-cinzel text-xs md:text-sm font-semibold bg-amber-600/80 hover:bg-amber-500/90 text-white border border-amber-400/40 transition-all shadow-md shadow-amber-900/30 text-center"
              >
                {b.label}
              </a>
            ) : (
              <Link
                key={b.label}
                to={b.to}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-cinzel text-xs md:text-sm font-semibold bg-red-900/60 hover:bg-red-800/70 text-amber-100 border border-amber-500/30 transition-all shadow-md shadow-amber-900/30 text-center"
              >
                {b.icon && <b.icon className="w-4 h-4 text-amber-400" />}
                {b.label}
              </Link>
            )
          )}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mb-8">
          {FEATURES.map((f) => (
            <GlassCard key={f.title} className="p-5 flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-amber-500/20 shrink-0">
                <f.icon className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-cinzel text-base md:text-lg font-semibold text-amber-300 mb-1">{f.title}</h3>
                <p className="font-inter text-sm text-amber-100/80">{f.text}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}