import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import Workspace from "./components/Workspace";
import Stream from "./components/Stream";
import Uplink from "./components/Uplink";

type RainIntensity = "low" | "medium" | "storm";

export default function App() {
  const [hour, setHour] = useState(new Date().getHours());
  const [intensity, setIntensity] = useState<RainIntensity>("medium");
  const [isRaining, setIsRaining] = useState(false);

  const isRainingRef = useRef(false);
  const climateTimerRef = useRef<number | null>(null);

  // Ref para medir exatamente onde o Hero termina
  const heroContainerRef = useRef<HTMLDivElement>(null);
  // Nova Ref para medir exatamente onde o Workspace termina
  const workspaceContainerRef = useRef<HTMLDivElement>(null);

  // 1. --- ATUALIZAÇÃO DO RELÓGIO --- //
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setHour(now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. --- MOTOR DA CHUVA DINÂMICA --- //
  useEffect(() => {
    if (climateTimerRef.current) clearTimeout(climateTimerRef.current);
    const runNormalClimateCycle = () => {
      if (isRainingRef.current) {
        const dryDuration =
          Math.floor(Math.random() * (90000 - 30000 + 1)) + 30000;
        isRainingRef.current = false;
        setIsRaining(false);
        climateTimerRef.current = setTimeout(
          runNormalClimateCycle,
          dryDuration,
        );
      } else {
        const rollDice = Math.floor(Math.random() * 100) + 1;
        let randomIntensity: RainIntensity = "medium";
        if (rollDice <= 40) randomIntensity = "low";
        else if (rollDice <= 80) randomIntensity = "medium";
        else randomIntensity = "storm";
        setIntensity(randomIntensity);
        isRainingRef.current = true;
        setIsRaining(true);
        const rainDuration =
          Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;
        climateTimerRef.current = setTimeout(
          runNormalClimateCycle,
          rainDuration,
        );
      }
    };

    climateTimerRef.current = setTimeout(() => {
      const rollDice = Math.floor(Math.random() * 100) + 1;
      let randomIntensity: RainIntensity = "medium";
      if (rollDice <= 40) randomIntensity = "low";
      else if (rollDice <= 80) randomIntensity = "medium";
      else randomIntensity = "storm";
      setIntensity(randomIntensity);
      isRainingRef.current = true;
      setIsRaining(true);
      const firstRainDuration =
        Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;
      climateTimerRef.current = setTimeout(
        runNormalClimateCycle,
        firstRainDuration,
      );
    }, 15000);

    return () => {
      if (climateTimerRef.current) clearTimeout(climateTimerRef.current);
    };
  }, []);

  // 🚀 3. --- MOTOR DE PARALAXE PROFISSIONAL (Framer Motion) --- //
  const { scrollY } = useScroll();

  // O useSpring suaviza a rolagem, dando um efeito de "inércia" premium
  const smoothY = useSpring(scrollY, {
    damping: 15,
    stiffness: 100,
    mass: 0.2,
  });

  const [dims, setDims] = useState({ hero: 0, workspace: 0, window: 0 });

  useLayoutEffect(() => {
    const update = () => {
      setDims({
        hero: heroContainerRef.current?.offsetHeight || 0,
        workspace: workspaceContainerRef.current?.offsetHeight || 0,
        window: window.innerHeight,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Cálculo de Offset do Workspace
  const workspaceY = useTransform(smoothY, (v) => {
    const isMobile = window.innerWidth < 768;
    const trigger = dims.hero;

    // No mobile, subimos mais devagar (-0.2 em vez de -0.4)
    const multiplier = isMobile ? -0.2 : -0.4;
    return v > trigger ? (v - trigger) * multiplier : 0;
  });

  // Cálculo de Offset do Stream & Uplink (Soma os dois efeitos)
  const streamTotalY = useTransform(smoothY, (v) => {
    const isMobile = window.innerWidth < 768;
    const wTrigger = dims.hero;
    // No mobile, esperamos 80% da seção passar para começar a cobrir
    const sTrigger = isMobile
      ? dims.hero + dims.workspace * 0.8
      : dims.hero + dims.workspace;

    const wMultiplier = isMobile ? -0.1 : -0.4;
    const sMultiplier = isMobile ? -0.2 : -0.8;

    const wOff = v > wTrigger ? (v - wTrigger) * wMultiplier : 0;
    const sOff = v > sTrigger ? (v - sTrigger) * sMultiplier : 0;
    return wOff + sOff;
  });

  return (
    <main className="w-full min-h-screen bg-[#05050d] relative flex flex-col overflow-x-hidden">
      {/* 🏙️ SEÇÃO 1: HERO (Rola 100% nativo e liso no início) */}
      <div ref={heroContainerRef} className="relative w-full z-1">
        <div className="w-full h-full flex flex-col items-center">
          <Hero hour={hour} isRaining={isRaining} rainIntensity={intensity} />
        </div>
      </div>

      {/* 💻 SEÇÃO 2: WORKSPACE (Ganha super velocidade após as ACs surgirem) */}
      <motion.div
        ref={workspaceContainerRef}
        className="relative w-full bg-[#05050d] z-10 shadow-[0_-40px_100px_rgba(0,0,0,0.95)] will-change-transform -mt-px"
        style={{ y: workspaceY }}
      >
        <Workspace
          hour={hour}
          isRaining={isRaining}
          rainIntensity={intensity}
        />
      </motion.div>

      {/* 📺 SEÇÃO 3 & 4: STREAM & UPLINK */}
      <motion.div
        className="relative w-full bg-[#05050d] z-20 shadow-[0_-60px_120px_rgba(0,0,0,1)] will-change-transform -mt-px"
        style={{
          y: streamTotalY,
          // Compensa o deslocamento para que o rodapé acompanhe a subida
          marginBottom: streamTotalY,
        }}
      >
        <Stream hour={hour} isRaining={isRaining} rainIntensity={intensity} />

        <div className="relative w-full bg-[#05050d] shadow-[0_-80px_150px_rgba(0,0,0,1)] z-30 -mt-px">
          <Uplink hour={hour} isRaining={isRaining} rainIntensity={intensity} />
        </div>
      </motion.div>

      <footer
        className="w-full h-fit bg-[#a618da] z-40 flex items-center justify-center"
        style={{ willChange: "transform" }}
      >
        Rodapé
      </footer>
    </main>
  );
}
