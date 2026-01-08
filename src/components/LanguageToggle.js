"use client";

export default function LanguageToggle({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "bn" : "en")}
      className="fixed top-6 right-20 z-50 px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--navy-dark)] font-bold shadow-lg transition-all hover:scale-105 active:scale-95 border-2 border-[var(--primary)]/20"
      aria-label="Toggle Language"
    >
      {lang === "en" ? "বাংলা" : "English"}
    </button>
  );
}
