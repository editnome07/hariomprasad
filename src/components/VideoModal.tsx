import { useEffect, useRef } from "react";
import { X, Wrench } from "lucide-react"; // Removed Volume2 and Share2
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description?: string;
  category?: string;
  roles?: string[];
}

const VideoModal = ({ isOpen, onClose, videoUrl, title, description, category, roles }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(e => console.log("Playback blocked:", e));
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 animate-fade-in">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl h-full md:h-[90vh] bg-neutral-950 border-0 md:border md:border-white/10 rounded-none md:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Fixed Video Section */}
        <div className="relative w-full md:w-[45%] bg-black flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 shrink-0">
          <div className="absolute top-4 right-4 z-50 md:hidden">
            <button onClick={onClose} className="p-2 bg-black/50 rounded-full text-white"><X size={24} /></button>
          </div>
          
          <video 
            ref={videoRef}
            src={videoUrl} 
            className="h-full w-full object-contain" 
            controls 
            playsInline
          />
        </div>

        {/* Scrollable Content Section */}
        <div className="flex-1 flex flex-col min-h-0 bg-neutral-900/50">
          <div className="hidden md:flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="font-display text-xl font-bold">{title}</h2>
            <button onClick={onClose} className="hover:text-primary transition-colors"><X size={24} /></button>
          </div>

          <ScrollArea className="flex-1 p-6 md:p-10">
            <div className="space-y-8 pb-10">
              <div className="md:hidden">
                <h2 className="font-display text-2xl font-bold mb-2">{title}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary hover:bg-primary text-white border-0">{category}</Badge>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Overview</h4>
                <p className="text-neutral-400 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              {roles && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Post-Production Scope</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roles.map((role) => (
                      <div key={role} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <Wrench size={16} className="text-primary" />
                        <span className="text-sm text-neutral-300">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;