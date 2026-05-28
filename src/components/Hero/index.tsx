import { useState, useEffect } from "react";

import bgHeroSunrise from "../../assets/home-image/bg-hero-sunrise.webp";
import bgHeroDay from "../../assets/home-image/bg-hero-day.webp";
import bgHeroSunset from "../../assets/home-image/bg-hero-sunset.webp";
import bgHeroNight from "../../assets/home-image/bg-hero-night.webp";
import bgHeroSunriseCut from "../../assets/home-image/bg-hero-sunrise-cut.webp";
import bgHeroDayCut from "../../assets/home-image/bg-hero-day-cut.webp";
import bgHeroNightCut from "../../assets/home-image/bg-hero-night-cut.webp";
import bgHeroSunsetCut from "../../assets/home-image/bg-hero-sunset-cut.webp";

import { AeroLayer } from "../AeroLayer";
import Sky from "../Sky";
import Clouds from "../Clouds";
import Rain from "../Rain";
import Billboard from "./Billboard";
import { AeronauticalSignalingLight } from "./AeronauticalSignalingLight";
import { AeronauticalSignalingLightCut } from "./AeronauticalSignalingLightCut";
import NeonBuildingLights from "./NeonBuildingLights";

interface HeroProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

export default function Hero({ hour, isRaining, rainIntensity }: HeroProps) {
  const [isUltraMobile, setIsUltraMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsUltraMobile(window.innerWidth < 425);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBgHero = () => {
    if (isUltraMobile) {
      if (hour >= 5 && hour < 7) return bgHeroSunriseCut;
      if (hour >= 7 && hour < 16) return bgHeroDayCut;
      if (hour >= 16 && hour < 18) return bgHeroSunsetCut;
      return bgHeroNightCut;
    }

    if (hour >= 5 && hour < 7) return bgHeroSunrise;
    if (hour >= 7 && hour < 16) return bgHeroDay;
    if (hour >= 16 && hour < 18) return bgHeroSunset;
    return bgHeroNight;
  };

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center bg-black">
      <div className="relative w-full h-auto max-w-480 bg-black overflow-hidden">
        {/* A trava agora usa a sintaxe correta com colchetes para valores customizados */}
        <div className="relative w-full h-auto flex items-end max-[425px]:min-w-0 max-[970px]:min-w-242.5">
          <div className="absolute inset-0 pointer-events-none">
            <Sky
              hour={hour}
              isRaining={isRaining}
              rainIntensity={rainIntensity}
            />
            <AeroLayer hour={hour} />
            <Clouds hour={hour} isRaining={isRaining} />
          </div>

          <img
            src={getBgHero()}
            alt="Cyberpunk Rooftop City"
            className="w-full h-auto block pointer-events-none select-none relative z-10"
            style={{ imageRendering: "pixelated" }}
          />

          {!isUltraMobile ? (
            <>
              <NeonBuildingLights hour={hour} />
              <AeronauticalSignalingLight hour={hour} />
            </>
          ) : (
            <AeronauticalSignalingLightCut hour={hour} />
          )}

          <Billboard isMobile={isUltraMobile} />
        </div>

        {isRaining && <Rain intensity={rainIntensity} />}
      </div>
    </section>
  );
}
