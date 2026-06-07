import { useLayoutEffect, useState } from "react";
import type { RefObject } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

export function useParallaxTransforms(
  heroRef: RefObject<HTMLDivElement | null>,
  workspaceRef: RefObject<HTMLDivElement | null>,
) {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 15,
    stiffness: 100,
    mass: 0.2,
  });
  const [dims, setDims] = useState({ hero: 0, workspace: 0 });

  useLayoutEffect(() => {
    const update = () => {
      setDims({
        hero: heroRef.current?.offsetHeight ?? 0,
        workspace: workspaceRef.current?.offsetHeight ?? 0,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [heroRef, workspaceRef]);

  const workspaceY = useTransform(smoothY, (v) => {
    const isMobile = window.innerWidth < 768;
    const trigger = dims.hero;
    const multiplier = isMobile ? -0.2 : -0.4;
    return v > trigger ? (v - trigger) * multiplier : 0;
  });

  const streamTotalY = useTransform(smoothY, (v) => {
    const isMobile = window.innerWidth < 768;
    const wTrigger = dims.hero;
    const sTrigger = isMobile
      ? dims.hero + dims.workspace * 0.8
      : dims.hero + dims.workspace;
    const wMultiplier = isMobile ? -0.1 : -0.4;
    const sMultiplier = isMobile ? -0.2 : -0.8;
    const wOff = v > wTrigger ? (v - wTrigger) * wMultiplier : 0;
    const sOff = v > sTrigger ? (v - sTrigger) * sMultiplier : 0;
    return wOff + sOff;
  });

  return { workspaceY, streamTotalY };
}
