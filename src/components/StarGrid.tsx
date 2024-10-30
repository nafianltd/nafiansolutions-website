// src/components/StarGrid.tsx
// "use client"



"use client"
import { useRef } from 'react';

// export default function StarGrid() {
//     const grid = [14, 30] as const;
//     const container = useRef<SVGSVGElement>(null);

//     return (
//        <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 935 425"
//         className="absolute -top-14 -z-10"
//         id="star-grid"
//         ref={container}
//         // opacity={0}
//         style={{
//           maskImage: "linear-gradient(black, transparent)",
//         }}
//       >
//         <g className="star-grid-group">
//           {[...Array(grid[0])].map((_, i) => {
//             return [...Array(grid[1])].map((_, j) => {
//               return (
//                 <path
//                   key={i + j}
//                   fill="currentColor"
//                   opacity=".2"
//                   className="star-grid-item"
//                   d="M0,4 L4,0 L8,4 L6,4 L6,8 L2,8 L2,4 Z"
//                   transform={`translate(${j * 32},${i * 32 + 10}) scale(0.5)`}
//                 />
//               );
//             });
//           })}
//         </g>
//       </svg>
//     );
//   }


export default function StarGrid() {
    const grid = [14, 30] as const;
    const container = useRef<SVGSVGElement>(null);
    
    // Calculate center points
    const centerX = grid[1] / 2;
    const centerY = grid[0] / 2;

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