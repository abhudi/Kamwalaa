"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, touchMultiplier: 2 }}>
      {children as any}
    </ReactLenis>
  );
};

export default SmoothScrolling;
