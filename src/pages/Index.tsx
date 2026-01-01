import { useState } from "react";
import { 
  Play, 
  Mail, 
  Clapperboard, 
  Zap, 
  Aperture, 
  Scissors, 
  MonitorPlay, 
  Palette 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- DATA: Portfolio (Flattened) ---
const projects = [
  {
    id: 1,
    title: "Urban Night Dreams",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
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
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
  {
    id: 4,
    title: "Tech Product Launch",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
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
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
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
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
];

// --- DATA: About ---
// Using lucide-react icons to represent software
const skills = [
  { name: "Premiere Pro", icon: Clapperboard },
  { name: "After Effects", icon: Zap },
  { name: "DaVinci Resolve", icon: Aperture },
  { name: "Short Form Editor", icon: Scissors },
  { name: "Motion Graphics", icon: MonitorPlay },
  { name: "Color Grading", icon: Palette },
];

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
];

// Pre-filled mailto link
const mailLink = "mailto:editnomecreates07@outlook.com?subject=Work%20Inquiry%20-%20Video%20Editing&body=Hi%20Hariom,%0D%0A%0D%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0D%0A%0D%0AHere%20are%20some%20details:%0D%0A-%20Project%20Type:%20%0D%0A-%20Timeline:%20%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.";

const Index = () => {
  // State for Modal
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ==================== HERO SECTION (HOME) ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-float animation-delay-300" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in">
            “Editing stories, not just videos.”
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-10 opacity-0 animate-fade-in animation-delay-200">
            Crafting Stories.
            <br />
            <span className="text-primary">Frame by Frame</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animation-delay-500">
            <a href="#portfolio">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:glow-crimson"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play size={20} fill="currentColor" />
                  View Portfolio
                </span>
              </Button>
            </a>
            
            <a href={mailLink}>
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-lg font-medium rounded-full border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Mail size={20} />
                  Work With Me
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO SECTION ==================== */}
      <section id="portfolio" className="py-24 bg-background relative border-t border-border/50">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              My Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">
              All Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A collection of my best video editing work across various genres and styles.
              Each project tells a unique story.
            </p>
          </div>

          {/* Projects Grid (No Filter) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
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
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-24 bg-card relative border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-2xl" />
                <div className="relative h-full rounded-2xl overflow-hidden border-2 border-primary/30 animate-pulse-glow">
                  <img
                    src="assets/hariom.png"
                    alt="Hariom - Professional video editor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                About Me
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Hi, I'm Hariom
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
                <p>
                  With over 1.5 years of experience in professional video editing, I've had the privilege 
                  of working with content creators, and individual clients from India. 
                  My passion lies in transforming raw footage into compelling visual narratives.
                </p>
                <p>
                  My creative philosophy centers on understanding the unique story each project needs 
                  to tell. I approach every project with fresh eyes and dedication.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-background/50 border border-border hover:border-primary transition-all duration-300"
                  >
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Work With Me Button (About Section) */}
              <div className="mb-12">
                <a href={mailLink}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto group bg-primary text-primary-foreground text-lg px-8 py-6 rounded-full hover:glow-crimson"
                  >
                    <Mail className="mr-2" size={20} />
                    Work With Me
                  </Button>
                </a>
              </div>

              {/* Skills Grid (Icons + Names only) */}
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold">Technical Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-background/40 border border-border/50 hover:border-primary hover:bg-background/60 transition-all duration-300 group"
                    >
                      <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary mb-2 transition-colors duration-300" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <Footer />

      {/* ==================== VIDEO MODAL ==================== */}
      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ""}
        title={selectedProject?.title || ""}
      />
    </div>
  );
};

export default Index;