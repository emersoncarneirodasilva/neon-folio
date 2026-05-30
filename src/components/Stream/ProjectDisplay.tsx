import type { Project } from "../../utils/projects";

interface ProjectDisplayProps {
  activeProject: Project;
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
  isOverlayVisible: boolean;
  setIsOverlayVisible: (value: boolean) => void;
}

export default function ProjectDisplay({
  activeProject,
  isFullscreen,
  setIsFullscreen,
  isOverlayVisible,
  setIsOverlayVisible,
}: ProjectDisplayProps) {
  return (
    <div className="flex-1 relative flex flex-col">
      <div
        className="w-full h-full relative overflow-hidden border border-cyan-900/30 group cursor-pointer"
        onClick={() => setIsOverlayVisible(!isOverlayVisible)}
      >
        <img
          src={activeProject.preview}
          className={`w-full h-full transition-all duration-500 group-hover:scale-105 ${
            activeProject.id === 4 ? "object-contain" : "object-cover"
          }`}
          alt={activeProject.title}
        />

        {/* Gatilho Visual */}
        <div className="absolute bottom-2 left-2 z-10 opacity-60">
          <span className="bg-cyan-900/50 text-cyan-400 border border-cyan-400 rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-mono">
            i
          </span>
        </div>

        <div
          className={`absolute inset-0 bg-black/85 transition-opacity duration-300 p-4 flex flex-col justify-center items-center text-center gap-2
                    ${isOverlayVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"}`}
        >
          <h4 className="text-cyan-400 font-mono text-base sm:text-xl shrink-0">
            {activeProject.title.toUpperCase()}
          </h4>

          <p className="text-cyan-100/70 text-xs sm:text-base font-mono max-w-[80%] overflow-y-auto max-h-[35%] scrollbar-thin scrollbar-thumb-cyan-900/50 scrollbar-track-transparent shrink">
            {activeProject.description}
          </p>

          <p className="text-[7px] sm:text-[10px] font-mono text-cyan-800 tracking-widest uppercase shrink-0 mt-1 leading-tight">
            <span className="hidden sm:inline">STACK: </span>
            {activeProject.techs.join(" • ")}
          </p>

          <div className="flex gap-4 mt-1 shrink-0">
            {activeProject.links.live !== "#" && (
              <a
                href={activeProject.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-white underline font-mono text-[10px] sm:text-[12px] uppercase"
              >
                [SITE]
              </a>
            )}
            <a
              href={activeProject.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-white underline font-mono text-[10px] sm:text-[12px] uppercase"
            >
              [CÓDIGO]
            </a>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFullscreen(!isFullscreen);
          }}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-cyan-950/80 text-[6px] sm:text-[10px] text-cyan-400 border border-cyan-400 px-3 py-1 hover:bg-cyan-900 transition-colors z-20 cursor-pointer"
        >
          {isFullscreen ? "FECHAR [X]" : "EXIBIR [FULL]"}
        </button>
      </div>
    </div>
  );
}
