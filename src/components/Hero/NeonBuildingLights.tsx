interface NeonBuildingLightsProps {
  hour: number;
}

export default function NeonBuildingLights({ hour }: NeonBuildingLightsProps) {
  // Opcional: Desativa ou diminui os glows intensos durante o dia claro (entre 5h e 18h)
  const isDaytime = hour >= 5 && hour < 18;
  if (isDaytime) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
      {/* 1. GLOW ROSA */}
      <div
        className="neon-layer bg-pink-500/50 blur-[30px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          left: "42.6%",
          top: "35.2%",
          width: "4%",
          height: "14%",
        }}
      />

      <div
        className="neon-layer bg-pink-500/50 blur-[30px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          left: "79%",
          top: "32%",
          width: "3.5%",
          height: "6.5%",
        }}
      />

      <div
        className="neon-layer bg-pink-500/50 blur-[30px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          left: "95.2%",
          top: "38%",
          width: "3.5%",
          height: "4%",
        }}
      />

      {/* 2. GLOW ROXO */}
      <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          left: "70.6%",
          top: "39.5%",
          width: "2.5%",
          height: "8%",
        }}
      />

      <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          left: "67.6%",
          top: "48%",
          width: "5.5%",
          height: "5%",
        }}
      />

      <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "84.5%",
          top: "31%",
          width: "4%",
          height: "17%",
        }}
      />

      <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "92.4%",
          top: "55%",
          width: "1.5%",
          height: "8.5%",
        }}
      />

      {/* 3. GLOW CIANO */}
      <div
        className="neon-layer bg-cyan-400/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          animationDuration: "4s",
          borderRadius: "0%",
          left: "42.4%",
          top: "46%",
          width: "1%",
          height: "8.5%",
        }}
      />

      <div
        className="neon-layer bg-cyan-400/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          animationDuration: "4s",
          borderRadius: "50%",
          left: "50.5%",
          top: "28%",
          width: "2%",
          height: "6%",
        }}
      />

      <div
        className="neon-layer bg-cyan-400/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          animationDuration: "4s",
          borderRadius: "50%",
          left: "59.8%",
          top: "34.7%",
          width: "4%",
          height: "18%",
        }}
      />

      <div
        className="neon-layer bg-cyan-400/50 blur-[20px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          animationDuration: "4s",
          borderRadius: "0%",
          left: "77.9%",
          top: "45%",
          width: "4%",
          height: "5.5%",
        }}
      />

      <div
        className="neon-layer bg-cyan-400/60 blur-[20px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          animationDuration: "4s",
          borderRadius: "0%",
          left: "85.1%",
          top: "53%",
          width: "4.5%",
          height: "4.5%",
        }}
      />

      {/* 4. GLOW AZUL */}
      <div
        className="neon-layer bg-blue-500/60 blur-[15px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          left: "50.45%",
          top: "50%",
          width: "1.5%",
          height: "4.5%",
        }}
      />

      <div
        className="neon-layer bg-blue-500/50 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "52.6%",
          top: "45.2%",
          width: "2.5%",
          height: "3%",
        }}
      />

      <div
        className="neon-layer bg-blue-500/50 blur-[30px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          left: "46.5%",
          top: "56%",
          width: "5%",
          height: "5%",
        }}
      />

      <div
        className="neon-layer bg-blue-500/50 blur-[30px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          left: "72%",
          top: "56.2%",
          width: "6%",
          height: "6%",
        }}
      />

      {/* 5. GLOW VERMELHO */}
      <div
        className="neon-layer bg-red-600/30 blur-[25px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          left: "49.5%",
          top: "29%",
          width: "1.2%",
          height: "5%",
          borderRadius: "50%",
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
