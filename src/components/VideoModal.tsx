import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const getEmbedUrl = (url: string): string => {
  // YouTube
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1`;
  }

  // Vimeo
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }

  return url;
};

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "animate-fade-in"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl mx-4 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        {/* Video Title */}
        <h3 className="absolute -top-12 left-0 font-display text-xl text-foreground">
          {title}
        </h3>

        {/* Video Container */}
        <div className="relative aspect-video bg-card rounded-lg overflow-hidden border border-border glow-crimson-subtle">
          <iframe
            src={getEmbedUrl(videoUrl)}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
