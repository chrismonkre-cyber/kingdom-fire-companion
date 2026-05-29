const LINKS = [
  { label: "Main Site", url: "https://kingdommandateministry.com" },
  { label: "Bible Companion", url: "https://thebiblecompanion.online" },
  { label: "Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { label: "Kingdom Fire", url: "https://fire.kingdommandateministry.com" },
  { label: "Pathway", url: "https://pathway.kingdommandateministry.com" },
  { label: "Declarations", url: "https://declarations.kingdommandateministry.com" },
  { label: "Healing Room", url: "https://healing.kingdommandateministry.com" },
  { label: "Purpose Finder", url: "https://purpose.kingdommandateministry.com" },
  { label: "Identity", url: "https://identity.kingdommandateministry.com" },
  { label: "Gift Finder", url: "https://gifts.kingdommandateministry.com" },
  { label: "Battle Plan", url: "https://battle.kingdommandateministry.com" },
  { label: "Grace Vault", url: "https://grace.kingdommandateministry.com" },
  { label: "Revival Fire", url: "https://revival.kingdommandateministry.com" },
  { label: "Family Altar", url: "https://family.kingdommandateministry.com" },
  { label: "Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com" },
  { label: "Freedom", url: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-black/40 backdrop-blur-sm border-t border-amber-400/25">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-inter text-amber-200/85 hover:text-amber-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-center text-xs font-inter text-amber-200/70">
          © 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
        </p>
      </div>
    </footer>
  );
}