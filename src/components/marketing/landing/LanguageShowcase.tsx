"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Check, Volume2 } from "lucide-react";

/** One lesson card, seven languages. Rotates on its own until the visitor picks one. */
const LANGS = [
  {
    id: "en",
    name: "English",
    title: "How plants make food",
    body: "Plants make their own food using sunlight, water and carbon dioxide. This is called photosynthesis.",
    q: "What do plants need to make food?",
    a: "Sunlight, water and carbon dioxide",
  },
  {
    id: "hi",
    name: "हिन्दी",
    title: "पौधे भोजन कैसे बनाते हैं",
    body: "पौधे सूरज की रोशनी, पानी और कार्बन डाइऑक्साइड से अपना भोजन खुद बनाते हैं। इसे प्रकाश संश्लेषण कहते हैं।",
    q: "भोजन बनाने के लिए पौधों को क्या चाहिए?",
    a: "सूरज की रोशनी, पानी और कार्बन डाइऑक्साइड",
  },
  {
    id: "kn",
    name: "ಕನ್ನಡ",
    title: "ಸಸ್ಯಗಳು ಆಹಾರ ತಯಾರಿಸುವುದು ಹೇಗೆ",
    body: "ಸಸ್ಯಗಳು ಸೂರ್ಯನ ಬೆಳಕು, ನೀರು ಮತ್ತು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಬಳಸಿ ತಮ್ಮ ಆಹಾರವನ್ನು ತಾವೇ ತಯಾರಿಸುತ್ತವೆ. ಇದನ್ನು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ಎನ್ನುತ್ತಾರೆ.",
    q: "ಆಹಾರ ತಯಾರಿಸಲು ಸಸ್ಯಗಳಿಗೆ ಏನು ಬೇಕು?",
    a: "ಸೂರ್ಯನ ಬೆಳಕು, ನೀರು ಮತ್ತು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್",
  },
  {
    id: "ta",
    name: "தமிழ்",
    title: "தாவரங்கள் உணவு தயாரிப்பது எப்படி",
    body: "தாவரங்கள் சூரிய ஒளி, நீர் மற்றும் கார்பன் டை ஆக்சைடைப் பயன்படுத்தித் தங்கள் உணவைத் தாமே தயாரிக்கின்றன. இதுவே ஒளிச்சேர்க்கை.",
    q: "உணவு தயாரிக்கத் தாவரங்களுக்கு என்ன தேவை?",
    a: "சூரிய ஒளி, நீர், கார்பன் டை ஆக்சைடு",
  },
  {
    id: "te",
    name: "తెలుగు",
    title: "మొక్కలు ఆహారాన్ని ఎలా తయారు చేస్తాయి",
    body: "మొక్కలు సూర్యరశ్మి, నీరు, కార్బన్ డై ఆక్సైడ్‌లను ఉపయోగించి తమ ఆహారాన్ని తామే తయారు చేసుకుంటాయి. దీనినే కిరణజన్య సంయోగక్రియ అంటారు.",
    q: "ఆహారం తయారు చేయడానికి మొక్కలకు ఏమి కావాలి?",
    a: "సూర్యరశ్మి, నీరు, కార్బన్ డై ఆక్సైడ్",
  },
  {
    id: "mr",
    name: "मराठी",
    title: "वनस्पती अन्न कसे तयार करतात",
    body: "वनस्पती सूर्यप्रकाश, पाणी आणि कार्बन डायऑक्साइड वापरून स्वतःचे अन्न स्वतः तयार करतात. यालाच प्रकाशसंश्लेषण म्हणतात.",
    q: "अन्न तयार करण्यासाठी वनस्पतींना काय लागते?",
    a: "सूर्यप्रकाश, पाणी आणि कार्बन डायऑक्साइड",
  },
  {
    id: "bn",
    name: "বাংলা",
    title: "উদ্ভিদ কীভাবে খাদ্য তৈরি করে",
    body: "উদ্ভিদ সূর্যের আলো, জল আর কার্বন ডাই-অক্সাইড ব্যবহার করে নিজের খাদ্য নিজেই তৈরি করে। একেই সালোকসংশ্লেষ বলে।",
    q: "খাদ্য তৈরি করতে উদ্ভিদের কী লাগে?",
    a: "সূর্যের আলো, জল আর কার্বন ডাই-অক্সাইড",
  },
];

export function LanguageShowcase() {
  const [i, setI] = useState(1);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setI((x) => (x + 1) % LANGS.length), 2600);
    return () => clearInterval(timer);
  }, [auto]);
  const l = LANGS[i];
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Language">
        {LANGS.map((x, k) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={k === i}
            onClick={() => {
              setAuto(false);
              setI(k);
            }}
            className={clsx("rounded-full border-2 px-3.5 py-1.5 text-sm font-bold transition", k === i ? "border-accent bg-accent text-white" : "border-line bg-surface text-ink hover:border-accent/40")}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="mt-5 overflow-hidden rounded-3xl border-2 border-line bg-surface shadow-lift" lang={l.id} aria-live="polite">
        <div className="flex items-center gap-3 border-b-2 border-line bg-good-soft px-5 py-3">
          <span className="text-2xl" aria-hidden>
            🌱
          </span>
          <p className="min-w-0 flex-1 truncate text-lg font-black text-ink">{l.title}</p>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-good shadow-soft" aria-hidden>
            <Volume2 className="h-5 w-5" />
          </span>
        </div>
        <div className="space-y-4 p-5">
          <p className="min-h-[3.5rem] text-[17px] font-semibold leading-7 text-ink">{l.body}</p>
          <div className="rounded-2xl border-2 border-line p-4">
            <p className="font-bold text-ink">{l.q}</p>
            <p className="mt-3 flex items-center gap-2 rounded-xl border-2 border-good bg-good-soft px-3 py-2 font-bold text-good-shade">
              <Check className="h-4 w-4 shrink-0" strokeWidth={3} /> {l.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
