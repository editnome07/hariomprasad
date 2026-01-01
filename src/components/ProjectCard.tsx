import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  thumbnail: string;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ title, category, thumbnail, onClick, index }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative aspect-video rounded-lg overflow-hidden cursor-pointer",
        "bg-card border border-border",
        "transition-all duration-500",
        "hover:border-primary hover:glow-crimson-subtle hover:scale-[1.02]",
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="p-4 rounded-full bg-primary/90 backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide bg-primary/20 text-primary rounded-full mb-2 backdrop-blur-sm">
          {category}
        </span>
        <h3 className="font-display text-lg font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
