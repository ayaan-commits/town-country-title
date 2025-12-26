'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  className?: string;
  containerClassName?: string;
}

// Simple blur placeholder - a small transparent SVG that creates a blur effect
const shimmerBlur = `
data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23262626' width='1' height='1'/%3E%3C/svg%3E
`;

export default function OptimizedImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 skeleton" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-dark-800 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-dark-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        placeholder="blur"
        blurDataURL={shimmerBlur}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
}

// Lazy loading wrapper with intersection observer
interface LazyImageProps extends OptimizedImageProps {
  threshold?: number;
}

export function LazyImage({
  threshold = 0.1,
  ...props
}: LazyImageProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  return (
    <div
      ref={(el) => {
        if (!el || shouldLoad) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setShouldLoad(true);
              observer.disconnect();
            }
          },
          { threshold }
        );

        observer.observe(el);
      }}
      className={props.containerClassName}
    >
      {shouldLoad ? (
        <OptimizedImage {...props} />
      ) : (
        <div className="skeleton w-full h-full" />
      )}
    </div>
  );
}
