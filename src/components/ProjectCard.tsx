import { useRef, useState, MouseEvent } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

interface ProjectCardProps {
  title: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
  onClick: () => void;
  index: number;
  bgClass?: string;
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Robust check for video files
  const isLocalVideo = 
    videoUrl && (
    videoUrl.toLowerCase().includes('.mp4') || 
    videoUrl.toLowerCase().includes('.webm') || 
    videoUrl.toLowerCase().includes('.mov')
    );

  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (video) {
      // Browsers require mute for autoplay
      video.muted = true; 
      video.currentTime = 0; // Optional: restart video on hover
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay prevented:", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !cardRef.current || !isLocalVideo) return;
    
    // Only scrub if the video has valid duration info
    if (isNaN(videoRef.current.duration)) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, x / width));
    
    videoRef.current.currentTime = videoRef.current.duration * percentage;
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn(
        // 'project-card' class used by CustomCursor
        "project-card group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-none",
        "bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-500",
        "hover:border-primary/40 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]",
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Dynamic Background Animation */}
      <div className={cn(
        "absolute inset-0 -z-10 pointer-events-none transition-opacity duration-500",
        bgClass,
        isHovered ? "opacity-100" : "opacity-40"
      )} />

      {/* Thumbnail Image */}
      <img
        src={thumbnail}
        alt={title}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
          "group-hover:scale-110",
          isHovered && isLocalVideo ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Video Player (Hidden until hover) */}
      {isLocalVideo && (
        <video
          ref={videoRef}
          src={videoUrl}
          muted // CRITICAL for autoplay
          playsInline // CRITICAL for mobile/safari
          loop={false}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <MagneticButton strength={40} className="pointer-events-auto">
          <div className={cn(
            "p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl",
            "transform transition-all duration-500 ease-out",
            "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
          )}>
            <Play size={28} className="text-white fill-white ml-1" />
          </div>
        </MagneticButton>
      </div>

      {/* Info Section */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[1px] w-4 bg-primary" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-foreground/90 bg-primary/20 px-2 py-0.5 rounded backdrop-blur-sm">
            {category}
          </span>
        </div>
        
        <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">
          {title}
        </h3>

        {/* Progress Bar Hint */}
        <div className="mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
             <div className="h-full bg-primary animate-pulse w-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;