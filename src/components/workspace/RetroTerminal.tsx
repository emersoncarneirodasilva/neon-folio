import { useState, useEffect } from "react";

export const RetroTerminal = () => {
  const [data, setData] = useState({
    temp: 42,
    speed: 950,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        temp: Math.floor(Math.random() * (48 - 40 + 1) + 40),
        speed: Math.floor(Math.random() * (999 - 800 + 1) + 800),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#0d1f0d] border-2 border-[#1a3a1a] p-[4%] font-mono text-[#33ff33] flex flex-col justify-between shadow-[0_0_10px_rgba(51,255,51,0.2)]">
      <div
        className="space-y-[2%]"
        style={{ fontSize: "clamp(6px, 0.75vw, 12px)" }}
      >
        <div>CODE: Natal_RN_18</div>
        <div>UPLINK: {data.speed}Mbps</div>
        <div>CORE_TEMP: {data.temp}°C</div>
        <div>
          IT: NEON_SYS
          {/* Cursor acelerado com 'step-end' */}
          <span
            className="inline-block animate-pulse ml-1"
            style={{
              animationDuration: "0.75s",
              animationTimingFunction: "step-end",
            }}
          >
            _
          </span>
        </div>
      </div>

      {/* Barra de scan acelerada */}
      <div className="mt-[4%] h-[20%] border border-[#33ff33]/30 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[#33ff33]/10"
          style={{
            animation: "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        <div
          className="absolute bottom-0 w-full h-[10%] bg-[#33ff33]"
          style={{ animation: "bounce 0.6s infinite" }}
        />
      </div>

      <div
        className="mt-[2%] truncate"
        style={{ fontSize: "clamp(5px, 0.6vw, 10px)" }}
      >
        LOC: SEETOR_CYBER
      </div>
    </div>
  );
};
