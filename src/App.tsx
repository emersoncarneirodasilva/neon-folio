import { useRef } from "react";
import { motion } from "framer-motion";
import { useHour } from "./hooks/useHour";
import { useRainCycle } from "./hooks/useRainCycle";
import { useParallaxTransforms } from "./hooks/useParallaxTransforms";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Hero from "./components/Hero/index";
import Workspace from "./components/Workspace/index";
import Stream from "./components/Stream/index";
import Uplink from "./components/Uplink/index";

function AppContent() {
  const hour = useHour();
  const { intensity, isRaining } = useRainCycle();

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const workspaceContainerRef = useRef<HTMLDivElement>(null);
  const { workspaceY, streamTotalY } = useParallaxTransforms(
    heroContainerRef,
    workspaceContainerRef,
  );

  return (
    <main className="w-full min-h-screen bg-[#05050d] relative flex flex-col overflow-x-hidden">
      <div ref={heroContainerRef} className="relative w-full z-1">
        <div className="w-full h-full flex flex-col items-center">
          <Hero hour={hour} isRaining={isRaining} rainIntensity={intensity} />
        </div>
      </div>

      <motion.div
        ref={workspaceContainerRef}
        className="relative w-full bg-[#05050d] z-10 shadow-[0_-40px_100px_rgba(0,0,0,0.95)] will-change-transform -mt-px"
        style={{ y: workspaceY }}
      >
        <Workspace
          hour={hour}
          isRaining={isRaining}
          rainIntensity={intensity}
        />
      </motion.div>

      <motion.div
        className="relative w-full bg-[#05050d] z-20 shadow-[0_-60px_120px_rgba(0,0,0,1)] will-change-transform -mt-px"
        style={{
          y: streamTotalY,
          marginBottom: streamTotalY,
        }}
      >
        <Stream hour={hour} isRaining={isRaining} rainIntensity={intensity} />

        <div className="relative w-full bg-[#05050d] shadow-[0_-80px_150px_rgba(0,0,0,1)] z-30 -mt-px">
          <Uplink hour={hour} isRaining={isRaining} rainIntensity={intensity} />
        </div>
      </motion.div>
    </main>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}
