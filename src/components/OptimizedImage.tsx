'use client';

import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/client";
import { useState } from "react";

interface OptimizedImageProps {
  field: ImageField;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export default function OptimizedImage({ field, sizes, priority, className }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}>
      <PrismicNextImage
        field={field}
        sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
        priority={priority}
        className={`${className} transition-all duration-300`}
        onLoadingComplete={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
} 