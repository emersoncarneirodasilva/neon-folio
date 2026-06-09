import {
  Files,
  Search,
  BugPlay,
  Blocks,
  FileCode2,
  GitBranch,
} from "lucide-react";

export const filesList = [
  { id: "about", label: "About.tsx", icon: FileCode2, color: "text-blue-400" },
  {
    id: "skills",
    label: "Skills.ts",
    icon: FileCode2,
    color: "text-yellow-400",
  },
  {
    id: "experience",
    label: "Experience.ts",
    icon: FileCode2,
    color: "text-orange-400",
  },
];

export const activityBarItems = [
  { id: "explorador", icon: Files },
  { id: "pesquisa", icon: Search },
  { id: "git", icon: GitBranch },
  { id: "debug", icon: BugPlay },
  { id: "extensoes", icon: Blocks },
];
