import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import { cn } from "@/lib/utils";

const categories = ["All", "Mixed Media", "Motion Graphics", "Reel Type", "YouTube Type", "Business"];

const projects = [
  { id: 1, title: "Kinetic Manifesto: The Broader Life", category: "Mixed Media", aspect: "vertical", thumbnail: "/assets/thumbnails/jobs_mac.jpg", videoUrl: "/assets/videos/main sfx sequence-.mp4", roles: ["Mixed Media", "Sound Design"] },
  { id: 2, title: "Retention Mechanics: Art of the Hook", category: "Motion Graphics", aspect: "vertical", thumbnail: "/assets/thumbnails/iman_hook.jpg", videoUrl: "/assets/videos/Iman Gadhi -0.2.mp4", roles: ["Motion Graphics", "Retention"] },
  { id: 3, title: "Cinematic Story Telling Edit", category: "Story Telling", aspect: "vertical", thumbnail: "/assets/thumbnails/THARUN.jpeg", videoUrl: "/assets/videos/Tharun.mp4", roles: ["Transitions", "Sound Design", "Illustrative Storytelling"] },
  { id: 4, title: "UI Concept Animation", category: "UI Animation", aspect: "vertical", thumbnail: "/assets/thumbnails/ui_animation.jpg", videoUrl: "/assets/videos/ui_animation.mp4", roles: ["UI Animation", "Motion Graphics", "Interface Design"] },
  { id: 5, title: "Grayscale Collage: The Builder’s Legacy", category: "Rhythmic Editing", aspect: "vertical", thumbnail: "/assets/thumbnails/gates_legacy.jpg", videoUrl: "/assets/videos/metro media sfx-.mp4", roles: ["Rhythmic Editing", "Texture Design", "3D"] },
  { id: 6, title: "Digital Presence: Awareness Engine", category: "Business", aspect: "vertical", thumbnail: "/assets/thumbnails/branding_awareness.jpg", videoUrl: "/assets/videos/Digital Presence.mp4", roles: ["3D", "Marketing"] },
  { id: 7, title: "Talking Head Explainer Edit", category: "YouTube Type", aspect: "horizontal", thumbnail: "/assets/thumbnails/abhaya_edits.jpg", videoUrl: "/assets/videos/abhaya_edits.mp4", roles: ["Narrative", "Soundscapes"] },
  { id: 8, title: "High-Quality Content Edit", category: "YouTube Type", aspect: "horizontal", thumbnail: "/assets/thumbnails/10k_final.jpg", videoUrl: "/assets/videos/10k_final.mp4", roles: ["Fast Editing", "Multi-cam"] }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <section className="pt-32 pb-16 container mx-auto px-6 text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">Gallery</p>
        <h1 className="font-display text-5xl font-semibold mb-12 animate-fade-in animation-delay-200">Portfolio</h1>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300",
                activeCategory === cat ? "bg-primary border-primary text-white" : "border-white/10 text-muted-foreground hover:border-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={cn(
                "w-full",
                project.aspect === "horizontal" ? "lg:col-span-2" : "lg:col-span-1"
              )}
            >
              <ProjectCard
                {...project}
                aspectRatio={project.aspect as "vertical" | "horizontal"}
                onClick={() => setSelectedProject(project)}
                index={index}
              />
            </div>
          ))}
        </div>
      </section>

      <VideoModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} {...selectedProject} />
      <Footer />
    </div>
  );
};

export default Portfolio;