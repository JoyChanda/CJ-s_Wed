"use client";
import { useState } from "react";
import Image from "next/image";
import { Container, Card, Button } from "@/components/ui";
import Countdown from "@/components/Countdown";
import Separator from "@/components/Separator";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const translations = {
  en: {
    subtitle: "Wedding Invitation",
    couple: "Chaity & Joy",
    date: "February 06, 2026",
    days: "Days", hours: "Hrs", minutes: "Min", seconds: "Sec",
    bengaliDate: "23, Magh, 1432 Bengali",
    tithi: "Krishna Paksha, Panchami",
    time: "Friday, 07:38 p.m. onwards",
    shubhoLagna: "Auspicious Wedding Time (Shubho Lagna): 8:32 PM",
    weddingFeast: "Wedding Feast: 9:01 PM",
    mantraTitle: "Divine Mantra",
    mantra: "Om Namaskaram. May the divine light guide our path as we embark on this sacred journey of togetherness.",
    blessing: "VEDIC BLESSINGS",
    ceremony: "The Ceremony",
    venue: "Zinnurine Convention Center",
    venueSub: "East Nasirabad, Bayazid Bostami Rd, Chattogram",
    timings: "Event Timings",
    ctaMaps: "Google Maps",
    presence: "Your Presence is Extremely Important to Us",
    footerMsg: "Designed with 🕉️ for a sacred union"
  },
  bn: {
    subtitle: "বিবাহের আমন্ত্রণ",
    couple: "চৈতি ও জয়",
    date: "০৬ ফেব্রুয়ারি ২০২৬",
    days: "দিন", hours: "ঘন্টা", minutes: "মিনিট", seconds: "সেকেন্ড",
    bengaliDate: "২৩ মাঘ, ১৪৩২ বঙ্গাব্দ",
    tithi: "কৃষ্ণপক্ষ, পঞ্চমী তিথি",
    time: "শুক্রবার, সন্ধ্যা ০৭:৩৮ মিনিট থেকে",
    shubhoLagna: "শুভ লগ্ন: রাত ০৮.৩২",
    weddingFeast: "প্রীতিভোজ: রাত ০৯.০১",
    mantraTitle: "মঙ্গল মন্ত্র",
    mantra: "ওঁ নমস্কারম। আমরা যখন এই পবিত্র যাত্রার সূচনা করছি, তখন ঐশ্বরিক আশীর্বাদ আমাদের পথ নির্দেশ করুক।",
    blessing: "বৈদিক আশীর্বাদ",
    ceremony: "বিবাহ অনুষ্ঠান",
    venue: "জিন্নুরাইন কনভেনশন সেন্টার",
    venueSub: "পূর্ব নাসিরাবাদ, বাইজিদ বোস্তামী রোড, চট্টগ্রাম",
    timings: "অনুষ্ঠানের সূচি",
    ctaMaps: "গুগল ম্যাপ",
    presence: "আপনার উপস্থিতি আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ",
    footerMsg: "পবিত্র মিলনের জন্য 🕉️ সহযোগে তৈরি"
  }
};

