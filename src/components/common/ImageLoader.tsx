// ImageLoader.tsx
import { useState, useEffect } from "react";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLoader = ({ src, alt, className }: ImageLoaderProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
    img.onerror = () => {
      setError(true);
      setLoading(false);
    };
  }, [src]);

  if (error) {
    return <div className="text-red-500">Failed to load image</div>;
  }

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse w-full h-full bg-gray-200" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? "invisible" : "visible"}`}
        loading="lazy"
      />
    </div>
  );
};
