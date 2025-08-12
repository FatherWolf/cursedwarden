// Utility for progressive image loading with WebP support and fallbacks
export const createImageSrcSet = (baseName: string, webpPath: string, fallbackPath: string) => {
  return {
    webpSrc: webpPath,
    fallbackSrc: fallbackPath,
    alt: baseName
  };
};

// Check if browser supports WebP
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Progressive Image Component Props
export interface ProgressiveImageProps {
  webpSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
}