import { useMemo, useState, useEffect, useRef } from "react";

interface SkyProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: "low" | "medium" | "storm";
}

export default function Sky({
  hour,
  isRaining,
  rainIntensity = "storm",
}: SkyProps) {
  const isNight = hour >= 18 || hour < 6;
  const [cycleId, setCycleId] = useState(() =>
    Math.floor(Math.random() * 10000),
  );

  // ⚡ Estados para controlar o motor dinâmico do relâmpago
  const [isLightningActive, setIsLightningActive] = useState(false);
  const [triggerFlash, setTriggerFlash] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setCycleId((prev) => prev + 1);
  }, [isNight]);

  // Ativa o status de tempestade baseado nas props
  const isStorm = isRaining && rainIntensity === "storm";

  // --- MOTOR GERADOR DE RELÂMPAGOS ALEATÓRIOS --- //
  useEffect(() => {
    // Se não for tempestade, desliga tudo e limpa os timers
    if (!isStorm) {
      setIsLightningActive(false);
      setTriggerFlash(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const scheduleNextLightning = () => {
      // Sorteia um intervalo de espera aleatório entre 6 e 18 segundos
      const randomWait = Math.floor(Math.random() * (18000 - 6000 + 1)) + 6000;

      timerRef.current = setTimeout(() => {
        // Ativa o relâmpago na tela
        setIsLightningActive(true);
        setTriggerFlash(true);

        // A animação visual dura exatamente 700ms. Depois disso, limpamos o estado para a próxima.
        setTimeout(() => {
          setTriggerFlash(false);
          setIsLightningActive(false);
          // Chama a função recursivamente para sortear o próximo ciclo
          scheduleNextLightning();
        }, 700);
      }, randomWait);
    };

    // Inicia o ciclo
    scheduleNextLightning();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isStorm]);

  // Cores do gradiente do céu
  const colors = useMemo(() => {
    if (isRaining) return { from: "#111625", to: "#242d42" };

    const timeInDecimal = hour;
    if (timeInDecimal >= 4.5 && timeInDecimal < 6)
      return { from: "#0b0b1a", to: "#2c1b4d" };
    if (timeInDecimal >= 6 && timeInDecimal < 7)
      return { from: "#1f1c4b", to: "#ff7e5f" };
    if (timeInDecimal >= 7 && timeInDecimal < 9)
      return { from: "#5091ff", to: "#ffdca3" };
    if (timeInDecimal >= 9 && timeInDecimal < 12)
      return { from: "#4fa8ff", to: "#a0e9ff" };
    if (timeInDecimal >= 12 && timeInDecimal < 16)
      return { from: "#3a86ff", to: "#8ecae6" };
    if (timeInDecimal >= 16 && timeInDecimal < 18)
      return { from: "#5c2c73", to: "#e65c40" };
    if (timeInDecimal >= 18 && timeInDecimal < 19.5)
      return { from: "#1a1c4b", to: "#6b2d5c" };

    return { from: "#020208", to: "#070714" };
  }, [hour, isRaining]);

  const dailyStars = useMemo(() => {
    let seed = cycleId + 123;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const stars = [];
    for (let i = 0; i < 60; i++) {
      stars.push({
        x: (random() * 100).toFixed(2),
        y: (random() * 55).toFixed(2),
        size: (random() * 1.5 + 0.5).toFixed(1),
        opacity: (random() * 0.5 + 0.3).toFixed(2),
        delay: (random() * 4).toFixed(1),
        isTwinkle: i % 2 === 0,
      });
    }
    return stars;
  }, [cycleId]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <style>{`
        @property --sky-from { syntax: '<color>'; initial-value: #05050a; inherits: false; }
        @property --sky-to { syntax: '<color>'; initial-value: #1a1a2e; inherits: false; }

        .sky-gradient {
          --sky-from: ${colors.from};
          --sky-to: ${colors.to};
          background: linear-gradient(to bottom, var(--sky-from), var(--sky-to));
          transition: --sky-from 5s ease-in-out, --sky-to 5s ease-in-out;
          position: absolute;
          inset: 0;
        }

        /* ⚡ Animação ultra rápida de duplo estalo de luz real */
        @keyframes lightning-strike {
          0%, 100% { background-color: rgba(255, 255, 255, 0); }
          10% { background-color: rgba(255, 255, 255, 0.85); } /* 1º Clarão forte */
          20% { background-color: rgba(255, 255, 255, 0); }
          30% { background-color: rgba(255, 255, 255, 0.7); }  /* 2º Clarão de eco */
          45% { background-color: rgba(255, 255, 255, 0); }
        }

        .lightning-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          animation: lightning-strike 0.7s ease-out forwards;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
      `}</style>

      {/* 🌌 CAMADA DE GRADIENTE DO CÉU */}
      <div className="sky-gradient" />

      {/* ⚡ CAMADA DO CLARÃO DINÂMICO (Só monta e roda quando o motor dispara) */}
      {isLightningActive && triggerFlash && (
        <div className="lightning-overlay" />
      )}

      {/* 🌟 CAMADA DAS ESTRELAS */}
      <div
        className={`absolute inset-0 transition-opacity duration-5000 ${
          isNight && !isRaining ? "opacity-100" : "opacity-0"
        }`}
      >
        {dailyStars.map((s, i) => (
          <div
            key={`${cycleId}-${i}`}
            className="absolute bg-white rounded-full shadow-[0_0_1px_white]"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animation: s.isTwinkle
                ? `twinkle 3s infinite ease-in-out ${s.delay}s`
                : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
