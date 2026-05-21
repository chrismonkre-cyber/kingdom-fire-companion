import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Main Site", href: "https://kingdommandateministry.com" },
  { label: "Prayer Wall", href: "https://prayer.kingdommandateministry.com" },
  { label: "Bible Companion", href: "https://thebiblecompanion.online" },
  { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", href: "mailto:kingdommandateministry@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gold-light/70 hover:text-gold-light transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground font-accent italic">
          © 2026 Kingdom Mandate Ministry | Built by the Glory of GOD, for the Grace of GOD
        </p>
      </div>
    </footer>
  );
}