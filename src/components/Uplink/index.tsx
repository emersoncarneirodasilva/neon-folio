import { useState, useEffect } from "react";

import { getTimePeriod, UPLINK_THEME } from "../../utils/themeUtils";

import { AeroLayer } from "../AeroLayer";
import Sky from "../Sky";
import Clouds from "../Clouds";
import Rain from "../Rain";
import TerminalDisplay from "./TerminalDisplay";
import NeonsAndLights from "./NeonsAndLights";
import { AeronauticalSignalingLight } from "./AeronauticalSignalingLight";

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

  const period = getTimePeriod(hour);
  const theme = UPLINK_THEME[period];

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
            className="absolute bottom-0 left-0 z-10 w-full h-full object-cover select-none pointer-events-none"
            style={{ imageRendering: "pixelated" }}
            alt="City view"
          />
          {isRaining && <Rain intensity={rainIntensity} />}
        </div>

        <img
          src={bgImg}
          className="relative z-10 w-full h-full object-cover select-none pointer-events-none"
          alt="Uplink Background"
        />

        <div
          className="absolute z-20 flex items-center justify-center rounded-xl"
          style={{
            top: isMobile ? "47.2%" : "47.2%",
            left: isMobile ? "16.5%" : "39.5%",
            width: isMobile ? "73.4%" : "34.1%",
            height: isMobile ? "33.5%" : "33.5%",
            perspectiveOrigin: "50% 0%",
            transformOrigin: "top center",
            transform:
              "perspective(1000px) rotateX(15deg) rotateY(-5deg) skewX(-5.7deg) skewY(1.6deg)",
          }}
        >
          <TerminalDisplay />
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
