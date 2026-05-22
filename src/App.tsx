import { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";

type RainIntensity = "low" | "medium" | "storm";

export default function App() {
  const [hour, setHour] = useState(new Date().getHours());

  // Estados que alimentam o Hero visualmente
  const [intensity, setIntensity] = useState<RainIntensity>("medium");
  const [isRaining, setIsRaining] = useState(false);

  // ÂNCORAS (Refs) para blindar o motor contra re-renderizações e duplo disparo do StrictMode
  const isRainingRef = useRef(false); // Começa em false (tempo seco)
  const climateTimerRef = useRef<number | null>(null);

  // 1. --- ATUALIZAÇÃO DO RELÓGIO (A cada 1 segundo) --- //
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setHour(now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 2. --- MOTOR DA CHUVA DINÂMICA --- //
  useEffect(() => {
    // Evita acumular múltiplos timers se o effect rodar duas vezes no Dev (StrictMode)
    if (climateTimerRef.current) clearTimeout(climateTimerRef.current);

    // Função que gerencia os ciclos normais (depois da primeira chuva do recrutador)
    const runNormalClimateCycle = () => {
      if (isRainingRef.current) {
        // 🛑 ESTÁ CHOVENDO -> VAI PARAR (Estiagem normal de 30s a 1min30s)
        const dryDuration =
          Math.floor(Math.random() * (90000 - 30000 + 1)) + 30000;

        isRainingRef.current = false;
        setIsRaining(false);

        climateTimerRef.current = setTimeout(
          runNormalClimateCycle,
          dryDuration,
        );
      } else {
        // 🌧️ ESTÁ SECO -> VAI VOLTAR A CHOVER (Sorteando intensidade e duração)
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

    // 🎯 O CORAÇÃO DA ESTRATÉGIA PARA O RECRUTADOR:
    // Programamos o primeiro gatilho de chuva para acontecer daqui a exatamente 15 segundos
    climateTimerRef.current = setTimeout(() => {
      // 🎲 Sorteia a intensidade dessa primeira chuva que vai quebrar o gelo
      const rollDice = Math.floor(Math.random() * 100) + 1;
      let randomIntensity: RainIntensity = "medium";

      if (rollDice <= 40) randomIntensity = "low";
      else if (rollDice <= 80) randomIntensity = "medium";
      else randomIntensity = "storm";

      // Liga a chuva no milissegundo 15.000
      setIntensity(randomIntensity);
      isRainingRef.current = true;
      setIsRaining(true);

      // Sorteia quanto tempo essa primeira chuva vai durar (entre 30s e 1min)
      const firstRainDuration =
        Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;

      // Passa o bastão para o motor normal continuar rodando em loop infinito
      climateTimerRef.current = setTimeout(
        runNormalClimateCycle,
        firstRainDuration,
      );
    }, 15000); // ⏱️ 15 segundos cravados de site limpo ao carregar

    return () => {
      if (climateTimerRef.current) clearTimeout(climateTimerRef.current);
    };
  }, []);

  return (
    <main className="w-full min-h-screen">
      <Hero hour={hour} isRaining={isRaining} rainIntensity={intensity} />
    </main>
  );
}
