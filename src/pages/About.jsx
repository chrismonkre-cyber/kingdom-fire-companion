import { ExternalLink, Mail } from "lucide-react";
import PageHero from "../components/PageHero";

const links = [
  { label: "Main Ministry Site", href: "https://kingdommandateministry.com", icon: ExternalLink },
  { label: "Kingdom Prayer Wall", href: "https://prayer.kingdommandateministry.com", icon: ExternalLink },
  { label: "The Bible Companion", href: "https://thebiblecompanion.online", icon: ExternalLink },
  { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry", icon: ExternalLink },
  { label: "Contact / Prayer Email", href: "mailto:kingdommandateministry@gmail.com", icon: Mail },
];

export default function About() {
  return (
    <div className="pb-24 lg:pb-12">
      <PageHero
        pageKey="about"
        title="About Kingdom Fire Companion"
        subtitle="An official Kingdom Mandate Ministry resource."
      />

      <div className="max-w-3xl mx-auto px-4 py-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(43,90%,55%,0.07) 0%, transparent 70%)" }} />

        <div className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsla(340,28%,18%,0.82), hsla(340,35%,11%,0.9))",
            border: "1px solid hsla(43,80%,55%,0.38)",
            boxShadow: "0 0 40px hsla(43,90%,55%,0.1), 0 20px 50px rgba(0,0,0,0.4)"
          }}>
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,90%,60%), transparent)" }} />
          <div className="p-6 md:p-10 space-y-6">
            <p className="font-accent text-base md:text-lg text-foreground/88 italic leading-relaxed">
              Kingdom Fire Companion is a Kingdom Mandate Ministry resource created to strengthen believers through Scripture, prayer, declarations, and Spirit-filled encouragement.
            </p>
            <p className="font-accent text-base md:text-lg text-foreground/88 italic leading-relaxed">
              {"Whether you are facing fear, seeking healing, believing for breakthrough, or simply need a daily word of fire — this companion is designed to help you stand on the Word of God, pray with boldness, and walk in daily victory."}
            </p>

            <div className="divider-gold" />

            <div>
              <h3 className="font-heading text-sm text-gold tracking-widest uppercase mb-3">Our Mission</h3>
              <p className="font-accent text-base text-foreground/82 italic leading-relaxed">
                {"Kingdom Mandate Ministry exists to advance the Kingdom through The Holy Spirit, Healing & Power."}
              </p>
            </div>

            <div className="divider-gold" />

            <div>
              <h3 className="font-heading text-sm text-gold tracking-widest uppercase mb-4">Connect with Us</h3>
              <div className="space-y-2">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl transition-all group hover:bg-white/5">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: "hsla(43,80%,55%,0.12)", border: "1px solid hsla(43,80%,55%,0.2)" }}>
                        <Icon className="w-3.5 h-3.5 text-gold/70 group-hover:text-gold transition-colors" />
                      </div>
                      <span className="text-sm text-foreground/78 group-hover:text-gold transition-colors">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(43,90%,60%), transparent)" }} />
        </div>
      </div>
    </div>
  );
}