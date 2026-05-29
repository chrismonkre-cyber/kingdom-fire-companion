import { useState } from "react";
import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a273ebd31_declarations-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/953b2eba9_declarations-mobile.png";

const CATEGORIES = {
  Healing: [
    "By the stripes of Jesus, I am healed. Sickness and disease have no place in my body.",
    "I speak life over every cell, every organ, and every system in my body. I am whole in Christ.",
    "The same Spirit that raised Jesus from the dead lives in me and gives life to my mortal body.",
    "I reject every diagnosis that contradicts God's Word. His report says I am healed.",
    "Healing flows through me because the Healer lives in me. I receive it fully today."
  ],
  Peace: [
    "The peace of God that passes all understanding guards my heart and mind in Christ Jesus.",
    "I will not be anxious. I cast every care on the Lord because He cares for me.",
    "I am still and I know that He is God. His peace rules in my heart today.",
    "No storm can shake me because my foundation is the Prince of Peace.",
    "I release every worry and receive the supernatural peace of Heaven right now."
  ],
  Provision: [
    "My God supplies all my needs according to His riches in glory by Christ Jesus.",
    "I am blessed to be a blessing. Provision flows into my life because God is faithful.",
    "The Lord is my Shepherd. I shall not want. He leads me to green pastures.",
    "Every door of provision that God has ordained for me is opening now in Jesus' name.",
    "I am a faithful steward and God multiplies what I place in His hands."
  ],
  "Family Restoration": [
    "My family is covered by the blood of Jesus. We will serve the Lord.",
    "I declare restoration over every broken relationship in my family in Jesus' name.",
    "God is healing my home. Unity, love, and peace are being restored.",
    "Every generational curse is broken over my family. We walk in the blessings of God.",
    "My children are taught by the Lord and great is their peace."
  ],
  "Spiritual Warfare": [
    "I am dressed in the full armor of God. No weapon formed against me shall prosper.",
    "The blood of Jesus covers me. The enemy has no access to my life, my family, or my calling.",
    "I stand on the Word of God and the enemy must flee. Greater is He that is in me.",
    "Every assignment of darkness against me is cancelled and reversed in Jesus' name.",
    "I have authority over all the power of the enemy. I tread on serpents and scorpions."
  ],
  Identity: [
    "I am a child of God, chosen and dearly loved. My identity is in Christ alone.",
    "I am a new creation. The old has passed away. Behold, all things are new.",
    "I am fearfully and wonderfully made. God's works are wonderful and my soul knows it well.",
    "I am the righteousness of God in Christ Jesus. I walk in His identity, not my own.",
    "I am who God says I am. No label, no lie, no accusation changes my Kingdom identity."
  ],
  Purpose: [
    "I have Kingdom purpose. God created me for good works and I will walk in them.",
    "My life has meaning. God has a plan for me and it is good.",
    "I was born for this season. I will fulfill my assignment and leave a legacy of faith.",
    "God's purpose for my life will not be derailed. What He started, He will finish.",
    "I am anointed and appointed for this moment. I walk boldly in my calling."
  ],
  Breakthrough: [
    "I am a breakthrough believer. Walls are falling and chains are breaking in Jesus' name.",
    "My God makes a way where there is no way. Breakthrough is my portion.",
    "Every door that the enemy has shut is being forced open by the power of God.",
    "I will not settle for less than what God has promised. I press through to breakthrough.",
    "The breakthrough I have been praying for is manifesting now. God is faithful."
  ],
  Faith: [
    "My faith is strong in the Lord. I believe His Word above my circumstances.",
    "I walk by faith and not by sight. God is working even when I cannot see it.",
    "Nothing is impossible with God. I believe and I will see His glory.",
    "I stand on the Word of God. Fear has no authority over my mind, my heart, or my future in Jesus' name.",
    "My faith moves mountains. I speak to obstacles and they must move."
  ],
  Strength: [
    "I can do all things through Christ who strengthens me.",
    "The joy of the Lord is my strength. I will not grow weary.",
    "God renews my strength. I mount up with wings like eagles.",
    "I am strong in the Lord and in the power of His might.",
    "When I am weak, He is strong. His grace is sufficient for me."
  ],
};

const CATEGORY_NAMES = Object.keys(CATEGORIES);

export default function Declarations() {
  const [active, setActive] = useState("Healing");

  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader title="Kingdom Declarations" subtitle="Speak the Word. Stand in faith. Let your mouth agree with Heaven." />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mb-8">
          {CATEGORY_NAMES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full font-inter text-xs md:text-sm font-medium transition-all border ${
                active === c
                  ? "bg-amber-500/30 text-amber-200 border-amber-400/50"
                  : "bg-red-950/30 text-amber-100/70 border-amber-500/20 hover:bg-red-900/40 hover:text-amber-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Declarations */}
        <div className="max-w-3xl w-full space-y-3">
          {CATEGORIES[active].map((d, i) => (
            <GlassCard key={i} className="p-5">
              <p className="font-inter text-sm md:text-base text-amber-100/90 leading-relaxed italic">
                "{d}"
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}