// src/components/StarGrid.tsx
// "use client"



"use client"


import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function StarGrid() {
  const grid = [14, 30] as const;
    // const container = useRef<SVGSVGElement>(null);
    
    // Calculate center points
  const centerX = grid[1] / 2;
  const centerY = grid[0] / 2;

  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);


  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { opacity: 1 });
        gsap.set(".star-grid-item", {
          opacity: 0.2,
          scale: 1,
        });
        return;
      }

      gsap.set(".star-grid-item", {
        opacity: 0,
        transformOrigin: "center",
        color: "#cce3ff",
      });
      gsap.set(container.current, { opacity: 1 });

      const tl = gsap.timeline();

      // Entrance animation
      tl.to(".star-grid-item", {
        keyframes: [
          {
            opacity: 0,
            duration: 0,
          },
          {
            opacity: 0.4,
            color: "#60a5fa",
            scale: 1.5,
            duration: 0.4,
            stagger: {
              amount: 2,
              grid: grid,
              from: "center",
            },
          },
          {
            opacity: 0.2,
            color: "#cce3ff",
            scale: 0.9,
            delay: -2,
            duration: 0.4,
            stagger: {
              amount: 3,
              grid: grid,
              from: "center",
            },
          },
        ],
      });

      // Loop animation
      tl.to(".star-grid-item", {
        delay: 3,
        repeat: -1,
        repeatDelay: 3,
        keyframes: [
          {
            opacity: 0.4,
            color: "#60a5fa",
            scale: 1.4,
            duration: 0.6,
            stagger: {
              amount: 2,
              grid: grid,
              from: "center",
            },
          },
          {
            opacity: 0.2,
            color: "#cce3ff",
            scale: 0.9,
            delay: -1.8,
            duration: 0.6,
            stagger: {
              amount: 3,
              grid: grid,
              from: "center",
            },
          },
        ],
      });
    },
    { scope: container },
  );

    return (
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 935 425"
        className="absolute -top-14 -z-10"
        id="star-grid"
        ref={container}
        style={{
          maskImage: "linear-gradient(black, transparent)",
        }}
      >
        <g className="star-grid-group">
          {[...Array(grid[0])].map((_, i) => {
            return [...Array(grid[1])].map((_, j) => {
              // Calculate angle based on position relative to center
              const angle = Math.atan2(i - centerY, j - centerX) * (180 / Math.PI);
              
              return (
                <path
                  key={i + j}
                  fill="currentColor"
                  opacity=".2"
                  className="star-grid-item"
                  d="M0,4 L4,0 L8,4 L6,4 L6,8 L2,8 L2,4 Z"
                  transform={`translate(${j * 32},${i * 32 + 10}) rotate(${angle + 90}) scale(0.5)`}
                />
              );
            });
          })}
        </g>
      </svg>
    );
  }