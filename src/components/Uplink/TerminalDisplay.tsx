import { useState, useEffect } from "react";

export default function TerminalDisplay() {
  const [view, setView] = useState<"HOME" | "CONTACT" | "NODES">("HOME");
  const [time, setTime] = useState(new Date());
  const [showColon, setShowColon] = useState(true);
  const [isInitiating, setIsInitiating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setShowColon((prev) => !prev);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="w-full h-full rounded-xl bg-black/70 backdrop-blur-sm p-6 flex flex-col text-cyan-400 font-mono border border-cyan-900/50">
      {/* TELA: HOME */}
      {view === "HOME" && (
        <div className="flex flex-col items-center justify-center h-full gap-1 min-[375px]:gap-2 min-[475px]:gap-4 sm:gap-6 md:gap-2 min-[924px]:gap-4">
          <h2 className="text-base min-[475px]:text-lg sm:text-2xl md:text-base min-[924px]:text-lg xl:text-xl tracking-widest text-shadow-glow border-b border-cyan-800 pb-2 mb-0 xl:mb-4">
            COMMUNICATION_HUB
          </h2>
          <button
            onClick={() => setView("CONTACT")}
            className="border border-cyan-700 p-2 w-full hover:bg-cyan-900/40 transition-all text-xs min-[475px]:text-sm sm:text-base md:text-xs xl:text-sm cursor-pointer"
          >
            _SEND_DIRECT_MESSAGE
          </button>
          <button
            onClick={() => setView("NODES")}
            className="border border-cyan-700 p-2 w-full hover:bg-cyan-900/40 transition-all text-xs min-[475px]:text-sm sm:text-base md:text-xs xl:text-sm cursor-pointer"
          >
            _NETWORK_ACCESS
          </button>
          <span className="text-[8px] min-[745px]:text-[10px] sm:text-xs md:text-[8px] xl:text-[10px] mt-2 opacity-50">
            SYSTEM_STATUS: ACTIVE // <span>{hours}</span>
            <span className={showColon ? "opacity-100" : "opacity-0"}>:</span>
            <span>{minutes}</span>
          </span>
        </div>
      )}

      {/* TELA: CONTACT (Formulário para E-mail) */}
      {view === "CONTACT" && (
        <div className="flex flex-col gap-2 min-[375px]:gap-4 min-[475px]:gap-6 md:gap-4 h-full text-xs items-center justify-center">
          <h3 className="text-base min-[475px]:text-2xl md:text-sm border-b border-cyan-900 w-full text-center pb-0 min-[475px]:pb-2 md:pb-0 lg:pb-2">
            _COMMUNICATION_LINK
          </h3>

          {isInitiating ? (
            <div className="w-full flex flex-col gap-2">
              <p className="text-green-500 animate-pulse text-[10px] text-center">
                ENCRYPTING_CHANNEL...
              </p>
              <div className="w-full h-2 bg-cyan-950 border border-cyan-800 rounded-sm overflow-hidden">
                <div className="h-full bg-cyan-500 animate-loading-bar" />
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsInitiating(true);
                setTimeout(() => {
                  window.location.href =
                    "mailto:mersiocarneiro87@gmail.com?subject=Contato%20via%20Terminal";
                  setIsInitiating(false);
                }, 2000);
              }}
              className="border border-cyan-500 text-cyan-500 p-2 min-[475px]:p-3 w-full text-center hover:bg-cyan-900/30 transition-all cursor-pointer"
            >
              _INITIATE_EMAIL_HANDSHAKE
            </button>
          )}

          <button
            onClick={() => setView("HOME")}
            className="text-xs underline opacity-70 cursor-pointer"
          >
            _BACK
          </button>
        </div>
      )}

      {/* TELA: NODES */}
      {view === "NODES" && (
        <div className="flex flex-col gap-0 min-[425px]:gap-2 min-[570px]:gap-4 sm:gap-6 md:gap-1 xl:gap-3 h-full">
          <h3 className="text-sm min-[485px]:text-lg md:text-sm mb-2 border-b border-cyan-900">
            _NETWORK_NODES
          </h3>
          <a
            href="https://github.com/emersoncarneirodasilva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm min-[485px]:text-lg md:text-sm min-[910px]:text-base border-l-2 border-cyan-500 pl-3 py-0 xl:py-1 hover:bg-cyan-950"
          >
            GITHUB_PROFILE
          </a>
          <a
            href="https://www.linkedin.com/in/emerson-carneiro-da-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm min-[485px]:text-lg md:text-sm min-[910px]:text-base border-l-2 border-cyan-500 pl-3 py-0 xl:py-1 hover:bg-cyan-950"
          >
            LINKEDIN_PROFILE
          </a>
          <a
            href="https://wa.me/5584988599843"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm min-[485px]:text-lg md:text-sm min-[910px]:text-base border-l-2 border-green-500 pl-3 py-0 xl:py-1 hover:bg-green-950 text-green-400"
          >
            WHATSAPP_LINK
          </a>
          <div className="mt-auto">
            <button
              onClick={() => setView("HOME")}
              className="text-xs underline opacity-70 cursor-pointer"
            >
              _BACK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
