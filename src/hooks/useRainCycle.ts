import { useEffect, useRef, useState } from "react";
import type { RainIntensity } from "../types";

const getRandomDuration = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIntensity = (): RainIntensity => {
  const rollDice = Math.floor(Math.random() * 100) + 1;
  if (rollDice <= 40) return "low";
  if (rollDice <= 80) return "medium";
  return "storm";
};

export function useRainCycle() {
  const [intensity, setIntensity] = useState<RainIntensity>("medium");
  const [isRaining, setIsRaining] = useState(false);
  const isRainingRef = useRef(false);
  const climateTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const runNormalClimateCycle = () => {
      if (isRainingRef.current) {
        const dryDuration = getRandomDuration(30000, 90000);
        isRainingRef.current = false;
        setIsRaining(false);
        climateTimerRef.current = window.setTimeout(
          runNormalClimateCycle,
          dryDuration,
        );
      } else {
        setIntensity(getRandomIntensity());
        isRainingRef.current = true;
        setIsRaining(true);
        const rainDuration = getRandomDuration(30000, 60000);
        climateTimerRef.current = window.setTimeout(
          runNormalClimateCycle,
          rainDuration,
        );
      }
    };

    climateTimerRef.current = window.setTimeout(() => {
      setIntensity(getRandomIntensity());
      isRainingRef.current = true;
      setIsRaining(true);
      const firstRainDuration = getRandomDuration(30000, 60000);
      climateTimerRef.current = window.setTimeout(
        runNormalClimateCycle,
        firstRainDuration,
      );
    }, 15000);

    return () => {
      if (climateTimerRef.current !== null) {
        window.clearTimeout(climateTimerRef.current);
      }
    };
  }, []);

  return { intensity, isRaining };
}
