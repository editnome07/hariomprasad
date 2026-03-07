import { 
  MonitorPlay, 
  Clapperboard, 
  Aperture, 
  Layers, 
  Video, 
  Wand2 
} from "lucide-react";

const Marquee = () => {
  const items = [
    { name: "Adobe Premiere", icon: Video },
    { name: "After Effects", icon: Layers },
    { name: "DaVinci Resolve", icon: Aperture },
    { name: "Sound Design", icon: MonitorPlay },
    { name: "Color Grading", icon: Wand2 },
    { name: "Visual Effects", icon: Clapperboard },
  ];

  return (
    // CHANGE: bg-background -> bg-transparent / bg-black/10
    <div className="relative w-full overflow-hidden bg-black/10 backdrop-blur-sm py-8 border-y border-white/5">
      {/* Gradient Masks - Updated to match transparency */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render 3 times for seamless loop */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex shrink-0 gap-16 pr-16">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-white/20 hover:text-primary/50 transition-colors duration-300">
                <item.icon size={32} />
                <span className="font-display text-2xl font-bold uppercase tracking-widest">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;