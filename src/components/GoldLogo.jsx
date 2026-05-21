// Real Kingdom Mandate Ministry logo
const KMM_LOGO = "https://media.base44.com/images/public/6a0e1f09c87023fd78585d5c/662c415f8_logopng.png";

export default function GoldLogo({ size = "md" }) {
  const dims =
    size === "xl"  ? "w-28 h-28" :
    size === "lg"  ? "w-20 h-20" :
    size === "md"  ? "w-11 h-11" :
                     "w-8 h-8";

  return (
    <div
      className={`${dims} rounded-full overflow-hidden flex-shrink-0`}
      style={{
        boxShadow: "0 0 20px hsla(43,90%,55%,0.5), 0 0 50px hsla(43,90%,55%,0.2), 0 2px 12px rgba(0,0,0,0.6)",
        background: "#0d1a2e",
      }}
    >
      <img
        src={KMM_LOGO}
        alt="Kingdom Mandate Ministry"
        className="w-full h-full object-cover object-center"
        draggable={false}
      />
    </div>
  );
}