import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";
import { ExternalLink } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4de094bf4_about-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e679106c7_about-mobile.png";

const SUITE_LINKS = [
  { title: "Kingdom Mandate Ministry", url: "https://kingdommandateministry.com" },
  { title: "The Bible Companion", url: "https://thebiblecompanion.online" },
  { title: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { title: "Kingdom Fire", url: "https://fire.kingdommandateministry.com" },
  { title: "Kingdom Pathway", url: "https://pathway.kingdommandateministry.com" },
  { title: "Kingdom Declarations", url: "https://declarations.kingdommandateministry.com" },
  { title: "Kingdom Healing Room", url: "https://healing.kingdommandateministry.com" },
  { title: "Kingdom Purpose Finder", url: "https://purpose.kingdommandateministry.com" },
  { title: "Kingdom Identity", url: "https://identity.kingdommandateministry.com" },
  { title: "Kingdom Gift Finder", url: "https://gifts.kingdommandateministry.com" },
  { title: "Kingdom Battle Plan", url: "https://battle.kingdommandateministry.com" },
  { title: "Kingdom Grace Vault", url: "https://grace.kingdommandateministry.com" },
  { title: "Kingdom Revival Fire", url: "https://revival.kingdommandateministry.com" },
  { title: "Kingdom Family Altar", url: "https://family.kingdommandateministry.com" },
  { title: "Kingdom Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com" },
  { title: "Kingdom Freedom", url: "https://freedom.kingdommandateministry.com" },
  { title: "YouTube Channel", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { title: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
  { title: "Partner / Sow", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function About() {
  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader title="About Kingdom Fire Companion" subtitle="Scripture. Prayer. Power. Daily breakthrough." />

        <GlassCard className="max-w-3xl w-full p-6 md:p-8 mb-6">
          <p className="font-inter text-sm md:text-base text-amber-100/90 leading-relaxed mb-6">
            Kingdom Fire Companion was created to help believers face daily battles with the Word of God, prayer, declarations, faith, courage, and Holy Spirit fire. This app is not about hype; it is about standing on Scripture, praying with authority, and walking out faith one step at a time.
          </p>
          <div className="border-t border-amber-500/20 pt-5">
            <h3 className="font-cinzel text-lg font-semibold text-amber-400 mb-3">Ministry Connection</h3>
            <p className="font-inter text-sm md:text-base text-amber-100/85 leading-relaxed">
              Kingdom Mandate Ministry exists to awaken believers, stir the fire of revival, and equip the Body of Christ to walk in purpose, power, healing, and truth.
            </p>
          </div>
        </GlassCard>

        {/* App Suite */}
        <GlassCard className="max-w-3xl w-full p-6 md:p-8">
          <h2 className="font-cinzel text-xl md:text-2xl font-bold text-center mb-6" style={{ color: "#d4a843" }}>
            Kingdom Mandate Ministry App Suite
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SUITE_LINKS.map((l) => (
              <a
                key={l.title}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-black/20 border border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-400/40 transition-all group"
              >
                <span className="font-inter text-sm text-amber-200/90 group-hover:text-amber-200">{l.title}</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-500/40 group-hover:text-amber-400 shrink-0" />
              </a>
            ))}
          </div>
        </GlassCard>
      </div>
      <Footer />
    </PageBackground>
  );
}