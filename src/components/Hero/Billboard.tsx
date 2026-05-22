import { useState, useEffect } from "react";

export default function Billboard() {
  const titles = ["FULL-STACK DEVELOPER", "WEB DEVELOPER", "DESKTOP DEVELOPER"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const currentFullText = titles[textIndex];
    const currentSpeed = isDeleting ? 40 : 80;

    const handleType = () => {
      if (!isDeleting) {
        setDisplayedText(
          currentFullText.substring(0, displayedText.length + 1),
        );

        if (displayedText === currentFullText) {
          timer = window.setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setDisplayedText(
          currentFullText.substring(0, displayedText.length - 1),
        );

        if (displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % titles.length);
          timer = window.setTimeout(() => {}, 500);
          return;
        }
      }

      timer = window.setTimeout(handleType, currentSpeed);
    };

    timer = window.setTimeout(handleType, currentSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <div
      className="absolute uppercase z-20 pointer-events-none select-none flex flex-col items-center justify-center text-center
                 w-66.25 max-[400px]:w-66.25 min-[400px]:w-77.5 min-[970px]:w-[32%]
                 left-60.5 max-[400px]:left-60.5 min-[400px]:left-63 min-[970px]:left-[26%]
                 transform-[translate(-50%,-50%)_perspective(400px)_rotateY(16deg)_skewY(7.8deg)]"
      style={{
        top: "26%",
        filter: "blur(0.4px)",
      }}
    >
      {/* 🎯 Adaptado para text-[35px] em telas ultra-pequenas, text-[41.7px] em telas médias e fluidos originais em desktop */}
      <h1 className="font-cyber-tall text-slate-200 font-black text-[35px] max-[400px]:text-[35px] min-[400px]:text-[41.7px] min-[970px]:text-[4.3vw] tracking-wider mb-[0.1vw] animate-glitch-flicker leading-none">
        Emerson Silva
      </h1>

      {/* 🎯 Reduzido para text-[12px] abaixo de 400px. Isso garante que "FULL-STACK DEVELOPER" não corte nenhuma letra na direita! */}
      <div className="font-cyber-terminal text-neon-cyan text-[12px] max-[400px]:text-[12px] min-[400px]:text-[15.5px] min-[970px]:text-[1.6vw] tracking-[0.2em] whitespace-nowrap overflow-hidden w-full drop-shadow-[0_0_6px_#00f3ff]">
        {displayedText}
        <span className="animate-[pulse_0.8s_infinite] ml-0.5">_</span>
      </div>
    </div>
  );
}
