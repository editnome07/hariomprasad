import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
  onClick: () => void;
  index: number;
  bgClass?: string; // For the section-specific background animations
}

const ProjectCard = ({ 
  title, 
  category, 
  videoUrl, 
  thumbnail, 
  onClick, 
  index, 
  bgClass 
}: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Check if it's a local file for the grid preview functionality
  const isLocalVideo = videoUrl.toLowerCase().endsWith('.mp4') || videoUrl.toLowerCase().endsWith('.webm');

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay blocked or video not loaded:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer",
        "bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-500",
        "hover:border-primary/40 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]",
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* 1. SECTION-SPECIFIC BACKGROUND ANIMATION LAYER */}
      {/* Sits behind the image and video but inside the card container */}
      <div className={cn(
        "absolute inset-0 -z-10 pointer-events-none transition-opacity duration-500",
        bgClass,
        isHovered ? "opacity-100" : "opacity-40"
      )} />

      {/* 2. STATIC THUMBNAIL (Visible by default) */}
      <img
        src={thumbnail}
        alt={title}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
          "group-hover:scale-110",
          isHovered && isLocalVideo ? "opacity-0" : "opacity-100"
        )}
      />

      {/* 3. MUTED VIDEO PREVIEW (Visible on hover) */}
      {isLocalVideo && (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* 4. CINEMATIC OVERLAYS */}
      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Top light sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* 5. CENTER PLAY BUTTON (Glassmorphism Style) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={cn(
          "p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl",
          "transform transition-all duration-500 ease-out",
          "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
        )}>
          <Play size={28} className="text-white fill-white ml-1" />
        </div>
      </div>

      {/* 6. PROJECT INFO (Bottom Alignment) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[1px] w-4 bg-primary" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-foreground/90 bg-primary/20 px-2 py-0.5 rounded backdrop-blur-sm">
            {category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">
          {title}
        </h3>

        {/* Dynamic Detail (Appears on hover) */}
        <div className="mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <p className="text-[11px] text-white/50 uppercase tracking-widest flex items-center gap-2">
            Click to View Project
            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          </p>
        </div>
      </div>

      {/* 7. EDGE BORDER GLOW */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;