import { useState, useEffect } from "react";

import { PROJECTS_DATA } from "../../utils/projects";
import { getTimePeriod, STREAM_THEME } from "../../utils/themeUtils";

import { AeroLayer } from "../AeroLayer";
import Sky from "../Sky";
import Clouds from "../Clouds";
import Rain from "../Rain";
import ProjectSidebar from "./ProjectSidebar";
import ProjectDisplay from "./ProjectDisplay";
import DigitalClock from "./DigitalClock";
import NeonsAndLights from "./NeonsAndLights";
import { AeronauticalSignalingLight } from "./AeronauticalSignalingLight";

interface StreamProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

export default function Stream({
  hour,
  isRaining,
  rainIntensity,
}: StreamProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const activeProject =
    PROJECTS_DATA.find((p) => p.id === activeId) || PROJECTS_DATA[0];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const period = getTimePeriod(hour);
  const theme = STREAM_THEME[period];
  const bgImg = isMobile && theme.bgCut ? theme.bgCut : theme.bg;

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
            className="absolute bottom-0 left-0 w-full z-10 object-cover"
            style={{ imageRendering: "pixelated" }}
          />
          {isRaining && <Rain intensity={rainIntensity} />}
        </div>
        <img
          src={bgImg}
          className="relative z-1 w-full h-full object-cover select-none pointer-events-none"
        />

        <div
          className="absolute z-2 flex overflow-hidden bg-black/85 backdrop-blur-[2px] border border-cyan-900/50"
          style={{
            top: isMobile ? "16.7%" : "16.5%",
            left: isMobile ? "5%" : "18.2%",
            width: isMobile ? "89.5%" : "57.7%",
            height: isMobile ? "45%" : "45.5%",
          }}
        >
          <div
            className={`h-full transition-all duration-500 ease-in-out overflow-hidden ${
              isFullscreen
                ? "w-0 opacity-0"
                : "w-[30%] min-[425px]:w-[20.5%] opacity-100"
            }`}
          >
            <div className="w-full h-full">
              <ProjectSidebar
                projects={PROJECTS_DATA}
                onSelect={(id) => {
                  setActiveId(id);
                  setIsOverlayVisible(false);
                }}
                activeId={activeId}
              />
            </div>
          </div>

          <ProjectDisplay
            activeProject={activeProject}
            isFullscreen={isFullscreen}
            setIsFullscreen={setIsFullscreen}
            isOverlayVisible={isOverlayVisible}
            setIsOverlayVisible={setIsOverlayVisible}
          />
        </div>

        <div
          className={`absolute z-30 ${isMobile ? "top-[71.6%] left-[18.6%]" : "top-[71.6%] left-[27.5%]"}`}
        >
          <DigitalClock />
        </div>

        {!isMobile && (
          <>
            <NeonsAndLights hour={hour} />
            <AeronauticalSignalingLight hour={hour} />
          </>
        )}
      </div>
    </section>
  );
}
