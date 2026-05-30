interface NeonBuildingLightsCityWindowProps {
  hour: number;
}

export default function NeonBuildingLightsCityWindow({
  hour,
}: NeonBuildingLightsCityWindowProps) {
  // Opcional: Desativa ou diminui os glows intensos durante o dia claro (entre 5h e 18h)
  const isDaytime = hour >= 5 && hour < 18;
  if (isDaytime) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
      {/* 1. GLOW AZUL */}
      <div
        className="neon-layer bg-blue-500/40 blur-[20px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "10%",
          left: "0%",
          top: "58%",
          width: "3.2%",
          height: "7.5%",
        }}
      />

      {/* 2. GLOW ROXO */}
      <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "9.35%",
          top: "50.5%",
          width: "2.5%",
          height: "25%",
        }}
      />

      {/* 3. GLOW AMARELO */}
      <div
        className="neon-layer bg-yellow-400/40 blur-[10px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "40%",
          top: "5%",
          width: "15%",
          height: "1%",
        }}
      />

      {/* 4. GLOW VERMELHO */}
      <div
        className="neon-layer bg-red-600/40 blur-[10px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "83.4%",
          top: "46.5%",
          width: "1.2%",
          height: "6.6%",
        }}
      />

      {/* 5. GLOW VERDE */}
      <div
        className="neon-layer bg-green-400/40 blur-2xl animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          animationDuration: "5s",
          borderRadius: "40%",
          left: "83%",
          top: "60%",
          width: "9%",
          height: "9%",
        }}
      />

      {/* 6. GLOW ROSA */}
      <div
        className="neon-layer bg-pink-500/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "20%",
          left: "95.6%",
          top: "42.3%",
          width: "3%",
          height: "7.5%",
        }}
      />

      {/* 🛠️ ESTILOS ANIMADOS (Injetados localmente com escopo limpo) */}
      <style>{`
        .neon-layer {
          position: absolute;
          will-change: opacity, transform;
        }

        @keyframes neonPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.04); }
        }

        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.8; }
          20%, 24%, 55% { opacity: 0.2; }
        }

        @keyframes neonFlickerIntense {
          0%, 10%, 12%, 30%, 32%, 70%, 72%, 100% { opacity: 0.9; }
          11%, 31%, 71% { opacity: 0.1; }
        }

        .animate-neon-pulse { animation: neonPulse 6s infinite ease-in-out; }
        .animate-neon-flicker { animation: neonFlicker 5s infinite; }
        .animate-neon-flicker-intense { animation: neonFlickerIntense 1.2s infinite; }
      `}</style>
    </div>
  );
}
