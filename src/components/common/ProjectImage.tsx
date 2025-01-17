// Usage example with dynamic imports
import { Suspense } from "react";
import { ImageLoader } from "./ImageLoader";

interface ProjectImageProps {
  imagePath: string;
}

export const ProjectImage = ({ imagePath }: ProjectImageProps) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            backgroundColor: "gray",
            animation: "animate-pulse 1s infinite",
          }}
        />
      }>
      <ImageLoader src={imagePath} alt="Project preview" />
    </Suspense>
  );
};
