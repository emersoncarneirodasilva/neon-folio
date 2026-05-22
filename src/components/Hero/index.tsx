import bgHeroSunrise from "../../assets/bg-hero-sunrise.webp";
import bgHeroDay from "../../assets/bg-hero-day.webp";
import bgHeroSunset from "../../assets/bg-hero-sunset.webp";
import bgHeroNight from "../../assets/bg-hero-night.webp";
import Billboard from "./Billboard";
import Rain from "./Rain";
import Sky from "./Sky";
import Clouds from "./Clouds";
import { AeroLayer } from "./AeroLayer";
import { AeronauticalSignalingLight } from "./AeronauticalSignalingLight";
import NeonBuildingLights from "./NeonBuildingLights";

interface HeroProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

export default function Hero({ hour, isRaining, rainIntensity }: HeroProps) {
  let bgHero = bgHeroNight;

  if (hour >= 5 && hour < 7) {
    bgHero = bgHeroSunrise;
  } else if (hour >= 7 && hour < 16) {
    bgHero = bgHeroDay;
  } else if (hour >= 16 && hour < 18) {
    bgHero = bgHeroSunset;
  } else {
    bgHero = bgHeroNight;
  }

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center bg-black">
      <div className="relative w-full h-auto max-w-480 bg-black overflow-hidden">
        {/* Camadas ambientais absolutas de fundo */}
        <div className="absolute inset-0 pointer-events-none">
          <Sky
            hour={hour}
            isRaining={isRaining}
            rainIntensity={rainIntensity}
          />
          <AeroLayer hour={hour} />
          <Clouds hour={hour} isRaining={isRaining} />
        </div>

        {/* 🎯 SOLUÇÃO DO CORTE: Usamos max-[970px]:min-w-[970px] */}
        {/* Isto obriga o contêiner de elementos críticos a travar a sua largura em 970px assim que a tela baixar desse valor */}
        <div className="relative max-[970px]:min-w-242.5 w-full h-auto flex items-end">
          <img
            src={bgHero}
            alt="Cyberpunk Rooftop City"
            className="w-full h-auto block pointer-events-none select-none relative z-10"
            style={{ imageRendering: "pixelated" }}
          />

          <NeonBuildingLights hour={hour} />
          <AeronauticalSignalingLight hour={hour} />
          <Billboard />
        </div>

        {/* Clima de Chuva */}
        {isRaining && <Rain intensity={rainIntensity} />}
      </div>
    </section>
  );
}
