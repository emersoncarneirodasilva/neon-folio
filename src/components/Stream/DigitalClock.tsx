import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setShowColon((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="absolute z-30 font-mono text-cyan-400/90 tracking-widest text-[6px] md:text-[10px] bg-black/80 flex items-center justify-center tabular-nums">
      <span>{hours}</span>
      <span className={showColon ? "opacity-100" : "opacity-0"}>:</span>
      <span>{minutes}</span>
    </div>
  );
}
