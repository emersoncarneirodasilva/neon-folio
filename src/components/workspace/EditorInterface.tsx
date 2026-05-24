import { useState } from "react";
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

  const toggleSidebar = (id: string) => {
    if (id === "explorador") {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#09090b] border border-cyan-500/20 font-mono text-xs">
      <header className="h-8 shrink-0 border-b border-cyan-500/10 flex items-center justify-between px-2 bg-[#050505] text-gray-400">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-cyan-600 rounded-full" />
          {["Arquivo", "Editar", "Seleção", "Exibir"].map((i) => (
            <span key={i} className="hover:text-gray-100 cursor-pointer">
              {i}
            </span>
          ))}
        </div>
        <div className="bg-[#09090b] px-4 py-0.5 rounded border border-cyan-500/10">
          neon-folio
        </div>
        <X size={14} className="hover:text-white cursor-pointer" />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-16 shrink-0 border-r border-cyan-500/10 flex flex-col items-center justify-between py-2 bg-[#050505]">
          <div className="flex flex-col gap-6 w-full">
            {activityBarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => toggleSidebar(item.id)}
                  className={`px-4 transition-colors cursor-pointer ${
                    item.id === "explorador" && isSidebarOpen
                      ? "text-cyan-400 border-l-2 border-cyan-400"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  <Icon size={24} />
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 pb-4 text-gray-400">
            <UserCircle
              size={24}
              className="hover:text-gray-100 cursor-pointer"
            />
            <Settings
              size={24}
              className="hover:text-gray-100 cursor-pointer"
            />
          </div>
        </nav>

        {isSidebarOpen && (
          <aside className="w-45 shrink-0 border-r border-cyan-500/10 bg-[#050505] p-2 overflow-y-auto">
            <div className="text-gray-500 uppercase px-2 mb-2">Explorador</div>
            <div className="flex items-center gap-2 font-bold text-gray-200 p-2">
              <Folder size={16} /> RECRUITER
            </div>
            {filesList.map((f) => {
              const FileIcon = f.icon;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  className={`w-full flex items-center gap-2 p-1.5 pl-5 hover:bg-white/5 cursor-pointer ${
                    activeTab === f.id
                      ? "bg-white/5 text-gray-100"
                      : "text-gray-400"
                  }`}
                >
                  <span className={f.color}>
                    <FileIcon size={16} />
                  </span>{" "}
                  {f.label}
                </button>
              );
            })}
          </aside>
        )}

        <main className="flex-1 flex flex-col bg-[#09090b] overflow-hidden">
          <div className="h-9 shrink-0 flex items-center bg-[#050505] border-b border-cyan-500/10 px-4 text-gray-300">
            {filesList.find((f) => f.id === activeTab)?.label}
          </div>
          <section className="flex-1 p-8 overflow-y-auto">
            {FileContentRenderer({ activeTab })}
          </section>
        </main>
      </div>

      <footer className="h-6 shrink-0 border-t border-cyan-500/10 flex items-center justify-between px-3 bg-[#050505] text-[10px] text-gray-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <GitBranch size={12} /> main*
          </div>
          <div className="flex items-center gap-1">
            <X size={12} /> 0 <BugPlay size={12} /> 0
          </div>
        </div>
        <div>Ln 1, Col 1</div>
      </footer>
    </div>
  );
}
