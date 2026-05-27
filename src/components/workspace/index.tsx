import bgWorkspaceSunrise from "../../assets/workspace-image/bg-workspace-sunrise.webp";
import bgWorkspaceDay from "../../assets/workspace-image/bg-workspace-day.webp";
import bgWorkspaceSunset from "../../assets/workspace-image/bg-workspace-sunset.webp";
import bgWorkspaceNight from "../../assets/workspace-image/bg-workspace-night.webp";
import cityInDay from "../../assets/workspace-image/city-in-window-day.webp";
import cityInSunrise from "../../assets/workspace-image/city-in-window-sunrise.webp";
import cityInSunset from "../../assets/workspace-image/city-in-window-sunset.webp";
import cityInNight from "../../assets/workspace-image/city-in-window-night.webp";
import { AeroLayer } from "../Hero/AeroLayer";
import Sky from "../Hero/Sky";
import Clouds from "../Hero/Clouds";
import Rain from "../Hero/Rain";
import NeonBuildingLightsCityWindow from "./NeonBuildingLightsCityWindow";
import EditorInterface from "./EditorInterface";
import { RetroTerminal } from "./RetroTerminal";

interface WorkspaceProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

// 1. Configuração centralizada fora do componente
const THEME_CONFIG = {
  sunrise: { workspace: bgWorkspaceSunrise, city: cityInSunrise },
  day: { workspace: bgWorkspaceDay, city: cityInDay },
  sunset: { workspace: bgWorkspaceSunset, city: cityInSunset },
  night: { workspace: bgWorkspaceNight, city: cityInNight },
};

export default function Workspace({
  hour,
  isRaining,
  rainIntensity,
}: WorkspaceProps) {
  // 2. Função única para decidir o tema
  const getTheme = () => {
    if (hour >= 5 && hour < 7) return THEME_CONFIG.sunrise;
    if (hour >= 7 && hour < 16) return THEME_CONFIG.day;
    if (hour >= 16 && hour < 18) return THEME_CONFIG.sunset;
    return THEME_CONFIG.night;
  };

  // 3. Extração dos valores (aqui estão as variáveis 'workspace' e 'city' que você deve usar abaixo)
  const { workspace, city } = getTheme();

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-[#05050d] flex flex-col items-center justify-start"
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

      <div className="relative w-full max-w-480 aspect-video flex items-center justify-center z-3">
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <Sky
            hour={hour}
            isRaining={isRaining}
            rainIntensity={rainIntensity}
          />
          <AeroLayer hour={hour} />
          <Clouds hour={hour} isRaining={isRaining} />

          {/* Cidade Dinâmica: usando a variável 'city' */}
          <img
            src={city}
            alt="Cityscape"
            className="absolute bottom-0 left-0 w-full object-cover z-10 pointer-events-none transition-opacity duration-1000 ease-in-out"
            style={{ imageRendering: "pixelated" }}
          />

          {isRaining && <Rain intensity={rainIntensity} />}
        </div>

        {/* Quarto Dinâmico: usando a variável 'workspace' */}
        <img
          src={workspace}
          alt="Workspace Background"
          className="relative w-full h-full object-cover select-none pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{ zIndex: 1 }}
        />

        {/* Container do Monitor do Laptop */}
        <div
          className="absolute bg-transparent transition-all"
          style={{
            top: "11%",
            left: "21.2%",
            width: "57.7%",
            height: "62%",
            zIndex: 2,
          }}
        >
          <EditorInterface />
        </div>

        {/* Container do Mini Monitor */}
        <div
          className="absolute overflow-hidden rounded-2xl"
          style={{
            top: "60.4%",
            left: "85.7%",
            width: "11.6%",
            height: "13.2%",
            zIndex: 3,
            perspective: "500px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: "rotateY(-5deg) skewY(1.3deg)",
              transformOrigin: "center",
              background: "black",
            }}
          >
            <RetroTerminal />
          </div>
        </div>

        <NeonBuildingLightsCityWindow hour={hour} />
      </div>
    </section>
  );
}
