/**
 * Central repository for all TypeScript types and interfaces used across the project
 */

/**
 * Type for rain intensity levels
 */
export type RainIntensity = "low" | "medium" | "storm";

/**
 * Props for section components (Hero, Stream, Uplink, Workspace)
 */
export interface SectionProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: RainIntensity;
}

// Section-specific props are type aliases that extend SectionProps
export type HeroProps = SectionProps;
export type StreamProps = SectionProps;
export type UplinkProps = SectionProps;
export type WorkspaceProps = SectionProps;
export type SkyProps = SectionProps;

/**
 * Props for Clouds component
 */
export interface CloudsProps {
  hour: number;
  isRaining: boolean;
}

/**
 * Configuration for individual cloud rendering
 */
export interface CloudConfig {
  id: number;
  top: string;
  duration: string;
  delay: string;
  scale: string;
  width: string;
  height: string;
}

/**
 * Props for Rain component
 */
export interface RainProps {
  intensity: RainIntensity;
}

/**
 * Project data structure for portfolio projects
 */
export interface Project {
  id: number;
  title: string;
  preview: string;
  description: string;
  techs: string[];
  links: { live: string; github: string };
}
