"use client";

import { Content } from "@prismicio/client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";

import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
  FaAws,
  FaReact,
  FaPython,
} from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { TbSql } from "react-icons/tb";


export default function AnimatedContent({
  slice,
}: {
  slice: Content.IntegrationsSlice & {
    primary: {
      icon: { icon: string | null }[];
    };
  };
}) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const icons: Record<string, JSX.Element> = {
    AWS: <FaAws />,
    SQL: <TbSql />,
    Figma: <FaFigma />,
    React: <FaReact />,
    Python: <FaPython />,
    "Next.js": <TbBrandNextjs />,
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div
      className="mt-20 flex flex-col items-center justify-center md:flex-row"
      ref={container}
    >
      {slice.primary.icon.map((item, index) => (
        <React.Fragment key={index}>
          {index === Math.floor(slice.primary.icon.length / 2) && (
            <>
              <div className="w-[35%] h-[35%] md:w-[20%] md:h-[20%] pulsing-logo opacity-70 shrink-0 flex items-center justify-center self-center my-0">
                <StylizedLogoMark className="w-full h-full" />
              </div>
              <div className="signal-line rotate-180 bg-gradient-to-t my-0" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center self-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl my-0">
            {item.icon && icons[item.icon]}
          </div>
          {index !== slice.primary.icon.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(slice.primary.icon.length / 2)
                  ? "rotate-180"
                  : "rotate-0",
                "my-0"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}