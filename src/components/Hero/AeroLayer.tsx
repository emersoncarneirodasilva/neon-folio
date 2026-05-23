import React, { useState, useCallback, useRef, useEffect } from "react";

import whiteAirplaneImg from "../../assets/home-image/white-airplane.webp";
import whiteAirplane02Img from "../../assets/home-image/white-airplane-02.webp";
import grayAirplaneImg from "../../assets/home-image/gray-airplane.webp";
import helicopterImg from "../../assets/home-image/helicopter.webp";
import alienShipImg from "../../assets/home-image/alien-ship.webp";

interface AeroLayerProps {
  hour: number;
}

export const AeroLayer: React.FC<AeroLayerProps> = ({ hour }) => {
  const isNight = hour < 5 || hour >= 19;
  const hourRef = useRef(hour);
  hourRef.current = hour;

  // 💡 Nova Ref para controlar o timer de calmaria entre voos
  const delayTimerRef = useRef<number | null>(null);

  const generateRoute = useCallback(() => {
    const currentHour = hourRef.current;
    const isAlienHour = currentHour >= 3 && currentHour < 4;
    const goesRight = Math.random() > 0.5;
    const isNear = Math.random() > 0.6;

    const normalVehicles = [
      whiteAirplaneImg,
      whiteAirplane02Img,
      grayAirplaneImg,
      helicopterImg,
    ];

    let selectedImg =
      normalVehicles[Math.floor(Math.random() * normalVehicles.length)];

    if (isAlienHour && Math.random() > 0.7) selectedImg = alienShipImg;

    const isHeli = selectedImg === helicopterImg;
    const isAlien = selectedImg === alienShipImg;

    return {
      id: Math.random().toString(36).substr(2, 9),
      img: selectedImg,
      isHeli,
      isAlien,
      direction: goesRight ? "ltr" : "rtl",
      /* 💡 Mudamos para % para respeitar a sua div responsiva max-w-480 */
      startX: goesRight ? "-15%" : "115%",
      endX: goesRight ? "115%" : "-15%",
      top: isAlien ? "15%" : `${10 + Math.random() * 25}%`,
      speed: isAlien ? 12 : isHeli ? (isNear ? 25 : 40) : isNear ? 18 : 30, // Calibrada na velocidade
      scale: isNear ? 0.5 : 0.3,
      opacity: isNear ? 1 : 0.6,
      isVisible: true, // 💡 Controla se o veículo deve aparecer ou se estamos em tempo de calmaria
    };
  }, []);

  const [route, setRoute] = useState(generateRoute);

  // 💡 Função reestruturada para dar uma pausa elegante entre os voos
  const nextFlight = useCallback(() => {
    // Primeiro, esconde o avião atual que acabou de pousar
    setRoute((prev) => ({ ...prev, isVisible: false }));

    if (delayTimerRef.current) clearTimeout(delayTimerRef.current);

    // 🎲 Sorteia uma calmaria entre 45 segundos e 2 minutos para o céu respirar
    const cooldown = Math.floor(Math.random() * (120000 - 45000 + 1)) + 45000;

    delayTimerRef.current = setTimeout(() => {
      setRoute(generateRoute());
    }, cooldown);
  }, [generateRoute]);

  // Limpa o timer caso o componente seja desmontado
  useEffect(() => {
    return () => {
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 3 }}
    >
      {/* 💡 Estilos CSS fixos e limpos, sem injeção dinâmica de ltr/rtl por strings */}
      <style>{`
        @keyframes fly-right { from { left: -15%; } to { left: 115%; } }
        @keyframes fly-left { from { left: 115%; } to { left: -15%; } }
        
        .aero-container {
          position: absolute;
          will-change: left;
        }
        .strobe-fast { animation: strobe-blink 1.2s steps(1, end) infinite; }
        @keyframes strobe-blink { 0%, 80% { opacity: 0; } 90% { opacity: 1; } }

        @keyframes alien-rainbow {
          0%, 100% { background-color: #ff0000; box-shadow: 0 0 8px #ff0000; }
          33% { background-color: #00ff00; box-shadow: 0 0 8px #00ff00; }
          66% { background-color: #0000ff; box-shadow: 0 0 8px #0000ff; }
        }
        .alien-light { animation: alien-rainbow 0.6s linear infinite; }
      `}</style>

      {route.isVisible && (
        <div
          key={route.id}
          className="aero-container"
          onAnimationEnd={nextFlight}
          style={{
            top: route.top,
            opacity: route.opacity,
            transform: `scale(${route.scale})`,
            /* 💡 Aplica a animação correta baseada na direção sorteada */
            animation: `${route.direction === "ltr" ? "fly-right" : "fly-left"} ${route.speed}s linear forwards`,
          }}
        >
          <div className="relative flex items-center justify-center">
            <img
              src={route.img}
              alt="air-vehicle"
              style={{
                width: "50px",
                imageRendering: "pixelated",
                transform: route.direction === "rtl" ? "scaleX(-1)" : "none",
                filter: !isNight
                  ? "none"
                  : route.isAlien
                    ? "brightness(0.7) contrast(1.2)"
                    : "brightness(0.1) saturate(0) contrast(1.5)",
              }}
            />

            {isNight && (
              <div className="absolute inset-0 w-full h-full flex items-end justify-center gap-2 pb-1">
                {route.isAlien ? (
                  <>
                    <div className="alien-light w-1.5 h-1.5 rounded-full" />
                    <div
                      className="alien-light w-1.5 h-1.5 rounded-full"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="alien-light w-1.5 h-1.5 rounded-full"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0">
                    <div
                      className="strobe-fast absolute w-1 h-1 bg-white shadow-[0_0_4px_white]"
                      style={{
                        left: route.direction === "ltr" ? "0px" : "45px",
                        top: route.isHeli ? "40%" : "50%",
                      }}
                    />
                    <div
                      className="absolute w-0.5 h-0.5 bg-red-600 shadow-[0_0_3px_red]"
                      style={{
                        right: route.direction === "ltr" ? "15px" : "auto",
                        left: route.direction === "rtl" ? "15px" : "auto",
                        top: "60%",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
