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
        className="neon-layer bg-blue-500/60 blur-[15px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "15.8%",
          top: "35.4%",
          width: "1.2%",
          height: "9%",
        }}
      />

      <div
        className="neon-layer bg-blue-500/60 blur-[15px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          left: "12.9%",
          top: "43.8%",
          width: "3.5%",
          height: "3.5%",
        }}
      />

      {/* 2. GLOW VERDE */}
      <div
        className="neon-layer bg-green-400/50 blur-[15px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          animationDuration: "5s",
          borderRadius: "0%",
          left: "16%",
          top: "28.5%",
          width: "4%",
          height: "5.5%",
        }}
      />

      {/* 3. GLOW VERMELHO */}
      <div
        className="neon-layer bg-red-600/40 blur-[10px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "83.4%",
          top: "37%",
          width: "1.2%",
          height: "6.6%",
        }}
      />

      {/* 4. GLOW ROSA (TUBO ESQUERDO) */}
      <div
        className="neon-layer bg-pink-500/50 blur-[10px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "40%",
          left: "1.75%",
          top: "1%",
          width: "3%",
          height: "55%",
        }}
      />

      {/* 5. GLOW VERDE (TUDO DIREITO) */}
      <div
        className="neon-layer bg-green-400/60 blur-[25px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          animationDuration: "5s",
          borderRadius: "40%",
          left: "95.3%",
          top: "1%",
          width: "3%",
          height: "55%",
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
