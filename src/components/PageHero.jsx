import GoldLogo from "./GoldLogo";

const BG1 = "https://media.base44.com/images/public/6a0e1f09c87023fd78585d5c/813ef7321_generated_image.png";
const BG2 = "https://media.base44.com/images/public/6a0e1f09c87023fd78585d5c/f670783bf_generated_image.png";

const BG_MAP = {
  choose:          BG1,
  "daily-fire":    BG1,
  declarations:    BG2,
  journal:         BG2,
  "prayer-vault":  BG2,
  resources:       BG1,
  about:           BG2,
};

export default function PageHero({ pageKey, title, subtitle }) {
  const bg = BG_MAP[pageKey] || BG1;

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: 240 }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover object-top" />

        {/* Minimal dark overlay — let image show */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(4,1,6,0.18) 0%, rgba(5,1,8,0.35) 52%, hsl(350,42%,5%) 100%)"
        }} />

        {/* Warm fire light rays from top centre */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 65% at 50% 0%, hsla(43,100%,60%,0.22) 0%, hsla(25,100%,50%,0.10) 45%, transparent 68%)"
        }} />

        {/* Fire warmth rising from bottom */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          background: "linear-gradient(to top, hsla(15,100%,35%,0.16) 0%, hsla(25,100%,48%,0.08) 40%, transparent 100%)"
        }} />

        {/* Side fire warmth */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 35% 70% at 0% 100%, hsla(25,100%,45%,0.12) 0%, transparent 60%), radial-gradient(ellipse 35% 70% at 100% 100%, hsla(25,100%,45%,0.12) 0%, transparent 60%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 pb-10 gap-4">

        {/* KMM Logo with fire halo */}
        <div style={{
          filter: "drop-shadow(0 0 28px hsla(43,100%,65%,0.90)) drop-shadow(0 0 65px hsla(25,100%,55%,0.40))"
        }}>
          <GoldLogo size="lg" />
        </div>

        {/* Title */}
        <div className="relative space-y-2">
          {/* Dark radial halo behind title */}
          <div className="absolute inset-0 -m-6" style={{
            background: "radial-gradient(ellipse 95% 85% at 50% 50%, hsla(350,60%,8%,0.65) 0%, hsla(350,55%,5%,0.30) 65%, transparent 100%)",
            filter: "blur(12px)",
            zIndex: -1
          }} />
          <h1 className="relative font-heading text-2xl md:text-4xl tracking-wider leading-tight font-black animate-gold-text"
            style={{
              color: "hsl(43,100%,78%)",
              textShadow: "0 0 40px hsla(43,95%,65%,0.85), 0 0 100px hsla(43,90%,55%,0.40), 0 4px 2px rgba(0,0,0,0.95), 0 8px 24px rgba(0,0,0,0.70), 2px 2px 0 rgba(0,0,0,0.85)",
              fontWeight: 900,
              letterSpacing: "0.05em"
            }}>
            {title}
          </h1>
          {subtitle && (
            <p className="relative font-accent text-base md:text-lg leading-relaxed max-w-xl mx-auto"
              style={{
                color: "hsl(40,45%,96%)",
                textShadow: "0 0 20px hsla(43,95%,65%,0.35), 0 3px 10px rgba(0,0,0,0.90), 0 6px 20px rgba(0,0,0,0.70)",
                fontWeight: 500
              }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(43,95%,62%))" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-gold" />
          <div className="w-14 h-px" style={{ background: "linear-gradient(to left, transparent, hsl(43,95%,62%))" }} />
        </div>
      </div>
    </div>
  );
}