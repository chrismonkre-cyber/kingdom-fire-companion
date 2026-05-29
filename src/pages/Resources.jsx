import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";
import { ExternalLink } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/90735f95c_resources-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/c0786bac2_resources-mobile.png";

const RESOURCES = [
  { title: "Kingdom Mandate Ministry", desc: "The main ministry hub for Kingdom truth, revival, and equipping.", url: "https://kingdommandateministry.com" },
  { title: "The Bible Companion", desc: "Daily Scripture, devotion, and Bible study resources.", url: "https://thebiblecompanion.online" },
  { title: "Kingdom Prayer Wall", desc: "Submit and pray over prayer requests with the Body of Christ.", url: "https://prayer.kingdommandateministry.com" },
  { title: "Kingdom Fire", desc: "Daily fire, Scripture, prayer, declarations, and breakthrough.", url: "https://fire.kingdommandateministry.com" },
  { title: "Kingdom Pathway", desc: "Guided pathways for spiritual growth and discipleship.", url: "https://pathway.kingdommandateministry.com" },
  { title: "Kingdom Declarations", desc: "Speak faith-filled declarations aligned with the Word of God.", url: "https://declarations.kingdommandateministry.com" },
  { title: "Kingdom Healing Room", desc: "Scriptures, prayers, and faith for divine healing.", url: "https://healing.kingdommandateministry.com" },
  { title: "Kingdom Purpose Finder", desc: "Discover your God-given purpose and Kingdom assignment.", url: "https://purpose.kingdommandateministry.com" },
  { title: "Kingdom Identity", desc: "Know who you are in Christ and walk in your true identity.", url: "https://identity.kingdommandateministry.com" },
  { title: "Kingdom Gift Finder", desc: "Discover your spiritual gifts and how to use them.", url: "https://gifts.kingdommandateministry.com" },
  { title: "Kingdom Battle Plan", desc: "Strategic spiritual warfare tools and battle-ready resources.", url: "https://battle.kingdommandateministry.com" },
  { title: "Kingdom Grace Vault", desc: "A treasury of grace-centered Scripture and encouragement.", url: "https://grace.kingdommandateministry.com" },
  { title: "Kingdom Revival Fire", desc: "Resources to stir the fire of revival in your life and church.", url: "https://revival.kingdommandateministry.com" },
  { title: "Kingdom Family Altar", desc: "Family devotion, prayer, and faith resources for the household.", url: "https://family.kingdommandateministry.com" },
  { title: "Kingdom Marketplace Mandate", desc: "Faith in the workplace. Business as Kingdom ministry.", url: "https://marketplace.kingdommandateministry.com" },
  { title: "Kingdom Freedom", desc: "Walk in freedom from bondage, sin, and the lies of the enemy.", url: "https://freedom.kingdommandateministry.com" },
  { title: "YouTube Channel", desc: "Watch Kingdom Mandate Ministry teachings, worship, and more.", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { title: "Contact", desc: "Reach out to the ministry team.", url: "mailto:kingdommm.chris@gmail.com" },
  { title: "Partner / Sow", desc: "Support the ministry and sow into Kingdom work.", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Resources() {
  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader title="Kingdom Fire Resources" subtitle="Continue the journey with the Kingdom Mandate Ministry ecosystem." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <GlassCard className="p-5 h-full hover:bg-red-900/50 transition-all">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-cinzel text-sm md:text-base font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                    {r.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-amber-500/50 group-hover:text-amber-400 transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="font-inter text-xs md:text-sm text-amber-100/70">{r.desc}</p>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}