import { useEffect, useState } from "react";

export function useHour() {
  const [hour, setHour] = useState(() => {
    const now = new Date();
    return now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = new Date();
      setHour(now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return hour;
}
