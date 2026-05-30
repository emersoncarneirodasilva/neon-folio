import type { Project } from "../../utils/projects";

interface ProjectSidebarProps {
  projects: Project[];
  onSelect: (id: number) => void;
  activeId: number;
}

export default function ProjectSidebar({
  projects,
  onSelect,
  activeId,
}: ProjectSidebarProps) {
  return (
    <div className="w-full h-full flex flex-col border-r border-cyan-900/50 bg-black/40 p-2 sm:p-4 gap-1 shrink-0 overflow-hidden scrollbar-thin scrollbar-thumb-cyan-900/50 scrollbar-track-transparent">
      <h3 className="text-cyan-500 text-[10px] sm:text-[14px] mb-4 sm:mb-6 font-mono tracking-tighter">
        MY PROJECTS
      </h3>
      {projects.map((p) => (
        <button
          key={p.id}
          onClick={() => onSelect(p.id)}
          className={`w-full text-left p-1 sm:p-2 font-mono text-[10px] sm:text-[12px] transition-all border-l-2 md:border-l-4 cursor-pointer truncate ${
            activeId === p.id
              ? "border-cyan-400 text-cyan-400 bg-cyan-900/20"
              : "border-transparent text-cyan-700 hover:text-cyan-500"
          }`}
        >
          <span className="truncate block">
            0{p.id}. {p.title.toUpperCase()}
          </span>
        </button>
      ))}
    </div>
  );
}
