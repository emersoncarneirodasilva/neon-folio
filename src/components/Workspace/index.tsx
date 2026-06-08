import { useState, useEffect } from "react";
import type { WorkspaceProps } from "../../types";
import { getTimePeriod, WORKSPACE_THEME } from "../../utils/themeUtils";

import EditorInterface from "./EditorInterface";
import { RetroTerminal } from "./RetroTerminal";

import { AeroLayer } from "../AeroLayer";
import Sky from "../Sky";
import Clouds from "../Clouds";
import Rain from "../Rain";
import NeonsAndLights from "./NeonsAndLights";
import { AeronauticalSignalingLight } from "./AeronauticalSignalingLight";

export default function Workspace({
  hour,
  isRaining,
  rainIntensity,
}: WorkspaceProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const period = getTimePeriod(hour);
  const theme = WORKSPACE_THEME[period];
  // Se for mobile e existir versão cortada, usa ela, senão usa a normal
  const workspaceImg = isMobile && theme.bgCut ? theme.bgCut : theme.bg;

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

      <div className="relative w-full max-w-480 aspect-video flex items-center justify-center z-3">
        {/* Camadas Ambientais */}
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
          <img
            src={theme.city}
            alt="Cityscape"
            className="absolute bottom-0 left-0 w-full object-cover z-10 pointer-events-none transition-opacity duration-1000"
            style={{ imageRendering: "pixelated" }}
          />
          {isRaining && <Rain intensity={rainIntensity} />}
        </div>

        {/* Workspace Background */}
        <img
          src={workspaceImg}
          alt="Workspace Background"
          className="relative w-full h-full object-cover select-none pointer-events-none transition-opacity duration-1000"
          style={{ zIndex: 1 }}
        />

        {/* Laptop Monitor */}
        <div
          className="absolute bg-transparent transition-all duration-300"
          style={{
            top: isMobile ? "10.8%" : "10.8%",
            left: isMobile ? "7%" : "21.2%",
            width: isMobile ? "85.7%" : "57.7%",
            height: isMobile ? "62%" : "62.15%",
            zIndex: 2,
          }}
        >
          <EditorInterface />
        </div>

        {/* Mini Monitor */}
        <div
          className="hidden md:block absolute overflow-hidden rounded-2xl transition-all duration-300"
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
