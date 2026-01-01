import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Reels",
  "Cinematic",
  "Commercials",
  "YouTube",
  "Social Media",
];

const projects = [
  {
    id: 1,
    title: "Urban Night Dreams",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Brand Story - Fashion Week",
    category: "Commercials",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    videoUrl: "https://vimeo.com/347119375",
  },
  {
    id: 3,
    title: "Fitness Motivation Reel",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Tech Product Launch",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Restaurant Social Campaign",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    videoUrl: "https://vimeo.com/347119375",
  },
  {
    id: 6,
    title: "Wedding Highlights",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 7,
    title: "Travel Vlog Intro",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    videoUrl: "https://vimeo.com/347119375",
  },
  {
    id: 8,
    title: "Dance Performance Reel",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in">
            My Work
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 opacity-0 animate-fade-in animation-delay-200">
            Portfolio
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            A collection of my best video editing work across various genres and styles.
            Each project tells a unique story.
          </p>
        </div>
      </section>

      {/* Filter Section */}
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
                    ? "bg-primary text-primary-foreground border-primary glow-crimson-subtle"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                thumbnail={project.thumbnail}
                onClick={() => setSelectedProject(project)}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ""}
        title={selectedProject?.title || ""}
      />

      <Footer />
    </div>
  );
};

export default Portfolio;
