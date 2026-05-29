const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/8f57531dd_newlogo.png";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center pt-8 pb-6 px-4">
      <img
        src={LOGO}
        alt="Kingdom Mandate Ministry"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto mb-4 shadow-lg shadow-amber-500/30"
      />
      <h1 className="font-cinzel text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg" style={{ color: "#f5d65e", textShadow: "0 2px 8px rgba(92, 35, 35, 0.7), 0 0 20px rgba(245, 214, 94, 0.3)" }}>
        {title}
      </h1>
      {subtitle && (
        <p className="font-inter text-base md:text-lg text-amber-50/90 max-w-2xl mx-auto drop-shadow">
          {subtitle}
        </p>
      )}
    </div>
  );
}