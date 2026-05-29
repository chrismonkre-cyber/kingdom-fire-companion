import { useState } from "react";
import PageBackground from "../components/PageBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";
import { ChevronDown, ChevronUp } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f1ac06129_choose-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/1068d3450_choose-mobile.png";

const BATTLES = [
  {
    title: "Fear / Anxiety",
    scripture: "\"For God has not given us a spirit of fear, but of power and of love and of a sound mind.\" — 2 Timothy 1:7",
    encouragement: "Fear is a liar. The enemy wants to paralyze you, but God has given you authority. You are not alone. The Spirit of the living God is in you and He is greater than anything you face.",
    prayer: "Father, I rebuke every spirit of fear and anxiety in Jesus' name. Fill me with Your peace, Your power, and a sound mind. I trust You with my today and my tomorrow. Amen.",
    declaration: "I am not afraid. God has given me power, love, and a sound mind. Fear must bow to the name of Jesus.",
    action: "Name the fear out loud and then speak the opposite truth from Scripture over it."
  },
  {
    title: "Healing",
    scripture: "\"He sent His word and healed them, and delivered them from their destructions.\" — Psalm 107:20",
    encouragement: "God is your Healer. He has not changed. The same God who healed in Scripture is healing today. Believe, receive, and stand on His Word.",
    prayer: "Lord, I speak healing over every part of my body, soul, and spirit. By the stripes of Jesus I am healed. I receive wholeness in Your name. Amen.",
    declaration: "By the stripes of Jesus, I am healed. Sickness and disease have no place in my body. I am whole in Christ.",
    action: "Lay hands on yourself and pray healing Scriptures out loud over the area of need."
  },
  {
    title: "Family",
    scripture: "\"As for me and my house, we will serve the Lord.\" — Joshua 24:15",
    encouragement: "God cares about your family. He is the God who restores, reconciles, and redeems. Keep praying. Keep believing. Keep standing.",
    prayer: "Father, I cover my family with the blood of Jesus. Restore what is broken. Heal what is wounded. Unite us in love and purpose. In Jesus' name, amen.",
    declaration: "My family is covered by the blood of Jesus. We will serve the Lord. Restoration and unity are at work in my household.",
    action: "Pray over each family member by name today. Speak God's promises over their lives."
  },
  {
    title: "Finances",
    scripture: "\"And my God shall supply all your need according to His riches in glory by Christ Jesus.\" — Philippians 4:19",
    encouragement: "God is your provider. He owns the cattle on a thousand hills. He will not let you lack. Trust Him, steward well, and watch Him move.",
    prayer: "Lord, I trust You as my provider. Open doors of provision, remove financial burdens, and teach me to steward well. In Jesus' name, amen.",
    declaration: "My God supplies all my needs. I am blessed to be a blessing. Provision flows into my life because God is faithful.",
    action: "Write down your financial need and place it before God in prayer. Then take one wise stewardship step today."
  },
  {
    title: "Grief",
    scripture: "\"The Lord is close to the brokenhearted and saves those who are crushed in spirit.\" — Psalm 34:18",
    encouragement: "God sees your tears. He collects every one. Grief is not the end of your story. He is the God of comfort and He is near you right now.",
    prayer: "Father, hold me in my grief. Comfort me with Your presence. Heal my broken heart and remind me that joy will come again. In Jesus' name, amen.",
    declaration: "The Lord is near to my broken heart. He is my comfort and my hope. Weeping may endure for a night, but joy is coming in the morning.",
    action: "Allow yourself to feel, but also speak hope over yourself today. Write down one moment of gratitude."
  },
  {
    title: "Direction",
    scripture: "\"Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths.\" — Proverbs 3:5-6",
    encouragement: "You don't need to have it all figured out. God is directing your steps. Stay close to Him, stay in His Word, and He will make the path clear.",
    prayer: "Lord, I need Your direction. Speak clearly to me. Open the right doors and close the wrong ones. I trust Your leading. In Jesus' name, amen.",
    declaration: "My steps are ordered by the Lord. I hear His voice and I follow Him. He is directing my path.",
    action: "Be still for 10 minutes. Ask God one specific question and write down what comes to mind."
  },
  {
    title: "Spiritual Warfare",
    scripture: "\"For we do not wrestle against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this age.\" — Ephesians 6:12",
    encouragement: "You are in a battle, but the victory is already won. Put on the full armor of God. Stand firm. The enemy is defeated and has no authority over you.",
    prayer: "Father, I put on the full armor of God. I stand against every scheme of the enemy. I plead the blood of Jesus over my life, my family, and my calling. In Jesus' name, amen.",
    declaration: "I am dressed in the full armor of God. The enemy is defeated. I stand firm in the victory of Christ.",
    action: "Read Ephesians 6:10-18 and pray each piece of the armor over yourself."
  },
  {
    title: "Identity in Christ",
    scripture: "\"Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.\" — 2 Corinthians 5:17",
    encouragement: "You are not what the world says you are. You are who God says you are: chosen, loved, redeemed, called, and set apart for His glory.",
    prayer: "Lord, help me see myself the way You see me. I am a new creation in Christ. Remove every lie and replace it with Your truth. In Jesus' name, amen.",
    declaration: "I am a new creation in Christ. I am chosen, loved, and set apart. The old has gone. The new has come.",
    action: "Write down 3 identity statements from Scripture and speak them over yourself today."
  },
  {
    title: "Breakthrough",
    scripture: "\"The Lord will fight for you; you need only to be still.\" — Exodus 14:14",
    encouragement: "Breakthrough is not about your effort. It is about God's power. Keep standing. Keep praying. Keep believing. The walls are coming down.",
    prayer: "Father, I need breakthrough. Break every chain. Remove every obstacle. Make a way where there is no way. I trust You. In Jesus' name, amen.",
    declaration: "I am a breakthrough believer. No weapon formed against me shall prosper. My God makes a way where there is no way.",
    action: "Write down your breakthrough need and declare God's promise over it 3 times today."
  },
  {
    title: "Peace",
    scripture: "\"Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God.\" — Philippians 4:6",
    encouragement: "Peace is not the absence of trouble. It is the presence of God in the middle of trouble. He is your peace. Rest in Him.",
    prayer: "Lord, I give You every anxious thought. Replace my worry with worship. Let Your peace fill my heart and mind. In Jesus' name, amen.",
    declaration: "I am at peace. The peace of God guards my heart and mind. I will not be shaken.",
    action: "List 3 things you are grateful for and thank God for them before addressing your worries."
  },
  {
    title: "Purpose",
    scripture: "\"For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them.\" — Ephesians 2:10",
    encouragement: "You were created on purpose and for a purpose. God has good works prepared for you. Keep seeking, keep serving, and watch your calling unfold.",
    prayer: "Father, reveal my purpose. Show me the good works You prepared for me. Give me clarity and courage to walk in my calling. In Jesus' name, amen.",
    declaration: "I have Kingdom purpose. God created me for good works. I will walk in them boldly and faithfully.",
    action: "Ask yourself: 'What breaks my heart and what lights me up?' Those are clues to your calling."
  },
  {
    title: "Faith",
    scripture: "\"Without faith it is impossible to please God, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him.\" — Hebrews 11:6",
    encouragement: "Faith moves mountains. It opens doors. It defeats the enemy. Today, let your faith rise. God is pleased when you trust Him.",
    prayer: "Lord, increase my faith. Help me to trust You in every situation. I believe. Help my unbelief. In Jesus' name, amen.",
    declaration: "My faith is strong in the Lord. I believe God's Word above my circumstances. Nothing is impossible with God.",
    action: "Recall a time when God came through for you. Use that testimony as fuel for today's faith."
  },
];

