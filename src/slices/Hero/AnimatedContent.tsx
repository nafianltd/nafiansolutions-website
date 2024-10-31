"use client";

import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/ButtonLink";
import { PrismicNextImage } from "@prismicio/next";
import { Content, isFilled } from "@prismicio/client";
import StarGrid from "@/components/StarGrid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useRef } from "react";


export type AnimatedContentProps = SliceComponentProps;

export default function AnimatedContent({ slice }: { slice: Content.HerooSlice }) {
    const container = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    gsap.registerPlugin(useGSAP);
    
    useGSAP(
        () => {
          if (prefersReducedMotion) {
            gsap.set(
              ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
              { opacity: 1 },
            );
            return;
          }
    
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
          tl.fromTo(
            ".hero__heading",
            { 
              y: -30,
              scale: 0.9,
              opacity: 0 
            },
            { 
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.2)"
            },
          );
    
          tl.fromTo(
            ".hero__body",
            { 
              y: 30,
              opacity: 0 
            },
            { 
              y: 0,
              opacity: 1,
              duration: 1,
            },
            "-=0.8"
          );
    
          tl.fromTo(
            ".hero__button",
            { 
              scale: 0.5,
              opacity: 0 
            },
            { 
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "back.out(1.7)"
            },
            "-=0.6"
          );
    
          tl.fromTo(
            ".hero__image",
            { 
              y: 60,
              opacity: 0 
            },
            { 
              y: 0,
              opacity: 1,
              duration: 1.4,
              ease: "power2.out"
            },
            "-=0.4"
          );
    
          tl.fromTo(
            ".hero__glow",
            { 
              scale: 0.7,
              opacity: 0 
            },
            { 
              scale: 1,
              opacity: 1,
              duration: 1.6,
              ease: "power1.inOut"
            },
            "-=1.2"
          );
        },
        { scope: container },
      );


    return (
        <div className="relative" ref={container}>
            <StarGrid />
            {isFilled.richText(slice.primary.heading) && (
            <h1 className="hero__heading text-balance text-5xl font-medium opacity-0 md:text-7xl">
                <PrismicText field={slice.primary.heading} /> 
            </h1>
            )}


            {isFilled.richText(slice.primary.body) && (
            <div className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300 opacity-0">
                <PrismicRichText field={slice.primary.body} /> 
            </div>
            )}
            {isFilled.link(slice.primary.button_link) && (
            <ButtonLink className="hero__button mt-8" field={slice.primary.button_link}>
                {slice.primary.button_label}
            </ButtonLink>
            )}

            {isFilled.image(slice.primary.image) && (
            <div className="hero__image glass-container mt-16 w-fit mx-auto max-w-[70%] md:max-w-[60%] opacity-0">
                <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
                <PrismicNextImage className="rounded-lg" field={slice.primary.image}
                priority
                sizes="100vw"
                /> 
            </div>
            )}
        </div>
    )
    }
