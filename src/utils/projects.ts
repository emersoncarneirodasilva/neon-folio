import lumeStudioImage from "../assets/stream-image/lume-studio-image.webp";
import beautimeAdminImage from "../assets/stream-image/beautime-admin-image.webp";
import neonwaveImage from "../assets/stream-image/neonwave-image.webp";
import weatherAppImage from "../assets/stream-image/weather-app-image.webp";

export interface Project {
  id: number;
  title: string;
  preview: string;
  description: string;
  techs: string[];
  links: { live: string; github: string };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Lume Studio",
    preview: lumeStudioImage,
    description:
      "Experiência digital de alta sofisticação para gestão e agendamento em estética de luxo.",
    techs: ["Next.js", "Tailwind", "Typescript"],
    links: {
      live: "https://lume-studio-ten.vercel.app/",
      github: "https://github.com/emersoncarneirodasilva/lume-studio",
    },
  },
  {
    id: 2,
    title: "Beautime Admin",
    preview: beautimeAdminImage,
    description:
      "Painel administrativo de alta performance para gestão operacional de salões de beleza e estética.",
    techs: ["Next.js", "Tailwind", "Typescript"],
    links: {
      live: "https://beautime-admin.vercel.app/",
      github: "https://github.com/emersoncarneirodasilva/beautime-admin",
    },
  },
  {
    id: 3,
    title: "Neonwave",
    preview: neonwaveImage,
    description:
      "Gerencie, baixe e ouça suas músicas em um ambiente desktop imersivo.",
    techs: ["Electron", "React", "Node.js", "Tailwind", "Prisma ORM"],
    links: {
      live: "#",
      github: "https://github.com/emersoncarneirodasilva/neonwave",
    },
  },
  {
    id: 4,
    title: "My Weather App 2.0",
    preview: weatherAppImage,
    description:
      "Experiência meteorológica mobile intuitiva e responsiva, desenvolvida para visualização precisa de dados climáticos.",
    techs: ["React Native", "Expo", "Typescript"],
    links: {
      live: "#",
      github: "https://github.com/emersoncarneirodasilva/my-weather-app-2.0",
    },
  },
];
