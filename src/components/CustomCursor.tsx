import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".project-card") ||
        target.closest(".magnetic-target")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {/* 
         THEME UPDATE: "The Keyframe"
         Shape: Rotated Square (Diamond) representing an After Effects Keyframe.
         Color: Primary (Crimson) with a glow.
      */}
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 bg-primary transition-all duration-200 ease-out will-change-transform",
          // Base Shape: Diamond (rotate-45)
          "rotate-45 shadow-[0_0_15px_rgba(220,20,60,0.6)]", 
          
          // Hover State: Hollow Diamond (Scale up, remove fill, add border)
          isHovered 
            ? "h-8 w-8 bg-transparent border-2 border-primary" 
            : "h-3 w-3",
          
          // Click State: Rotate 90deg (feedback) and scale down
          clicked && "scale-50 rotate-90"
        )}
      />
      
      {/* Center dot for precision when hovered (Target Reticle feel) */}
      <div className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full transition-all duration-200",
          isHovered ? "h-1.5 w-1.5 opacity-100" : "h-0 w-0 opacity-0"
      )} />
    </div>
  );
};

export default CustomCursor;