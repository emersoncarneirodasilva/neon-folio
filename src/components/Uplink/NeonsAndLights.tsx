interface NeonsAndLightsProps {
  hour: number;
}

export default function NeonsAndLights({ hour }: NeonsAndLightsProps) {
  // Opcional: Desativa ou diminui os glows intensos durante o dia claro (entre 5h e 18h)
  const isDaytime = hour >= 5 && hour < 18;
  if (isDaytime) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
      {/* 1. GLOW CIANO (CAFÉ) */}
      <div
        className="neon-layer bg-cyan-500/20 blur-[60px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          top: "6%",
          left: "0%",
          width: "12%",
          height: "16%",
        }}
      />
      <div
        className="neon-layer bg-cyan-500/40 blur-[30px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "36.6%",
          left: "3.8%",
          width: "2.3%",
          height: "5.2%",
        }}
      />
      <div
        className="neon-layer bg-cyan-500/40 blur-[30px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "35%",
          left: "7.8%",
          width: "2.4%",
          height: "5.5%",
        }}
      />
      <div
        className="neon-layer bg-cyan-500/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "24.7%",
          left: "22.2%",
          width: "5%",
          height: "1.5%",
        }}
      />
      <div
        className="neon-layer bg-cyan-500/40 blur-[30px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "40%",
          left: "28.1%",
          width: "2.5%",
          height: "3.5%",
        }}
      />
      <div
        className="neon-layer bg-cyan-500/20 blur-[70px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "15%",
          left: "39%",
          width: "8%",
          height: "20%",
        }}
      />
      <div
        className="neon-layer bg-cyan-500/20 blur-[50px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "15%",
          left: "48%",
          width: "5%",
          height: "17.5%",
        }}
      />
      <div
        className="neon-layer bg-cyan-500/20 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          top: "26%",
          left: "59.6%",
          width: "2%",
          height: "9.5%",
        }}
      />

      {/* 2. GLOW AMARELO (CAFÉ) */}
      <div
        className="neon-layer bg-yellow-400/40 blur-[10px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          top: "25.2%",
          left: "0.6%",
          width: "3%",
          height: "4%",
        }}
      />
      <div
        className="neon-layer bg-yellow-400/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "18.4%",
          left: "13%",
          width: "2%",
          height: "4%",
        }}
      />
      <div
        className="neon-layer bg-yellow-400/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "18.2%",
          left: "31.05%",
          width: "2%",
          height: "4%",
        }}
      />
      <div
        className="neon-layer bg-yellow-400/60 blur-[20px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "29.5%",
          left: "26.2%",
          width: "2%",
          height: "4%",
        }}
      />
      <div
        className="neon-layer bg-yellow-400/40 blur-[30px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "35.7%",
          left: "31.4%",
          width: "3%",
          height: "7%",
        }}
      />
      <div
        className="neon-layer bg-yellow-400/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "6.3%",
          left: "55.5%",
          width: "3%",
          height: "3%",
        }}
      />
      <div
        className="neon-layer bg-yellow-400/60 blur-[7px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "23%",
          left: "53.6%",
          width: "1.3%",
          height: "1.2%",
        }}
      />

      {/* 3. GLOW BRANCO (CAFÉ) */}
      <div
        className="neon-layer bg-white/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "20%",
          top: "11%",
          left: "18.7%",
          width: "6.5%",
          height: "1.5%",
        }}
      />

      {/* 4. GLOW LARANJA (CAFÉ) */}
      <div
        className="neon-layer bg-orange-500/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "20%",
          left: "24%",
          width: "1.5%",
          height: "3%",
        }}
      />
      <div
        className="neon-layer bg-orange-500/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "20%",
          top: "36.8%",
          left: "19%",
          width: "2%",
          height: "1%",
        }}
      />
      <div
        className="neon-layer bg-orange-500/40 blur-[20px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "20%",
          top: "26%",
          left: "57.77%",
          width: "1.5%",
          height: "8%",
        }}
      />
      <div
        className="neon-layer bg-orange-500/60 blur-[10px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "20%",
          top: "25.5%",
          left: "62.6%",
          width: "1%",
          height: "3%",
        }}
      />

      {/* 2. GLOW ROXO (ESQUERDO) */}
      {/* <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "9.35%",
          top: "50.5%",
          width: "2.5%",
          height: "25%",
        }}
      /> */}

      {/* 3. GLOW AMARELO (CENTRAL) */}
      {/* <div
        className="neon-layer bg-yellow-400/40 blur-[10px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          left: "40%",
          top: "5%",
          width: "15%",
          height: "1%",
        }}
      /> */}

      {/* 4. GLOW BRANCO (DIREITA) */}
      {/* <div
        className="neon-layer bg-white/40 blur-[7px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "33.8%",
          left: "81.7%",
          width: "0.7%",
          height: "4.5%",
        }}
      /> */}

      {/* 5. GLOW ROSA (DIREITA) */}
      {/* <div
        className="neon-layer bg-pink-500/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "22.8%",
          left: "89.8%",
          width: "4.5%",
          height: "4.5%",
        }}
      /> */}

      {/* 6. GLOW AZUL (DIREITA) */}
      {/* <div
        className="neon-layer bg-blue-500/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "10%",
          top: "43.1%",
          left: "90%",
          width: "3.4%",
          height: "7.7%",
        }}
      /> */}

      {/* 7. GLOW ROXO (DIREITA) */}
      {/* <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "53.5%",
          left: "85.5%",
          width: "7%",
          height: "6%",
        }}
      /> */}

      {/* 8. GLOW ROSA (DIREITA) */}
      {/* <div
        className="neon-layer bg-pink-500/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "30%",
          top: "61.5%",
          left: "86.5%",
          width: "5%",
          height: "11%",
        }}
      /> */}

      {/* 9. GLOW VERMELHO (DIREITA) */}
      {/* <div
        className="neon-layer bg-red-600/40 blur-[30px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "65.5%",
          left: "94%",
          width: "2%",
          height: "6.6%",
        }}
      /> */}

      {/* 5. GLOW VERDE */}
      {/* <div
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
      /> */}

      {/* 6. GLOW ROSA */}
      {/* <div
        className="neon-layer bg-pink-500/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "20%",
          left: "95.6%",
          top: "42.3%",
          width: "3%",
          height: "7.5%",
        }}
      /> */}

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
