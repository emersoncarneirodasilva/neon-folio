interface NeonsAndLightsProps {
  hour: number;
}

export default function NeonsAndLights({ hour }: NeonsAndLightsProps) {
  // Opcional: Desativa ou diminui os glows intensos durante o dia claro (entre 5h e 18h)
  const isDaytime = hour >= 5 && hour < 18;
  if (isDaytime) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
      {/* 1. GLOW ROSA (TUBO ESQUERDA) */}
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

      {/* 2. GLOW VERDE (TUDO DIREITA) */}
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

      {/* 3. GLOW AZUL (ESQUERDA) */}
      <div
        className="neon-layer bg-blue-500/60 blur-[15px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "35%",
          left: "14.2%",
          width: "1.7%",
          height: "2.8%",
        }}
      />

      {/* 4. GLOW AMARELO (ESQUERDA) */}
      <div
        className="neon-layer bg-yellow-600/80 blur-[7px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "41%",
          left: "18.35%",
          width: "0.5%",
          height: "7%",
        }}
      />

      {/* 5. GLOW ROXO (DIREITA) */}
      <div
        className="neon-layer bg-purple-400/60 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "46%",
          left: "84.5%",
          width: "2.6%",
          height: "7.5%",
        }}
      />

      {/* LETREIRO (DIREITA) */}
      <div
        className="neon-layer bg-white/60 blur-[15px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "40.4%",
          left: "80.5%",
          width: "0.7%",
          height: "3%",
        }}
      />

      <div
        className="neon-layer bg-red-600/85 blur-[6px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "39%",
          left: "80.5%",
          width: "0.8%",
          height: "1.7%",
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
