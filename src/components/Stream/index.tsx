import { useState, useEffect } from "react";
import { AeroLayer } from "../AeroLayer";
import Sky from "../Sky";
import Clouds from "../Clouds";
import Rain from "../Rain";

import bgStreamSunrise from "../../assets/stream-image/bg-stream-sunrise.webp";
import bgStreamDay from "../../assets/stream-image/bg-stream-day.webp";
import bgStreamSunset from "../../assets/stream-image/bg-stream-night.webp";
import bgStreamNight from "../../assets/stream-image/bg-stream-night.webp";
import bgStreamSunriseCut from "../../assets/stream-image/bg-stream-sunrise-cut.webp";
import bgStreamDayCut from "../../assets/stream-image/bg-stream-day-cut.webp";
import bgStreamNightCut from "../../assets/stream-image/bg-stream-night-cut.webp";

import cityInDay from "../../assets/workspace-image/city-in-window-day.webp";
import cityInSunrise from "../../assets/workspace-image/city-in-window-sunrise.webp";
import cityInSunset from "../../assets/workspace-image/city-in-window-sunset.webp";
import cityInNight from "../../assets/workspace-image/city-in-window-night.webp";

interface StreamProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

// Interface para suportar a versão Cut
interface Theme {
  bg: string;
  bgCut?: string;
  city: string;
}

const THEME_CONFIG: Record<string, Theme> = {
  sunrise: {
    bg: bgStreamSunrise,
    bgCut: bgStreamSunriseCut,
    city: cityInSunrise,
  },
  day: { bg: bgStreamDay, bgCut: bgStreamDayCut, city: cityInDay },
  sunset: { bg: bgStreamSunset, city: cityInSunset },
  night: { bg: bgStreamNight, bgCut: bgStreamNightCut, city: cityInNight },
};

export default function Stream({
  hour,
  isRaining,
  rainIntensity,
}: StreamProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTheme = () => {
    let theme = THEME_CONFIG.night;
    if (hour >= 5 && hour < 7) theme = THEME_CONFIG.sunrise;
    else if (hour >= 7 && hour < 16) theme = THEME_CONFIG.day;
    else if (hour >= 16 && hour < 18) theme = THEME_CONFIG.sunset;

    return theme;
  };

  const theme = getTheme();
  const bgImg = isMobile && theme.bgCut ? theme.bgCut : theme.bg;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#05050d] flex flex-col items-center justify-start"
      style={{ isolation: "isolate" }}
    >
      <div className="w-full h-[12vw] max-h-55 min-h-15 bg-[#05050d] shrink-0" />

      <div className="relative w-full max-w-480 aspect-video flex items-center justify-center">
        {/* Camada Ambiental */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Sky
            hour={hour}
            isRaining={isRaining}
            rainIntensity={rainIntensity}
          />
          <AeroLayer hour={hour} />
          <Clouds hour={hour} isRaining={isRaining} />
          <img
            src={theme.city}
            className="absolute bottom-0 left-0 w-full z-10 object-cover transition-opacity duration-1000"
            style={{ imageRendering: "pixelated" }}
          />
          {isRaining && <Rain intensity={rainIntensity} />}
        </div>

        {/* Camada da Sala (Dinâmica) */}
        <img
          src={bgImg}
          alt="Sala Cyberpunk"
          className="relative z-1 w-full h-full object-cover select-none pointer-events-none transition-all duration-1000"
        />

        {/* Container da TV (Ajuste dinâmico se necessário) */}
        <div
          className="absolute z-2 overflow-hidden bg-black/85 backdrop-blur-[2px] border border-cyan-900/50 transition-all duration-300"
          style={{
            top: isMobile ? "16.7%" : "16.5%",
            left: isMobile ? "5%" : "18.2%",
            width: isMobile ? "89.5%" : "57.7%",
            height: isMobile ? "45%" : "45.5%",
          }}
        >
          <div className="w-full h-full p-[4%] flex flex-col items-center justify-center">
            <h2 className="text-[2.5vw] text-cyan-400 font-bold tracking-widest uppercase mb-[3%] text-glow">
              Catálogo de Projetos
            </h2>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
