import { useState } from "react";
import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";
import { ChevronDown, ChevronUp } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/2d1305f21_prayer-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/487c8f3d4_prayer-mobile.png";

const PRAYERS = [
  {
    title: "Prayer for Bold Faith",
    text: "Father, I come before You today and I ask You to increase my faith. I choose to believe Your Word above my circumstances. Where doubt has crept in, replace it with unshakeable trust. Help me to walk by faith and not by sight. I declare that nothing is impossible with You. Strengthen my belief, anchor my hope, and let my faith rise to meet every challenge I face. I will not waver. I will not shrink back. I stand on the rock of Your promises. In Jesus' mighty name, amen."
  },
  {
    title: "Prayer for Peace",
    text: "Lord, I bring every anxious thought to You right now. I lay down worry, fear, and stress at Your feet. You said Your peace would guard my heart and mind, and I receive it now. Let Your supernatural peace flood my mind, calm my spirit, and settle my heart. I will not be shaken because You are my foundation. I trust You with what I cannot control. Let the peace that passes all understanding be my portion today and every day. In Jesus' name, amen."
  },
  {
    title: "Prayer for Healing",
    text: "Heavenly Father, You are Jehovah Rapha, the Lord who heals. I come to You believing that healing belongs to me through the finished work of Jesus. By His stripes I am healed. I speak healing over my body, my mind, my emotions, and my spirit. Touch every area of pain, sickness, and brokenness. Restore what the enemy has stolen. I receive wholeness in the name of Jesus. I thank You that You are faithful to Your Word and that healing is flowing through me right now. Amen."
  },
  {
    title: "Prayer for Family",
    text: "Father, I lift my family before You. Cover each one with the blood of Jesus. Heal every wound, restore every relationship, and bring unity where there is division. Protect my household from the schemes of the enemy. Let Your love, peace, and truth be the foundation of our home. I declare that as for me and my house, we will serve the Lord. Draw each family member closer to You and to one another. In Jesus' name, amen."
  },
  {
    title: "Prayer for Provision",
    text: "Lord, You are my Provider. I trust You to supply every need according to Your riches in glory. Open doors of blessing and provision that no one can shut. Give me wisdom to steward well and generosity to sow into Your Kingdom. Remove every spirit of lack and replace it with the abundance of Heaven. I will not worry about tomorrow because You hold my future. Thank You for being faithful. In Jesus' name, amen."
  },
  {
    title: "Prayer for Direction",
    text: "Father, I need Your guidance. I don't know which way to go, but my eyes are on You. Speak to me clearly through Your Word, through the Holy Spirit, and through godly counsel. Open the right doors and close the wrong ones. Give me wisdom to discern Your voice from every other voice. I trust Your plan even when I can't see the full picture. Order my steps and lead me in the path of righteousness. In Jesus' name, amen."
  },
  {
    title: "Prayer for Spiritual Warfare",
    text: "Father, I put on the full armor of God. I stand against every principality, power, and ruler of darkness that comes against me. I plead the blood of Jesus over my life, my family, my mind, and my calling. Every assignment of the enemy is cancelled in Jesus' name. I take authority over every spirit of fear, confusion, and deception. The enemy is under my feet. I walk in the victory of the cross. In Jesus' mighty name, amen."
  },
  {
    title: "Prayer for Identity",
    text: "Lord, help me to see myself the way You see me. I am not defined by my past, my failures, or what others say. I am defined by what You say. I am chosen, redeemed, loved, and set apart. Remove every lie that has taken root in my mind and replace it with Your truth. I am fearfully and wonderfully made. I am a child of the King. I walk in my true identity in Christ. In Jesus' name, amen."
  },
  {
    title: "Prayer for Breakthrough",
    text: "Father, I cry out for breakthrough. I have been standing, praying, and believing, and I know You are faithful. Break every chain that has held me back. Tear down every wall the enemy has built. Open every door that leads to Your purpose for my life. I refuse to give up. I refuse to quit. I will stand until I see the victory. You are the God who breaks through. Do it again, Lord. In Jesus' name, amen."
  },
  {
    title: "Prayer for Purpose",
    text: "Lord, reveal my purpose. I know You created me on purpose and for a purpose. Show me the good works You prepared for me to walk in. Give me clarity, vision, and courage. Remove every distraction and every detour that keeps me from fulfilling my assignment. I want to live a life that matters for eternity. Use me for Your glory. Let my life be a testimony of Your faithfulness. In Jesus' name, amen."
  },
];

export default function PrayerAltar() {
  const [open, setOpen] = useState(null);

  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader title="Prayer Altar" subtitle="Bring the battle before the Lord and pray with faith." />

        <div className="max-w-3xl w-full space-y-3">
          {PRAYERS.map((p, i) => (
            <GlassCard key={p.title} className="overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer relative z-10"
              >
                <span className="font-cinzel text-base md:text-lg font-semibold text-amber-300">{p.title}</span>
                {open === i ? (
                  <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-5 relative z-10">
                  <div className="border-t border-amber-500/20 pt-4" />
                  <p className="font-inter text-sm md:text-base text-amber-100/90 leading-relaxed">{p.text}</p>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}