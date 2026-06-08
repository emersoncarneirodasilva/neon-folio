interface NeonsAndLightsProps {
  hour: number;
}

export default function NeonsAndLights({ hour }: NeonsAndLightsProps) {
  // Opcional: Desativa ou diminui os glows intensos durante o dia claro (entre 5h e 18h)
  const isDaytime = hour >= 5 && hour < 18;
  if (isDaytime) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
      {/* 1. GLOW AZUL (ESQUERDA) */}
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

      {/* 2. GLOW ROXO (ESQUERDA) */}
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

      {/* 3. GLOW AMARELO (CENTRAL) */}
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

      {/* 4. GLOW ROSA (DIREITA) */}
      <div
        className="neon-layer bg-pink-500/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "22%",
          left: "89.5%",
          width: "4.5%",
          height: "4.5%",
        }}
      />

      {/* 5. GLOW AZUL (DIREITA) */}
      <div
        className="neon-layer bg-blue-500/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "10%",
          top: "42.9%",
          left: "89.8%",
          width: "3.4%",
          height: "7%",
        }}
      />

      {/* 6. GLOW ROXO (DIREITA) */}
      <div
        className="neon-layer bg-purple-400/40 blur-[30px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "53%",
          left: "85.3%",
          width: "7%",
          height: "6%",
        }}
      />

      {/* 7. GLOW ROSA (DIREITA) */}
      <div
        className="neon-layer bg-pink-500/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          top: "62%",
          left: "86%",
          width: "5%",
          height: "10%",
        }}
      />

      {/* 8. GLOW VERMELHO (DIREITA) */}
      <div
        className="neon-layer bg-red-600/40 blur-[30px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "65%",
          left: "93%",
          width: "2.5%",
          height: "7%",
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
