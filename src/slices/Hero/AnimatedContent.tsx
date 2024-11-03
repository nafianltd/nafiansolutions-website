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
import { HiChevronDoubleRight } from "react-icons/hi";
import OptimizedImage from "@/components/OptimizedImage";


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
            <ButtonLink 
                className="hero__button mt-8 opacity-0 relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full bg-blue-600/80 hover:bg-blue-500/90 transition-colors duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group" 
                field={slice.primary.button_link}
            >
                <span className="flex items-center gap-2 relative z-10 text-white font-medium">
                    <HiChevronDoubleRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    {slice.primary.button_label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </ButtonLink>
            )}

            {isFilled.image(slice.primary.image) && (
            <div className="hero__image glass-container mt-20 w-fit mx-auto max-w-[85%] md:max-w-[75%] opacity-0">
                <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
                <OptimizedImage 
                    field={slice.primary.image}
                    priority={true}
                    sizes="100vw"
                    className="rounded-lg px-6 pt-8 pb-6"
                />
            </div>
            )}
        </div>
    )
    }
