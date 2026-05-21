export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center space-y-3 ${className}`}>
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-gold-gradient text-shadow-gold-strong tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="font-accent text-lg md:text-xl text-foreground/80 italic max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 pt-1">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/70 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-gold" />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/70 rounded-full" />
      </div>
    </div>
  );
}