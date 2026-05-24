import {
  Files,
  Search,
  BugPlay,
  Blocks,
  FileCode2,
  GitBranch,
} from "lucide-react";

// Aqui você pode criar o componente de ícone do Git se quiser centralizar tudo
export const filesList = [
  { id: "about", label: "About.tsx", icon: FileCode2, color: "text-blue-400" },
  {
    id: "skills",
    label: "Skills.tsx",
    icon: FileCode2,
    color: "text-yellow-400",
  },
  {
    id: "experience",
    label: "Experience.tsx",
    icon: FileCode2,
    color: "text-orange-400",
  },
];

export const activityBarItems = [
  { id: "explorador", icon: Files },
  { id: "pesquisa", icon: Search },
  { id: "git", icon: GitBranch }, // Você pode usar o padrão do Lucide ou o seu custom
  { id: "debug", icon: BugPlay },
  { id: "extensoes", icon: Blocks },
];
