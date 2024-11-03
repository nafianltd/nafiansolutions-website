'use client';

import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import OptimizedImage from "@/components/OptimizedImage";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export type BentoProps = SliceComponentProps<Content.BentoSlice>;

const BentoBox = ({ item, index }: { item: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={clsx(
        "glass-container row-span-3 grid grid-rows-[auto_1fr_auto] gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 relative group cursor-pointer",
        "transition-all duration-300 hover:scale-[1.02]",
        item.wide ? "md:col-span-2" : "md:col-span-1",
      )}
      onClick={() => window.location.href = '/packages'}
    >
      <h3 className="text-2xl">
        <PrismicText field={item.title} />
      </h3>
      <div className="text-slate-300">
        <PrismicRichText field={item.body} />
      </div>
      <OptimizedImage 
        field={item.image}
        className={clsx(
          "mx-auto w-auto transition-all duration-300",
          item.wide ? "max-h-48" : "max-h-40",
        )}
        sizes={item.wide ? 
          "(max-width: 768px) 100vw, 66vw" : 
          "(max-width: 768px) 100vw, 33vw"
        }
      />
      
      {/* Subtle Tooltip */}
      <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="text-sm text-blue-200/80 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-200/10 backdrop-blur-sm">
          Find out more →
        </span>
      </div>
    </motion.div>
  );
};

const BentoHeading = ({ field }: { field: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <PrismicRichText
      field={field}
      components={{
        heading2: ({ children }) => (
          <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
            {children}
          </h2>
        ),
        em: ({ children }) => (
          <em className="animate-glow bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            {children}
          </em>
        ),
      }}
    />
  </motion.div>
);

const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BentoHeading field={slice.primary.heading} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300"
      >
        <PrismicRichText field={slice.primary.body} />
      </motion.div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {slice.primary.boxes.map((item, index) => (
          <BentoBox 
            key={asText(item.title)} 
            item={item} 
            index={index}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default Bento;