import { useState, useEffect } from "react";
import {
  UserCircle,
  Settings,
  X,
  Folder,
  GitBranch,
  BugPlay,
} from "lucide-react";
import { activityBarItems, filesList } from "../../utils/editorData";
import { FileContentRenderer } from "./FileContentRenderer";

export default function EditorInterface() {
  const [activeTab, setActiveTab] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setIsSidebarOpen(window.innerWidth >= 1024);
    const handleResize = () => setIsSidebarOpen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = (id: string) => {
    if (id === "explorador") {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#09090b] border border-cyan-500/20 font-mono text-xs overflow-hidden">
      {/* Header: Adicionado 'overflow-hidden' e 'truncate' no container de texto */}
      <header className="h-6 md:h-8 shrink-0 border-b border-cyan-500/10 flex items-center justify-between px-2 bg-[#050505] text-gray-400">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-3 h-3 bg-cyan-600 rounded-full shrink-0" />
          <div className="hidden md:flex gap-3 truncate">
            {["Arquivo", "Editar", "Seleção", "Exibir"].map((i) => (
              <span
                key={i}
                className="hover:text-gray-100 cursor-pointer whitespace-nowrap"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#09090b] px-2 md:px-4 py-0.5 rounded border border-cyan-500/10 shrink-0">
          neon-folio
        </div>
        <X
          size={14}
          className="hover:text-white cursor-pointer shrink-0 ml-2"
        />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Nav Lateral */}
        <nav className="w-7 sm:w-10 md:w-16 shrink-0 border-r border-cyan-500/10 flex flex-col items-center justify-between py-2 bg-[#050505]">
          <div className="flex flex-col gap-6 w-full">
            {activityBarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => toggleSidebar(item.id)}
                  className={`px-2 md:px-4 transition-colors cursor-pointer ${
                    item.id === "explorador" && isSidebarOpen
                      ? "text-cyan-400 border-l-2 border-cyan-400"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  <Icon size={window.innerWidth < 768 ? 16 : 24} />
                </button>
              );
            })}
          </div>
          <div className="hidden lg:flex flex-col gap-4 pb-4 text-gray-400">
            <UserCircle
              size={20}
              className="hover:text-gray-100 cursor-pointer"
            />
            <Settings
              size={20}
              className="hover:text-gray-100 cursor-pointer"
            />
          </div>
        </nav>

        {/* Sidebar / Explorador */}
        <aside
          className={`shrink-0 border-r border-cyan-500/10 bg-[#050505] overflow-hidden transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "w-25 sm:w-30 md:w-45" : "w-0"
          }`}
        >
          {/* Adicionado 'flex flex-col h-full' para garantir que ele respeite o container pai */}
          <div className="w-40 md:w-45 h-full flex flex-col p-1 md:p-2 overflow-hidden">
            <div className="text-[10px] text-gray-500 uppercase px-2 mb-2 hidden md:block">
              Explorador
            </div>

            <div className="flex items-center gap-2 font-bold text-gray-200 p-1 md:p-2 text-[10px] md:text-xs">
              <Folder size={14} /> RECRUITER
            </div>

            {/* Lista de arquivos com scroll interno se necessário */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {filesList.map((f) => {
                const FileIcon = f.icon;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActiveTab(f.id)}
                    className={`w-full flex items-center gap-2 p-1 md:p-1.5 md:pl-5 hover:bg-white/5 text-[10px] md:text-xs cursor-pointer ${
                      activeTab === f.id
                        ? "bg-white/5 text-gray-100"
                        : "text-gray-400"
                    }`}
                  >
                    <span className={f.color}>
                      <FileIcon size={12} />
                    </span>
                    <span className="truncate">{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 flex flex-col bg-[#09090b] overflow-hidden">
          <div className="hidden max-[450px]:hidden xs:flex h-6 md:h-9 shrink-0 items-center bg-[#050505] border-b border-cyan-500/10 px-4 text-gray-300 truncate">
            <span className="truncate">
              {filesList.find((f) => f.id === activeTab)?.label}
            </span>
          </div>

          <div className="hidden min-[450px]:flex h-6 md:h-9 shrink-0 items-center bg-[#050505] border-b border-cyan-500/10 px-4 text-gray-300 truncate">
            <span className="truncate">
              {filesList.find((f) => f.id === activeTab)?.label}
            </span>
          </div>

          <section className="flex-1 p-4 md:p-8 overflow-y-auto">
            {FileContentRenderer({ activeTab })}
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-4 md:h-6 shrink-0 border-t border-cyan-500/10 flex items-center justify-between px-3 bg-[#050505] text-[8px] md:text-[10px] text-gray-400">
        <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
          <div className="flex items-center gap-1 shrink-0">
            <GitBranch size={12} /> main*
          </div>
          <div className="hidden sm:flex items-center gap-1 shrink-0">
            <X size={12} /> 0 <BugPlay size={12} /> 0
          </div>
        </div>
        <div className="shrink-0">Ln 1, Col 1</div>
      </footer>
    </div>
  );
}
