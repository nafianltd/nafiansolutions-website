// src/components/ButtonLink.tsx

import { PrismicNextLink } from "@prismicio/next";
import type { ComponentProps } from "react";
import clsx from "clsx";

type LinkProps = ComponentProps<typeof PrismicNextLink>;

export default function ButtonLink({
  className,
  children,
  ...restProps
}: LinkProps) {
  const isNavButton = className?.includes('nav-cta-button');
  
  return (
    <PrismicNextLink
      className={clsx(
        "relative inline-flex h-fit w-fit",
        isNavButton ? 
          "inline-flex min-h-11 items-center relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-200 transition-colors duration-300" 
        : 
          "rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2",
        className
      )}
      {...restProps}
    >
      {children}
    </PrismicNextLink>
  );
}
