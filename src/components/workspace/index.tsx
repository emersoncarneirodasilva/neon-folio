import bgWorkspace from "../../assets/workspace-image/bg-workspace.webp";
import cityInDay from "../../assets/workspace-image/city-in-window-day.webp";
import cityInSunrise from "../../assets/workspace-image/city-in-window-sunrise.webp";
import cityInSunset from "../../assets/workspace-image/city-in-window-sunset.webp";
import cityInNight from "../../assets/workspace-image/city-in-window-night.webp";
import { AeroLayer } from "../Hero/AeroLayer";
import Clouds from "../Hero/Clouds";
import Rain from "../Hero/Rain";
import Sky from "../Hero/Sky";
import NeonBuildingLightsCityWindow from "./NeonBuildingLightsCityWindow";

interface WorkspaceProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

export default function Workspace({
  hour,
  isRaining,
  rainIntensity,
}: WorkspaceProps) {
  // Lógica para selecionar a imagem da cidade conforme o horário
  const getCityImage = () => {
    if (hour >= 5 && hour < 7) return cityInSunrise;
    if (hour >= 7 && hour < 16) return cityInDay;
    if (hour >= 16 && hour < 18) return cityInSunset;
    return cityInNight;
  };

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

          {/* Cidade Dinâmica aplicada aqui */}
          <img
            src={getCityImage()}
            alt="Cityscape"
            className="absolute bottom-0 left-0 w-full object-cover z-10 pointer-events-none transition-opacity duration-1000"
            style={{ imageRendering: "pixelated" }}
          />

          {isRaining && <Rain intensity={rainIntensity} />}
        </div>

        <img
          src={bgWorkspace}
          alt="Workspace Background"
          className="relative w-full h-full object-cover select-none pointer-events-none"
          style={{ zIndex: 1 }}
        />

        <div
          className="absolute bg-transparent transition-all border border-dashed border-cyan-500/30 hover:border-cyan-400"
          style={{
            top: "8.5%",
            left: "20.1%",
            width: "59.8%",
            height: "67.8%",
            zIndex: 2,
          }}
        >
          <div className="w-full h-full p-[1.2vw] text-emerald-400 font-mono text-[max(11px,0.85vw)] overflow-hidden bg-black/40 backdrop-blur-[1px]">
            <p className="text-gray-500">// Ready to code...</p>
            <p className="text-cyan-400">const section = "Workspace";</p>
            <p className="text-purple-400">
              console.log(`Current Hour: {hour}`);
            </p>
          </div>
        </div>

        <NeonBuildingLightsCityWindow hour={hour} />
      </div>
    </section>
  );
}
