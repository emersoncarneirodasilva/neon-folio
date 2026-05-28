import React, { useMemo } from "react";

interface AeronauticalSignalingLightCutProps {
  hour: number;
}

export const AeronauticalSignalingLightCut: React.FC<
  AeronauticalSignalingLightCutProps
> = ({ hour }) => {
  const signalingPoints = [
    { top: "5.5%", left: "61.3%", delay: "0s", type: "fixed" },
    { top: "5.5%", left: "63.5%", delay: "0s", type: "fixed" },
    { top: "9%", left: "92.8%", delay: "0s", type: "fixed" },
  ];

  const globalOpacity = useMemo(() => {
    if (hour > 17.5 && hour < 19.5) return (hour - 17.5) / 2;
    if (hour >= 19.5 || hour <= 4.5) return 1;
    if (hour > 4.5 && hour < 5) return 1 - (hour - 4.5);
    return 0;
  }, [hour]);

  if (globalOpacity === 0) return null;

  return (
    <>
      <style>{`
        @keyframes signaling-pulse {
          0%, 100% { opacity: 0.3; filter: blur(1.5px); }
          50% { opacity: 1; filter: blur(2.5px) brightness(1.8); }
        }
        @keyframes signaling-flicker {
          0%, 100%, 20%, 40%, 60%, 80%, 90%, 94%, 98% { opacity: 1; filter: blur(2px) brightness(1.5); }
          10%, 30%, 55%, 85%, 92%, 96% { opacity: 0.1; filter: blur(1px); }
        }
        .signaling-container {
          position: absolute;
          transform: translate(-50%, -50%);
          will-change: transform, opacity;
          z-index: 12;
        }
        .mode-pulse { animation: signaling-pulse 3s infinite ease-in-out; }
        .mode-flicker { animation: signaling-flicker 4s infinite; }
        .mode-fixed { opacity: 1; filter: blur(2px) brightness(1.6); }
      `}</style>

      {/* Renderiza as luzes acompanhando estritamente as proporções nativas da imagem */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-12">
        {signalingPoints.map((point, i) => (
          <div
            key={i}
            className="signaling-container flex items-center justify-center"
            style={{
              top: point.top,
              left: point.left,
              opacity: globalOpacity,
            }}
          >
            <div
              className={`absolute rounded-full bg-red-600 w-1.5 h-1.5 sm:w-2 sm:h-2 ${
                point.type === "pulse"
                  ? "mode-pulse"
                  : point.type === "flicker"
                    ? "mode-flicker"
                    : "mode-fixed"
              }`}
              style={{
                animationDelay:
                  point.type !== "fixed" ? point.delay : undefined,
                boxShadow:
                  point.type === "fixed" ? "0 0 6px 1px #ff0000" : undefined,
              }}
            />
            <div
              className={`absolute rounded-full bg-red-100 w-0.5 h-0.5 ${
                point.type === "pulse"
                  ? "mode-pulse"
                  : point.type === "flicker"
                    ? "mode-flicker"
                    : "mode-fixed"
              }`}
              style={{
                boxShadow: "0 0 4px 1.5px #ff0000",
                animationDelay:
                  point.type !== "fixed" ? point.delay : undefined,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
