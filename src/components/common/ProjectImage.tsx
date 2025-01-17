// Usage example with dynamic imports
import { Suspense } from "react";
import { ImageLoader } from "./ImageLoader";

interface ProjectImageProps {
  imagePath: string;
}

export const ProjectImage = ({ imagePath }: ProjectImageProps) => {
  const imageUrl = new URL(
    `../../assets/Projects/${imagePath}`,
    import.meta.url
  ).href;

  return (
    <Suspense
      fallback={<div className="animate-pulse bg-gray-200 h-48 w-full" />}>
      <ImageLoader
        src={imageUrl}
        alt="Project preview"
        className="w-full h-48 object-cover"
      />
    </Suspense>
  );
};
