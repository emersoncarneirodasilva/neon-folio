import { AeroLayer } from "../AeroLayer";
import Sky from "../Sky";
import Clouds from "../Clouds";
import Rain from "../Rain";

// Importações dos seus temas de sala
import bgStreamSunrise from "../../assets/stream-image/bg-stream-night.webp";
import bgStreamDay from "../../assets/stream-image/bg-stream-night.webp";
import bgStreamSunset from "../../assets/stream-image/bg-stream-night.webp";
import bgStreamNight from "../../assets/stream-image/bg-stream-night.webp";

import cityInDay from "../../assets/workspace-image/city-in-window-day.webp";
import cityInSunrise from "../../assets/workspace-image/city-in-window-sunrise.webp";
import cityInSunset from "../../assets/workspace-image/city-in-window-sunset.webp";
import cityInNight from "../../assets/workspace-image/city-in-window-night.webp";

interface StreamProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

const THEME_CONFIG = {
  sunrise: { bg: bgStreamSunrise, city: cityInSunrise },
  day: { bg: bgStreamDay, city: cityInDay },
  sunset: { bg: bgStreamSunset, city: cityInSunset },
  night: { bg: bgStreamNight, city: cityInNight },
};

export default function Stream({
  hour,
  isRaining,
  rainIntensity,
}: StreamProps) {
  const getTheme = () => {
    if (hour >= 5 && hour < 7) return THEME_CONFIG.sunrise;
    if (hour >= 7 && hour < 16) return THEME_CONFIG.day;
    if (hour >= 16 && hour < 18) return THEME_CONFIG.sunset;
    return THEME_CONFIG.night;
  };

  const { bg, city } = getTheme();

  return (
    <section
      className="relative w-full overflow-hidden bg-[#05050d] flex flex-col items-center justify-start"
      style={{ isolation: "isolate" }}
    >
      {/* 🌫️ ESPAÇAMENTO E EFEITO ESFUMAÇADO (Igual ao Workspace) */}
      <div className="w-full h-[12vw] max-h-55 min-h-15 bg-[#05050d] shrink-0" />
      <div
        className="absolute left-0 w-full h-[4vw] max-h-20 min-h-7.5 pointer-events-none z-50"
        style={{
          top: "12vw",
          background:
            "linear-gradient(to bottom, #05050d 0%, transparent 100%)",
        }}
      />

      {/* Container "Mestre" (A mesma lógica de trava do Workspace) */}
      <div className="relative w-full max-w-480 aspect-video flex items-center justify-center">
        {/* 1. Camada Ambiental */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Sky
            hour={hour}
            isRaining={isRaining}
            rainIntensity={rainIntensity}
          />
          <AeroLayer hour={hour} />
          <Clouds hour={hour} isRaining={isRaining} />
          <img
            src={city}
            className="absolute bottom-0 left-0 w-full z-10 object-cover transition-opacity duration-1000"
            style={{ imageRendering: "pixelated" }}
          />
          {isRaining && <Rain intensity={rainIntensity} />}
        </div>

        {/* 2. Camada da Sala */}
        <img
          src={bg}
          alt="Sala Cyberpunk"
          className="relative z-1 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-1000"
        />

        {/* 3. Container da TV (Ancorado com as suas coordenadas originais) */}
        <div
          className="absolute z-2 overflow-hidden bg-black/85 backdrop-blur-[2px] border border-cyan-900/50"
          style={{
            top: "16.5%",
            left: "18.2%",
            width: "57.7%",
            height: "45.5%",
          }}
        >
          <div className="w-full h-full p-[4%] flex flex-col items-start justify-center text-cyan-400">
            <h2 className="text-[2.5vw] font-bold tracking-widest uppercase mb-[3%] text-glow">
              Catálogo de Projetos
            </h2>
            {/* O conteúdo do seu carrossel aqui */}
          </div>

          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
