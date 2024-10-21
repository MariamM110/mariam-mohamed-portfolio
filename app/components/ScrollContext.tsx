"use client";

import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import Lenis from "lenis";

//Types
interface ScrollContextProps {
  children: ReactNode;
}
type SmoothScrollContextType = Lenis | null;

//Context
const SmoothScrollContext = createContext<SmoothScrollContextType>(null);
export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function ScrollContext({ children }: ScrollContextProps) {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null);

  useEffect(() => {
    const scroll = new Lenis();

    function raf(time: number) {
      scroll.raf(time);
      requestAnimationFrame(raf);
    }

    const rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroll);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState as number);
        lenisRef.destroy();
      }
    };
  }, [lenisRef, rafState]);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