export default function Choose() {
  const [open, setOpen] = useState(null);

  return (
    <PageBackground desktopImage={DESKTOP} mobileImage={MOBILE}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        <PageHeader title="Choose What You're Facing" subtitle="Select your battle. Receive Scripture, prayer, declaration, and an action step." />

        <div className="max-w-3xl w-full space-y-3">
          {BATTLES.map((b, i) => (
            <GlassCard key={b.title} className="overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer relative z-10"
              >
                <span className="font-cinzel text-base md:text-lg font-semibold text-amber-300">{b.title}</span>
                {open === i ? (
                  <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-5 space-y-4 relative z-10">
                  <div className="border-t border-amber-500/20 pt-4" />
                  <BattleSection label="Scripture" text={b.scripture} />
                  <BattleSection label="Encouragement" text={b.encouragement} />
                  <BattleSection label="Prayer" text={b.prayer} />
                  <BattleSection label="Declaration" text={b.declaration} />
                  <BattleSection label="Action Step" text={b.action} />
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

function BattleSection({ label, text }) {
  return (
    <div>
      <h4 className="font-cinzel text-sm font-semibold text-amber-400 mb-1">{label}</h4>
      <p className="font-inter text-sm text-amber-100/90 leading-relaxed">{text}</p>
    </div>
  );
}