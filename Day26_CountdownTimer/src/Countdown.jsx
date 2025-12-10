import React, { useEffect, useState } from "react";

export default function Countdown() {
  const defaultTarget = new Date("2026-01-01T00:00:00");

  const [targetDate, setTargetDate] = useState(defaultTarget);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(defaultTarget));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeLeft(target) {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  return (
    <div className="bg-white/90 backdrop-blur-lg shadow-xl border border-white/40 rounded-3xl p-8 w-full max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Countdown Timer ⏳
      </h1>

      <div className="mb-6 flex flex-col items-center">
        <label className="font-medium text-gray-700 mb-1">
          Choose Target Date:
        </label>
        <input
          type="datetime-local"
          onChange={(e) => {
            const val = e.target.value;
            if (val) setTargetDate(new Date(val));
          }}
          className="border p-2 rounded-lg text-gray-700 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>

      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && (
          <p className="text-center mt-4 text-xl font-semibold text-green-600">
            🎉 Time is up!
          </p>
        )}
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="bg-white shadow-inner rounded-xl p-4 border border-gray-200">
      <div className="text-3xl font-bold text-gray-800">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-gray-500 text-sm mt-1">{label}</div>
    </div>
  );
}
