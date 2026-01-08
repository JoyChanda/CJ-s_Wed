"use client";
import { useState, useEffect } from "react";

export default function Countdown({ labels = { days: "Days", hours: "Hrs", minutes: "Min", seconds: "Sec" } }) {
  // Set wedding date: February 06, 2026 19:38:00
  const targetDate = new Date("2026-02-06T19:38:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-[var(--card)] border border-[var(--accent)]/30 rounded-xl shadow-lg min-w-[80px] sm:min-w-[100px]">
      <span className="text-3xl sm:text-4xl font-serif font-bold text-[var(--primary)]">{value}</span>
      <span className="text-xs sm:text-sm uppercase tracking-widest text-[var(--foreground)] opacity-70">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-4 justify-center items-center py-8">
      <TimeBlock value={timeLeft.days} label={labels.days} />
      <TimeBlock value={timeLeft.hours} label={labels.hours} />
      <TimeBlock value={timeLeft.minutes} label={labels.minutes} />
      <TimeBlock value={timeLeft.seconds} label={labels.seconds} />
    </div>
  );
}

