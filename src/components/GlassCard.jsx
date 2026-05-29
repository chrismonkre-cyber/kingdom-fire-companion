export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`bg-red-900/30 backdrop-blur-md border border-amber-400/40 rounded-xl shadow-lg shadow-amber-800/20 ${className}`}>
      {children}
    </div>
  );
}