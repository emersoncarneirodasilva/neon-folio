import { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import Workspace from "./components/Workspace";

type RainIntensity = "low" | "medium" | "storm";

export default function App() {
  const [hour, setHour] = useState(new Date().getHours());
  const [intensity, setIntensity] = useState<RainIntensity>("medium");
  const [isRaining, setIsRaining] = useState(false);

  const isRainingRef = useRef(false);
  const climateTimerRef = useRef<number | null>(null);

  // Ref para medir exatamente onde o Hero termina
  const heroContainerRef = useRef<HTMLDivElement>(null);

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

  // 🚀 3. --- MOTOR DE PARALAXE SELETIVO (GATILHO DE REVELAÇÃO) --- //
  useEffect(() => {
    const handleScroll = () => {
      if (!heroContainerRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroHeight = heroContainerRef.current.offsetHeight;

      // Ponto crítico: Quando a base do Hero está quase aparecendo inteira na tela
      const triggerPoint = heroHeight - windowHeight;

      if (scrollY > triggerPoint) {
        // Quantos pixels passamos do ponto onde as ACs aparecem
        const overflow = scrollY - triggerPoint;

        // Aplica o paralaxe acelerando APENAS o Workspace a partir daqui (* 0.4)
        document.documentElement.style.setProperty(
          "--workspace-offset",
          `${overflow * -0.4}px`,
        );
      } else {
        document.documentElement.style.setProperty("--workspace-offset", "0px");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#05050d] relative flex flex-col overflow-x-hidden">
      {/* 🏙️ SEÇÃO 1: HERO (Rola 100% nativo e liso no início) */}
      <div ref={heroContainerRef} className="relative w-full z-1">
        <div className="w-full h-full flex flex-col items-center">
          <Hero hour={hour} isRaining={isRaining} rainIntensity={intensity} />
        </div>
      </div>

      {/* 💻 SEÇÃO 2: WORKSPACE (Ganha super velocidade após as ACs surgirem) */}
      <div
        className="relative w-full min-h-screen bg-[#05050d] z-10 shadow-[0_-40px_hour0px_rgba(0,0,0,0.95)] will-change-transform"
        style={{
          // A mágica acontece aqui: translateY dinâmico puxa o Workspace para cima mais rápido
          transform: "translateY(var(--workspace-offset, 0px))",
          marginTop: "-2px",
        }}
      >
        <Workspace
          hour={hour}
          isRaining={isRaining}
          rainIntensity={intensity}
        />
      </div>
    </main>
  );
}
