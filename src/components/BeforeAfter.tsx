import { useState, MouseEvent, TouchEvent, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  beforeMedia: string;
  afterMedia: string;
  mediaType?: "image" | "video";
  className?: string;
}

const BeforeAfter = ({ beforeMedia, afterMedia, mediaType = "image", className }: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  // Keep videos in sync in case one buffers longer than the other
  useEffect(() => {
    if (mediaType !== "video") return;
    const beforeVid = beforeVideoRef.current;
    const afterVid = afterVideoRef.current;
    
    if (!beforeVid || !afterVid) return;

    const syncVideos = () => {
      // If the videos drift apart by more than 0.3 seconds, snap them back together
      if (Math.abs(afterVid.currentTime - beforeVid.currentTime) > 0.3) {
        beforeVid.currentTime = afterVid.currentTime;
      }
    };

    afterVid.addEventListener('timeupdate', syncVideos);
    return () => afterVid.removeEventListener('timeupdate', syncVideos);
  }, [mediaType]);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-lg overflow-hidden border border-border cursor-ew-resize select-none touch-none",
        "group hover:border-primary transition-colors duration-300",
        className
      )}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onMouseMove={onMouseMove}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchMove={onTouchMove}
      onClick={(e) => handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
    >
      {/* 1. Background Layer: Graded Media (Full Width) */}
      {mediaType === "video" ? (
        <video
          ref={afterVideoRef}
          src={afterMedia}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      ) : (
        <img
          src={afterMedia}
          alt="Color Graded"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}
      <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 text-xs font-bold rounded backdrop-blur-sm z-10">
        GRADED
      </div>

      {/* 2. Foreground Layer: Raw Media (Clipped) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
        }}
      >
        {mediaType === "video" ? (
          <video
            ref={beforeVideoRef}
            src={beforeMedia}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img
            src={beforeMedia}
            alt="Raw Footage"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 text-xs font-bold rounded backdrop-blur-sm border border-white/10">
          RAW / LOG
        </div>
      </div>

      {/* 3. The Slider Handle & Line */}
      <div
        className="absolute inset-y-0 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Vertical Line */}
        <div className="absolute inset-y-0 -ml-[1px] w-[2px] bg-primary shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
        
        {/* Handle Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary p-1.5 rounded-full shadow-[0_0_20px_hsla(var(--crimson),0.5)] border border-white/20">
          <GripVertical size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;