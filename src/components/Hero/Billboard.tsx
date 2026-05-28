import { useState, useEffect } from "react";

interface BillboardProps {
  isMobile: boolean;
}

export default function Billboard({ isMobile }: BillboardProps) {
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
      className="absolute z-20 flex flex-col items-center justify-center text-center transition-all duration-300 pointer-events-none"
      style={{
        top: "28.5%",
        left: isMobile ? "55%" : "26%",
        width: isMobile ? "90%" : "32%",
        transform:
          "translate(-50%, -50%) perspective(400px) rotateY(16deg) skewY(7.2deg)",
        filter: "blur(0.4px)",
      }}
    >
      <h1 className="font-cyber-tall text-slate-200 font-black text-[35px] max-[425px]:text-[35px] min-[425px]:text-[41.7px] min-[970px]:text-[4.3vw] tracking-wider mb-[0.1vw] animate-glitch-flicker leading-none">
        Emerson Silva
      </h1>

      <div className="font-cyber-terminal text-neon-cyan text-[12px] max-[425px]:text-[12px] min-[425px]:text-[15.5px] min-[970px]:text-[1.6vw] tracking-[0.2em] whitespace-nowrap overflow-hidden w-full drop-shadow-[0_0_6px_#00f3ff]">
        {displayedText}
        <span className="animate-[pulse_0.8s_infinite] ml-0.5">_</span>
      </div>

      <a
        href="/Emerson_Carneiro_da_Silva_Curriculo.pdf"
        download="Emerson_Carneiro_da_Silva_Curriculo.pdf"
        className="mt-6 px-4 py-1 border border-neon-cyan text-neon-cyan font-cyber-terminal text-[8px] md:text-[12px] uppercase tracking-[0.2em] hover:bg-neon-cyan/20 hover:text-white transition-all cursor-pointer pointer-events-auto"
      >
        [ DOWNLOAD_CV.EXE ]
      </a>
    </div>
  );
}
