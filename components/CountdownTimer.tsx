'use client';

import { useEffect, useState } from 'react';

const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getEndTime = () => {
      const stored = localStorage.getItem('countdown-end-time');
      if (stored) {
        const endTime = parseInt(stored, 10);
        if (endTime > Date.now()) {
          return endTime;
        }
      }
      const newEndTime = Date.now() + TWENTY_FOUR_HOURS;
      localStorage.setItem('countdown-end-time', newEndTime.toString());
      return newEndTime;
    };

    const calculateTimeLeft = () => {
      const endTime = getEndTime();
      const difference = endTime - Date.now();

      if (difference <= 0) {
        const newEndTime = Date.now() + TWENTY_FOUR_HOURS;
        localStorage.setItem('countdown-end-time', newEndTime.toString());
        return calculateTimeLeft();
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 min-w-[80px] transform hover:scale-105 transition-transform">
      <div className="text-4xl md:text-5xl font-bold text-primary-600 tabular-nums">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="text-center mb-6">
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          ⏰ Esta oferta termina en:
        </p>
        <p className="text-sm md:text-base text-gray-600">
          No pierdas esta oportunidad única
        </p>
      </div>
      <div className="flex justify-center gap-3 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Días" />
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <TimeBlock value={timeLeft.minutes} label="Minutos" />
        <TimeBlock value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
}
