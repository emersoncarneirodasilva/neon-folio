import { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import Workspace from "./components/Workspace";
import Stream from "./components/Stream";

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

  // 🚀 3. --- MOTOR DE PARALAXE SELETIVO (GATILHO DE REVELAÇÃO) --- //
  useEffect(() => {
    const handleScroll = () => {
      // Modificado: Adicionado workspaceContainerRef à verificação
      if (!heroContainerRef.current || !workspaceContainerRef.current) return;

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
        // Resetar o deslocamento adicional do stream se estivermos antes do gatilho do workspace
        document.documentElement.style.setProperty(
          "--stream-additional-offset",
          "0px",
        );
      } else {
        document.documentElement.style.setProperty("--workspace-offset", "0px");
        document.documentElement.style.setProperty(
          "--stream-additional-offset",
          "0px",
        );
      }

      // Novo ponto crítico para o Stream: Quando a base do Workspace está quase aparecendo inteira na tela
      // Calcula a altura do contêiner do Workspace
      const workspaceHeight = workspaceContainerRef.current.offsetHeight;

      // Lógica de gatilho diferenciada para evitar que o Stream "engula" o Workspace no Mobile:
      // No Desktop: Começa assim que o Stream aparece no rodapé.
      // No Mobile (< 768px): Começa apenas quando o centro do Workspace atinge o centro da tela.
      const streamTriggerPoint =
        window.innerWidth < 768
          ? heroHeight + workspaceHeight / 2 - windowHeight / 2
          : heroHeight + workspaceHeight - windowHeight;

      if (scrollY > streamTriggerPoint) {
        // Quantos pixels passamos do ponto onde o Stream deve acelerar mais
        const streamOverflow = scrollY - streamTriggerPoint;
        // Aceleramos um pouco mais (fator 0.8) para destacar a entrada da nova seção
        document.documentElement.style.setProperty(
          "--stream-additional-offset",
          `${streamOverflow * -0.8}px`,
        );
      } else {
        document.documentElement.style.setProperty(
          "--stream-additional-offset",
          "0px",
        );
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
        ref={workspaceContainerRef} // Adicionado: Anexa a nova ref ao contêiner do Workspace
        className="relative w-full bg-[#05050d] z-10 shadow-[0_-40px_100px_rgba(0,0,0,0.95)] will-change-transform"
        style={{
          // A mágica acontece aqui: translateY dinâmico puxa o Workspace para cima mais rápido
          transform: "translateY(var(--workspace-offset, 0px))",
          marginTop: "-1px",
        }}
      >
        <Workspace
          hour={hour}
          isRaining={isRaining}
          rainIntensity={intensity}
        />
      </div>

      {/* 📺 SEÇÃO 3: STREAM (Sincronizado com o Workspace para manter a fluidez) */}
      <div
        className="relative w-full bg-[#05050d] z-20 shadow-[0_-60px_120px_rgba(0,0,0,1)] will-change-transform"
        style={{
          // Modificado: Combina o deslocamento do Workspace com o deslocamento adicional do Stream
          transform:
            "translateY(calc(var(--workspace-offset, 0px) + var(--stream-additional-offset, 0px)))",
          marginTop: "-1px",
        }}
      >
        <Stream hour={hour} isRaining={isRaining} rainIntensity={intensity} />
      </div>
    </main>
  );
}