export default function InvitationPage() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className={`min-h-screen relative overflow-hidden ${lang === 'bn' ? 'font-bn' : ''}`}>
      <ThemeToggle />
      <LanguageToggle lang={lang} setLang={setLang} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center p-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Wedding Background"
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-[var(--background)]"></div>
        </div>

        <div className="relative z-10 space-y-6 max-w-4xl animate-fade-in px-4">
          <div className="inline-block px-4 py-1 border border-[var(--primary)] rounded-full text-[var(--primary)] text-sm font-semibold tracking-widest uppercase">
            {t.subtitle}
          </div>
          <h1 className={`text-6xl sm:text-9xl text-[var(--primary)] drop-shadow-sm flex flex-col sm:flex-row items-center justify-center gap-2 ${lang === 'en' ? 'font-serif' : 'font-bn font-bold'}`}>
            <span className="animate-fade-in-left">Chaity</span>
            <span className="text-4xl sm:text-7xl italic text-[var(--accent)] font-serif p-4 bg-[var(--primary)]/5 rounded-full border border-[var(--accent)]/10 mx-2 shadow-inner inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24">&</span>
            <span className="animate-fade-in-right">Joy</span>
          </h1>
          <div className="space-y-4 pt-4">
            <p className="text-2xl sm:text-3xl text-[var(--foreground)] font-serif italic opacity-90">
              {t.date}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base tracking-[0.1em] font-medium text-[var(--primary)] uppercase opacity-80 decoration-[var(--accent)] underline-offset-8">
              <span>{t.bengaliDate}</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span>{t.tithi}</span>
            </div>
            <p className="text-lg font-medium text-[var(--foreground)] opacity-70">
              {t.time}
            </p>
          </div>

          <div className="pt-8">
            <Countdown labels={t} />
          </div>
        </div>
      </section>

      <Separator />

      {/* Mantra Section */}
      <section className="py-20 bg-[var(--background)]">
        <Container className="text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-serif text-[var(--primary)] mb-8 uppercase tracking-[0.2em]">{t.mantraTitle}</h2>
            <div className="p-8 sm:p-14 bg-[var(--card)] rounded-[40px] border border-[var(--accent)]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-[var(--primary)]/20 rounded-tl-[40px]"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[var(--primary)]/20 rounded-br-[40px]"></div>
              
              <p className={`text-2xl sm:text-3xl text-[var(--foreground)] leading-relaxed italic ${lang === 'bn' ? 'font-bn' : 'font-serif'}`}>
                &ldquo;{t.mantra}&rdquo;
              </p>
              <p className="mt-8 text-[var(--primary)] font-semibold tracking-widest uppercase">
                — {t.blessing} —
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Separator />

      {/* Details Section */}
      <section className="py-20 px-4">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 sm:p-16 text-center space-y-10 hover:translate-y-[-8px] transition-transform duration-300 relative overflow-hidden">
              {/* Decorative background mandala hint */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl"></div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-serif text-[var(--primary)] uppercase tracking-widest">{t.ceremony}</h3>
                <div className="h-1 w-20 bg-[var(--accent)] mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6 text-center md:text-left md:border-r border-[var(--accent)]/20 md:pr-12">
                  <h4 className="text-2xl font-bold text-[var(--foreground)]">{t.venue}</h4>
                  <p className="text-[var(--foreground)] opacity-70 leading-relaxed text-lg">
                    {t.venueSub}
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/kLpKMzeRPZip1TNQ6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {t.ctaMaps}
                    </Button>
                  </a>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-serif text-[var(--primary)] uppercase tracking-[0.2em]">{t.timings}</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-[var(--background)]/50 rounded-2xl border border-[var(--accent)]/10">
                      <p className="text-[var(--foreground)] font-medium text-lg leading-relaxed">{t.shubhoLagna}</p>
                    </div>
                    <div className="p-4 bg-[var(--background)]/50 rounded-2xl border border-[var(--accent)]/10">
                      <p className="text-[var(--foreground)] font-medium text-lg leading-relaxed">{t.weddingFeast}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-20 text-center animate-pulse">
            <p className={`text-2xl sm:text-3xl text-[var(--primary)] font-serif italic ${lang === 'bn' ? 'font-bn' : ''}`}>
              &ldquo;{t.presence}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      <footer className="py-16 bg-[var(--navy-dark)] text-[var(--ivory)] text-center border-t border-[var(--gold)]/20">
        <p className={`font-serif italic text-2xl ${lang === 'bn' ? 'font-bn' : ''}`}>With Love, Chaity & Joy</p>
        <p className="mt-4 opacity-70 text-sm tracking-widest uppercase">{t.footerMsg}</p>
      </footer>
    </div>
  );
}
