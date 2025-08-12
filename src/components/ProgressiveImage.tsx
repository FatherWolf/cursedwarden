import React from 'react';

interface ProgressiveImageProps {
  webpSrc: string;
  fallbackSrc: string;
  alt: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  webpSrc,
  fallbackSrc,
  alt,
  style,
  loading = 'lazy'
}) => {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        style={style}
        loading={loading}
      />
    </picture>
  );
};

export default ProgressiveImage;