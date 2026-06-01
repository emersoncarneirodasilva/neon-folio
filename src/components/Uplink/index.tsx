import { useState, useEffect } from "react";

// Imports das imagens de fundo (Cenário do Uplink)
import bgUplinkSunrise from "../../assets/uplink-image/bg-uplink-sunrise.webp";
import bgUplinkDay from "../../assets/uplink-image/bg-uplink-day.webp";
import bgUplinkSunset from "../../assets/uplink-image/bg-uplink-sunset.webp";
import bgUplinkNight from "../../assets/uplink-image/bg-uplink-night.webp";

// Imports das imagens da cidade
import cityInDay from "../../assets/workspace-image/city-in-window-day.webp";
import cityInSunrise from "../../assets/workspace-image/city-in-window-sunrise.webp";
import cityInSunset from "../../assets/workspace-image/city-in-window-sunset.webp";
import cityInNight from "../../assets/workspace-image/city-in-window-night.webp";

// Importação dos componentes de ambientação
import { AeroLayer } from "../AeroLayer";
import Sky from "../Sky";
import Clouds from "../Clouds";
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

  const getTheme = () => {
    if (hour >= 5 && hour < 7)
      return {
        bg: bgUplinkSunrise,
        bgCut: bgUplinkSunrise,
        city: cityInSunrise,
      };
    if (hour >= 7 && hour < 16)
      return { bg: bgUplinkDay, bgCut: bgUplinkDay, city: cityInDay };
    if (hour >= 16 && hour < 18)
      return { bg: bgUplinkSunset, bgCut: bgUplinkSunset, city: cityInSunset };
    return { bg: bgUplinkNight, bgCut: bgUplinkNight, city: cityInNight };
  };

  const theme = getTheme();
  const bgImg = isMobile ? theme.bgCut : theme.bg;

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
        {/* 1. Camada de Fundo (Céu, Nuvens, Aeronaves e Cidade - Z-index 0) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Sky
            hour={hour}
            isRaining={isRaining}
            rainIntensity={rainIntensity}
          />
          <AeroLayer hour={hour} />
          <Clouds hour={hour} isRaining={isRaining} />
          <img
            src={theme.city}
            className="absolute bottom-0 left-0 w-full h-full object-cover select-none pointer-events-none"
            style={{ imageRendering: "pixelated" }}
            alt="City view"
          />
          {isRaining && <Rain intensity={rainIntensity} />}
        </div>

        {/* 2. Camada da Imagem Principal (Cafeteria/Mesa - Z-index 10) */}
        <img
          src={bgImg}
          className="relative z-10 w-full h-full object-cover select-none pointer-events-none"
          alt="Uplink Background"
        />

        {/* 3. Container do Terminal (Interface - Z-index 20) */}
        <div
          className="absolute z-20 flex items-center justify-center rounded-xl"
          style={{
            top: isMobile ? "20%" : "47.2%",
            left: isMobile ? "10%" : "39.5%",
            width: isMobile ? "20%" : "34.1%",
            height: isMobile ? "20%" : "33.5%",
            perspectiveOrigin: "50% 0%",
            transformOrigin: "top center",
            transform:
              "perspective(1000px) rotateX(15deg) rotateY(-5deg) skewX(-5.7deg) skewY(1.6deg)",
          }}
        >
          <div className="w-full h-full rounded-xl bg-black/70 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-cyan-400 font-mono">
            <h2 className="text-3xl mb-6 tracking-widest text-shadow-glow">
              SYSTEM_UPLINK
            </h2>
            <div className="flex flex-col gap-4 w-full max-w-75">
              <button className="border border-cyan-700 p-3 hover:bg-cyan-900/40 transition-all">
                _CONNECT
              </button>
              <button className="border border-cyan-700 p-3 hover:bg-cyan-900/40 transition-all">
                {hour.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
