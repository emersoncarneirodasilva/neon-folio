import { useState, useEffect } from "react";
import bgUplinkNight from "../../assets/uplink-image/bg-uplink-night.webp";
import Rain from "../Rain";

interface UplinkProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

export default function Uplink({
  hour,
  isRaining,
  rainIntensity,
}: UplinkProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#05050d] flex flex-col items-center justify-start"
      style={{ isolation: "isolate" }}
    >
      <div className="w-full h-[12vw] max-h-55 min-h-15 bg-[#05050d] shrink-0" />

      <div
        className="absolute left-0 w-full h-[4vw] max-h-20 min-h-7.5 pointer-events-none z-50"
        style={{
          top: "12vw",
          background:
            "linear-gradient(to bottom, #05050d 0%, transparent 100%)",
        }}
      />
      <div className="relative w-full max-w-480 aspect-video flex items-center justify-center">
        {/* Camada de Background */}
        <img
          src={bgUplinkNight}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10"
        />

        {/* Camada de Chuva (Ativada pelo state isRaining) */}
        {isRaining && (
          <div className="absolute inset-0 z-5 pointer-events-none">
            <Rain intensity={rainIntensity} />
          </div>
        )}

        {/* Container do Terminal */}
        <div
          className="absolute z-10 flex items-center justify-center"
          style={{
            top: isMobile ? "20%" : "22%",
            left: isMobile ? "10%" : "25%",
            width: isMobile ? "80%" : "50%",
            height: isMobile ? "50%" : "55%",
            transform: "perspective(1000px) rotateX(2deg)",
          }}
        >
          <div className="w-full h-full border border-cyan-500/30 bg-black/70 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-cyan-400 font-mono">
            <h2 className="text-3xl mb-6 tracking-widest text-shadow-glow">
              SYSTEM_UPLINK
            </h2>
            <div className="flex flex-col gap-4 w-full max-w-75">
              <button className="border border-cyan-700 p-3 hover:bg-cyan-900/40 transition-all">
                _CONNECT
              </button>
              <button className="border border-cyan-700 p-3 hover:bg-cyan-900/40 transition-all">
                _EXPORT_DATA {hour}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
