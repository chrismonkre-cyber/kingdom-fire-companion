import { useEffect, useState } from "react";

function rand(min, max) { return min + Math.random() * (max - min); }

// Color palette — orange fire, amber, gold, white-hot core
const EMBER_COLORS = [
  "hsl(25,100%,72%)",   // deep orange
  "hsl(35,100%,78%)",   // amber-orange
  "hsl(43,100%,84%)",   // gold
  "hsl(15,100%,65%)",   // fire orange-red
  "hsl(43,100%,92%)",   // near-white hot
  "hsl(30,100%,70%)",   // warm amber
];

export default function EmberParticles({ count = 30 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => {
        const isLarge = Math.random() > 0.72; // ~28% large sparks
        return {
          id: i,
          left:     rand(2, 98),
          delay:    rand(0, 14),
          duration: isLarge ? rand(5, 9) : rand(8, 18),
          size:     isLarge ? rand(4.5, 8) : rand(1.8, 4.2),
          opacity:  isLarge ? rand(0.65, 0.92) : rand(0.40, 0.75),
          color:    EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)],
        };
      })
    );
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="ember-particle"
          style={{
            left: `${p.left}%`,
            bottom: "-8px",
            width:  `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            background: `radial-gradient(circle, white 0%, ${p.color} 35%, hsla(25,90%,50%,0.5) 70%, transparent 100%)`,
            boxShadow: `0 0 ${p.size * 2.5}px ${p.color}`,
            animationDelay:    `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}