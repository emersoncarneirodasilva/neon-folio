interface NeonsAndLightsProps {
  hour: number;
}

export default function NeonsAndLights({ hour }: NeonsAndLightsProps) {
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
        className="neon-layer bg-orange-500/40 blur-[7px] animate-neon-pulse"
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
        className="neon-layer bg-orange-500/40 blur-[3px] animate-neon-flicker"
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

      {/* 5. GLOW ROXO (CIDADE) */}
      <div
        className="neon-layer bg-purple-400/40 blur-[10px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "13.5%",
          left: "73%",
          width: "1.2%",
          height: "2.2%",
        }}
      />
      <div
        className="neon-layer bg-purple-400/60 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "49%",
          left: "76.7%",
          width: "4.5%",
          height: "4%",
        }}
      />
      <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-[pulse_2s_infinite]"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "15%",
          left: "90.7%",
          width: "7%",
          height: "4%",
        }}
      />
      <div
        className="neon-layer bg-purple-400/40 blur-[20px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "40.5%",
          left: "95.6%",
          width: "3.5%",
          height: "17.5%",
        }}
      />

      {/* 6. GLOW ROSA (CIDADE) */}
      <div
        className="neon-layer bg-pink-500/60 blur-[7px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "27%",
          left: "72.5%",
          width: "0.5%",
          height: "3%",
        }}
      />
      <div
        className="neon-layer bg-pink-500/60 blur-[15px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "27%",
          left: "77.35%",
          width: "1%",
          height: "4.5%",
        }}
      />
      <div
        className="neon-layer bg-pink-500/40 blur-[20px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "24.7%",
          left: "85%",
          width: "2.7%",
          height: "12.5%",
        }}
      />
      <div
        className="neon-layer bg-pink-500/40 blur-[50px] animate-neon-pulse"
        style={{
          mixBlendMode: "screen",
          borderRadius: "50%",
          top: "66%",
          left: "87.5%",
          width: "12%",
          height: "6%",
        }}
      />

      {/* 7. GLOW AZUL (CIDADE) */}
      <div
        className="neon-layer bg-blue-500/40 blur-[30px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "10%",
          top: "35%",
          left: "79.4%",
          width: "1.7%",
          height: "12%",
        }}
      />
      <div
        className="neon-layer bg-blue-500/40 blur-[30px] animate-neon-flicker"
        style={{
          mixBlendMode: "screen",
          borderRadius: "10%",
          top: "22%",
          left: "90.8%",
          width: "2.8%",
          height: "8%",
        }}
      />

      {/* 8. GLOW VERMELHO (CIDADE) */}
      <div
        className="neon-layer bg-red-600/40 blur-[30px] animate-neon-flicker-intense"
        style={{
          mixBlendMode: "screen",
          borderRadius: "0%",
          top: "39.7%",
          left: "92%",
          width: "1.5%",
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
