// Imports para Hero
import bgHeroSunrise from "../assets/home-image/bg-hero-sunrise.webp";
import bgHeroDay from "../assets/home-image/bg-hero-day.webp";
import bgHeroSunset from "../assets/home-image/bg-hero-sunset.webp";
import bgHeroNight from "../assets/home-image/bg-hero-night.webp";
import bgHeroSunriseCut from "../assets/home-image/bg-hero-sunrise-cut.webp";
import bgHeroDayCut from "../assets/home-image/bg-hero-day-cut.webp";
import bgHeroSunsetCut from "../assets/home-image/bg-hero-sunset-cut.webp";
import bgHeroNightCut from "../assets/home-image/bg-hero-night-cut.webp";

// Imports para Workspace
import bgWorkspaceSunrise from "../assets/workspace-image/bg-workspace-sunrise.webp";
import bgWorkspaceDay from "../assets/workspace-image/bg-workspace-day.webp";
import bgWorkspaceSunset from "../assets/workspace-image/bg-workspace-sunset.webp";
import bgWorkspaceNight from "../assets/workspace-image/bg-workspace-night.webp";
import bgWorkspaceSunriseCut from "../assets/workspace-image/bg-workspace-sunrise-cut.webp";
import bgWorkspaceDayCut from "../assets/workspace-image/bg-workspace-day-cut.webp";
import bgWorkspaceSunsetCut from "../assets/workspace-image/bg-workspace-sunset-cut.webp";
import bgWorkspaceNightCut from "../assets/workspace-image/bg-workspace-night-cut.webp";

// Imports para Stream
import bgStreamSunrise from "../assets/stream-image/bg-stream-sunrise.webp";
import bgStreamDay from "../assets/stream-image/bg-stream-day.webp";
import bgStreamSunset from "../assets/stream-image/bg-stream-sunset.webp";
import bgStreamNight from "../assets/stream-image/bg-stream-night.webp";
import bgStreamSunriseCut from "../assets/stream-image/bg-stream-sunrise-cut.webp";
import bgStreamDayCut from "../assets/stream-image/bg-stream-day-cut.webp";
import bgStreamSunsetCut from "../assets/stream-image/bg-stream-sunset-cut.webp";
import bgStreamNightCut from "../assets/stream-image/bg-stream-night-cut.webp";

// Imports para Uplink
import bgUplinkSunrise from "../assets/uplink-image/bg-uplink-sunrise.webp";
import bgUplinkDay from "../assets/uplink-image/bg-uplink-day.webp";
import bgUplinkSunset from "../assets/uplink-image/bg-uplink-sunset.webp";
import bgUplinkNight from "../assets/uplink-image/bg-uplink-night.webp";
import bgUplinkSunriseCut from "../assets/uplink-image/bg-uplink-sunrise-cut.webp";
import bgUplinkDayCut from "../assets/uplink-image/bg-uplink-day-cut.webp";
import bgUplinkSunsetCut from "../assets/uplink-image/bg-uplink-sunset-cut.webp";
import bgUplinkNightCut from "../assets/uplink-image/bg-uplink-night-cut.webp";

// Imagens da Cidade (Window)
import citySunrise from "../assets/city-in-the-window/city-in-the-window-sunrise.webp";
import cityDay from "../assets/city-in-the-window/city-in-the-window-day.webp";
import citySunset from "../assets/city-in-the-window/city-in-the-window-sunset.webp";
import cityNight from "../assets/city-in-the-window/city-in-the-window-night.webp";

import cityUplinkSunrise from "../assets/city-in-the-window/city-in-the-window-sunrise-02.webp";
import cityUplinkDay from "../assets/city-in-the-window/city-in-the-window-day-02.webp";
import cityUplinkSunset from "../assets/city-in-the-window/city-in-the-window-sunset-02.webp";
import cityUplinkNight from "../assets/city-in-the-window/city-in-the-window-night-02.webp";

export type TimePeriod = "sunrise" | "day" | "sunset" | "night";

export interface ThemeAssets {
  bg: string;
  bgCut: string;
  city?: string;
}

export function getTimePeriod(hour: number): TimePeriod {
  if (hour >= 5 && hour < 7) return "sunrise";
  if (hour >= 7 && hour < 16) return "day";
  if (hour >= 16 && hour < 18) return "sunset";
  return "night";
}

export const HERO_THEME: Record<TimePeriod, ThemeAssets> = {
  sunrise: { bg: bgHeroSunrise, bgCut: bgHeroSunriseCut },
  day: { bg: bgHeroDay, bgCut: bgHeroDayCut },
  sunset: { bg: bgHeroSunset, bgCut: bgHeroSunsetCut },
  night: { bg: bgHeroNight, bgCut: bgHeroNightCut },
};

export const WORKSPACE_THEME: Record<TimePeriod, ThemeAssets> = {
  sunrise: {
    bg: bgWorkspaceSunrise,
    bgCut: bgWorkspaceSunriseCut,
    city: citySunrise,
  },
  day: { bg: bgWorkspaceDay, bgCut: bgWorkspaceDayCut, city: cityDay },
  sunset: {
    bg: bgWorkspaceSunset,
    bgCut: bgWorkspaceSunsetCut,
    city: citySunset,
  },
  night: { bg: bgWorkspaceNight, bgCut: bgWorkspaceNightCut, city: cityNight },
};

export const STREAM_THEME: Record<TimePeriod, ThemeAssets> = {
  sunrise: {
    bg: bgStreamSunrise,
    bgCut: bgStreamSunriseCut,
    city: citySunrise,
  },
  day: { bg: bgStreamDay, bgCut: bgStreamDayCut, city: cityDay },
  sunset: {
    bg: bgStreamSunset,
    bgCut: bgStreamSunsetCut,
    city: citySunset,
  },
  night: { bg: bgStreamNight, bgCut: bgStreamNightCut, city: cityNight },
};

export const UPLINK_THEME: Record<TimePeriod, ThemeAssets> = {
  sunrise: {
    bg: bgUplinkSunrise,
    bgCut: bgUplinkSunriseCut,
    city: cityUplinkSunrise,
  },
  day: { bg: bgUplinkDay, bgCut: bgUplinkDayCut, city: cityUplinkDay },
  sunset: {
    bg: bgUplinkSunset,
    bgCut: bgUplinkSunsetCut,
    city: cityUplinkSunset,
  },
  night: { bg: bgUplinkNight, bgCut: bgUplinkNightCut, city: cityUplinkNight },
};
