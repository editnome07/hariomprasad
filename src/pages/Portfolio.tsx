import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Mixed Media",
  "Motion Graphics",
  "Rhythmic Editing",
  "Podcast Visualization",
  "Business",
];

const projects = [
  {
    id: 1,
    title: "Kinetic Manifesto: The Broader Life",
    category: "Mixed Media",
    thumbnail: "/assets/thumbnails/jobs_mac.jpg",
    videoUrl: "/assets/videos/main sfx sequence-.mp4", 
    description: "A high-energy inspirational sequence blending retro aesthetics with modern kinetic typography...",
    roles: ["Mixed Media", "Typography", "Sound Design"],
    bgClass: "bg-jobs-kinetic"
  },
  {
    id: 2,
    title: "Retention Mechanics: The Art of the Hook",
    category: "Motion Graphics",
    thumbnail: "/assets/thumbnails/iman_hook.jpg",
    videoUrl: "/assets/videos/Iman Gadhi -0.2.mp4",
    description: "A masterclass in retention-focused editing designed for social media growth...",
    roles: ["Motion Graphics", "Object Tracking", "Retention Strategy"],
    bgClass: "bg-iman-orbital"
  },
  {
    id: 3,
    title: "Grayscale Collage: The Builder’s Legacy",
    category: "Rhythmic Editing",
    thumbnail: "/assets/thumbnails/gates_legacy.jpg",
    videoUrl: "/assets/videos/metro media sfx-.mp4",
    description: "An atmospheric, documentary-style short featuring a gritty metro aesthetic...",
    roles: ["Rhythmic Editing", "Texture Design", "Color Grading"],
    bgClass: "bg-gates-grain"
  },
  {
    id: 4,
    title: "Visualized Audio: The Longevity Protocol",
    category: "Podcast Visualization",
    thumbnail: "/assets/thumbnails/huberman_protocol.jpg",
    videoUrl: "/assets/videos/GETTING OLDER IS THE BEST.mp4",
    description: "A seamless visualization of long-form audio into short-form content...",
    roles: ["VFX", "3D Elements", "Illustrative Storytelling"],
    bgClass: "bg-huberman-pulse"
  },
  {
    id: 5,
    title: "Digital Presence: The Awareness Engine",
    category: "Business",
    thumbnail: "/assets/thumbnails/branding_awareness.jpg",
    videoUrl: "/assets/videos/Building a Business.mp4",
    description: "A polished, business-focused edit that visualizes the intangible value of SEO...",
    roles: ["Motion Design", "3D Modeling", "Corporate Branding"],
    bgClass: "bg-branding-neon"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    // CHANGE: Transparent background
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in">
            Gallery
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 opacity-0 animate-fade-in animation-delay-200">
            Portfolio
          </h1>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in animation-delay-400">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                thumbnail={project.thumbnail}
                videoUrl={project.videoUrl} 
                onClick={() => setSelectedProject(project)}
                index={index}
                bgClass={project.bgClass}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ""}
        title={selectedProject?.title || ""}
        description={selectedProject?.description}
        category={selectedProject?.category}
        roles={selectedProject?.roles}
      />
      <Footer />
    </div>
  );
};

export default Portfolio;