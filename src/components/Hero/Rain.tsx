interface RainProps {
  intensity: "low" | "medium" | "storm";
}

export default function Rain({ intensity }: RainProps) {
  const configurations = {
    low: {
      animationClass: "opacity-20",
      // Camada 1 (Gotas longas e espaçadas), Camada 2 (Gotas curtas e rápidas)
      backgroundSize: "180px 250px, 110px 170px",
      backgroundImage: `
        linear-gradient(82deg, transparent 0%, transparent 93%, rgba(255, 255, 255, 0.25) 95%, transparent 97%),
        linear-gradient(84deg, transparent 0%, transparent 88%, rgba(255, 255, 255, 0.15) 90%, transparent 92%)
      `,
      speed: "0.55s",
    },
    medium: {
      animationClass: "opacity-40",
      // Três camadas se atropelando em tamanhos totalmente diferentes (quebra o padrão)
      backgroundSize: "130px 190px, 90px 140px, 160px 220px",
      backgroundImage: `
        linear-gradient(81deg, transparent 0%, transparent 90%, rgba(255, 255, 255, 0.45) 92%, transparent 94%),
        linear-gradient(83deg, transparent 0%, transparent 86%, rgba(255, 255, 255, 0.3) 89%, transparent 92%),
        linear-gradient(79deg, transparent 0%, transparent 92%, rgba(255, 255, 255, 0.2) 94%, transparent 96%)
      `,
      speed: "0.35s",
    },
    storm: {
      animationClass: "opacity-65",
      // Blocos muito pequenos e muito grandes misturados para dar volume de temporal
      backgroundSize: "70px 110px, 45px 80px, 110px 160px",
      backgroundImage: `
        linear-gradient(80deg, transparent 0%, transparent 85%, rgba(255, 255, 255, 0.6) 88%, transparent 91%),
        linear-gradient(82deg, transparent 0%, transparent 82%, rgba(255, 255, 255, 0.45) 86%, transparent 90%),
        linear-gradient(78deg, transparent 0%, transparent 88%, rgba(255, 255, 255, 0.35) 91%, transparent 94%)
      `,
      speed: "0.18s",
    },
  };

  const currentClimate = configurations[intensity];

  return (
    <div
      className={`absolute inset-0 z-15 pointer-events-none mix-blend-screen ${currentClimate.animationClass}`}
      style={{
        backgroundImage: currentClimate.backgroundImage,
        backgroundSize: currentClimate.backgroundSize,
        // O motor de animação roda liso aplicando a velocidade dinâmica
        animation: `rain-fall-natural ${currentClimate.speed} infinite linear`,
      }}
    >
      <style>{`
        @keyframes rain-fall-natural {
          0% { 
            /* Desloca as camadas em pontos diferentes no início */
            background-position: 0px 0px, 30px 50px, 70px 10px; 
          }
          100% { 
            /* Desloca as camadas em velocidades diferentes no final, quebrando o paralelismo */
            background-position: 400px 800px, 550px 950px, 350px 750px; 
          }
        }
      `}</style>
    </div>
  );
}
