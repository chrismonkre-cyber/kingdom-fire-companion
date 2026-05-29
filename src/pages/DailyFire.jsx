import { useState } from "react";
import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/99fa93418_daily-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/ffd4f9787_daily-mobile.png";

const DAYS = [
  {
    theme: "Fire for Faith",
    scripture: "\"Now faith is the substance of things hoped for, the evidence of things not seen.\" — Hebrews 11:1",
    encouragement: "Faith is not a feeling. It is a decision to trust God when everything around you says otherwise. Today, choose faith. Stand on the Word. God has never failed, and He will not start with you.",
    prayer: "Father, I choose to walk by faith and not by sight. Strengthen my trust in You. Let my faith rise above my circumstances and anchor itself in Your promises. I believe You are working, even when I cannot see it. In Jesus' name, amen.",
    declaration: "I walk by faith and not by sight. My God is faithful. What He has promised, He will perform. I will not waver. I stand on the rock of His Word.",
    action: "Write down one promise of God you are standing on today. Place it where you can see it throughout the day.",
    reflection: "Where have I been trusting my feelings more than God's Word?"
  },
  {
    theme: "Fire for Courage",
    scripture: "\"Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.\" — Joshua 1:9",
    encouragement: "Courage is not the absence of fear. It is the decision to move forward because God is with you. He has not given you a spirit of fear. Step forward boldly today.",
    prayer: "Lord, fill me with holy courage. Remove every spirit of fear, doubt, and timidity. I know You are with me. Help me to step out in faith and obey You without hesitation. In Jesus' name, amen.",
    declaration: "I am bold and courageous. The Lord my God is with me. I will not shrink back. I was made for this moment and I will walk in the authority of Christ.",
    action: "Identify one area where fear has been holding you back. Take one step of courage in that area today.",
    reflection: "What would I do today if I had no fear?"
  },
  {
    theme: "Fire for Peace",
    scripture: "\"Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.\" — John 14:27",
    encouragement: "The peace of God is not dependent on your circumstances. It is a gift from the Prince of Peace Himself. Let go of what you cannot control and rest in His sovereignty.",
    prayer: "Father, I receive Your peace today. I release every worry, every anxious thought, every burden to You. Guard my heart and mind in Christ Jesus. Let Your peace rule in my life. In Jesus' name, amen.",
    declaration: "The peace of God that passes all understanding guards my heart and mind. I refuse to be anxious. I rest in the finished work of Christ.",
    action: "Take 5 minutes of silence today. Breathe deeply and meditate on the peace of God.",
    reflection: "What am I carrying that I need to release to God today?"
  },
  {
    theme: "Fire for Healing",
    scripture: "\"But He was wounded for our transgressions, He was bruised for our iniquities; the chastisement for our peace was upon Him, and by His stripes we are healed.\" — Isaiah 53:5",
    encouragement: "Healing belongs to you. It was purchased at the cross. Whether you need healing in your body, mind, emotions, or relationships, God is the healer. Stand on His Word and believe.",
    prayer: "Lord, I believe in Your healing power. Touch every area of my life that needs restoration. Heal my body, heal my heart, heal my mind. I trust You as my Healer and I receive Your wholeness. In Jesus' name, amen.",
    declaration: "By the stripes of Jesus, I am healed. Sickness has no authority over my body. I speak life and health over every cell, every organ, every system in my body.",
    action: "Pray healing Scripture over yourself or someone you love today. Speak it out loud with faith.",
    reflection: "Do I truly believe that healing belongs to me through Christ?"
  },
  {
    theme: "Fire for Breakthrough",
    scripture: "\"The Lord will fight for you; you need only to be still.\" — Exodus 14:14",
    encouragement: "Breakthrough is not about your strength. It is about God's power working through you. The walls will fall. The chains will break. The door will open. Keep standing.",
    prayer: "Father, I need breakthrough. Break every chain, tear down every wall, and open every door that stands between me and Your purpose. I trust You to fight for me. In Jesus' name, amen.",
    declaration: "I am a breakthrough believer. No weapon formed against me shall prosper. Every chain is broken. Every wall is falling. My God makes a way where there is no way.",
    action: "Write down the breakthrough you are believing for and place it before the Lord in prayer.",
    reflection: "Am I trying to fight this battle in my own strength, or am I letting God lead?"
  },
  {
    theme: "Fire for Obedience",
    scripture: "\"If you love Me, keep My commandments.\" — John 14:15",
    encouragement: "Obedience is the highest form of worship. It is not always easy, but it is always worth it. God's instructions are not restrictions; they are directions to your destiny.",
    prayer: "Lord, give me a heart of obedience. Help me to follow You even when it is hard. I want to walk in Your ways and honor You in everything I do. In Jesus' name, amen.",
    declaration: "I choose obedience over comfort. I will follow the leading of the Holy Spirit. My steps are ordered by the Lord and I trust His direction.",
    action: "Ask the Holy Spirit: 'Is there anything You have asked me to do that I have not yet done?' Then obey.",
    reflection: "What area of my life have I been resisting God's instruction?"
  },
  {
    theme: "Fire for Purpose",
    scripture: "\"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.\" — Jeremiah 29:11",
    encouragement: "You are not an accident. Your life has Kingdom purpose. Even in seasons of confusion, God is directing your path. Trust the process and stay faithful.",
    prayer: "Father, reveal my purpose. Open my eyes to see what You have called me to do. Give me clarity, direction, and the courage to walk in my calling. In Jesus' name, amen.",
    declaration: "I have Kingdom purpose. God has a plan for my life and it is good. I will walk in my calling and fulfill my assignment in this generation.",
    action: "Write down 3 things you are passionate about and ask God how He wants to use them for His glory.",
    reflection: "Am I living for purpose or just for comfort?"
  },
];

export default function DailyFire() {
  const [day, setDay] = useState(0);
  const d = DAYS[day];

  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader title="Daily Fire" subtitle="A daily Scripture, prayer, declaration, and action step." />

        {/* Day Navigation */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setDay((p) => Math.max(0, p - 1))}
            disabled={day === 0}
            className="p-2 rounded-full bg-red-900/50 border border-amber-500/30 text-amber-300 disabled:opacity-30 hover:bg-red-800/60 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-cinzel text-sm md:text-base text-amber-300 font-semibold">
            Day {day + 1} of {DAYS.length}
          </span>
          <button
            onClick={() => setDay((p) => Math.min(DAYS.length - 1, p + 1))}
            disabled={day === DAYS.length - 1}
            className="p-2 rounded-full bg-red-900/50 border border-amber-500/30 text-amber-300 disabled:opacity-30 hover:bg-red-800/60 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <GlassCard className="max-w-3xl w-full p-6 md:p-8 space-y-6">
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-center" style={{ color: "#d4a843" }}>
            {d.theme}
          </h2>

          <Section label="Scripture" text={d.scripture} />
          <Section label="Encouragement" text={d.encouragement} />
          <Section label="Prayer" text={d.prayer} />
          <Section label="Declaration" text={d.declaration} />
          <Section label="Action Step" text={d.action} />
          <Section label="Reflection" text={d.reflection} />
        </GlassCard>
      </div>
      <Footer />
    </PageBackground>
  );
}

function Section({ label, text }) {
  return (
    <div>
      <h3 className="font-cinzel text-sm md:text-base font-semibold text-amber-400 mb-1">{label}</h3>
      <p className="font-inter text-sm md:text-base text-amber-100/90 leading-relaxed">{text}</p>
    </div>
  );
}