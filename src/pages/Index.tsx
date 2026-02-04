import { useState } from "react";
import { 
  Play, 
  Mail, 
  HardDriveDownload, 
  Layers, 
  Wand2, 
  FileCheck2,
  Video as VideoIcon, 
  Palette, 
  Aperture, 
  MonitorPlay 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import BeforeAfter from "@/components/BeforeAfter";
import { Button } from "@/components/ui/button";

// --- DATA: Portfolio ---
// UPDATED: Changed background:#FFF to background:#000 in embedCode styles for Dark Theme
const projects = [
  {
    id: 1,
    title: "Kinetic Manifesto: The Broader Life",
    category: "Mixed Media",
    thumbnail: "/assets/thumbnails/jobs_mac.jpg",
    videoUrl: "/assets/videos/main sfx sequence-.mp4", 
    embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DQlChzRglW9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#000; border:1px solid #333; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
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
    embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DQgoNqDAkPS/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#000; border:1px solid #333; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
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
    embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DT8aduXkzd8/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#000; border:1px solid #333; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
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
    embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DT3be3Ik6Iw/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#000; border:1px solid #333; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
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
    embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DT085Y_E9-H/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#000; border:1px solid #333; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
    description: "A polished, business-focused edit that visualizes the intangible value of SEO...",
    roles: ["Motion Design", "3D Modeling", "Corporate Branding"],
    bgClass: "bg-branding-neon"
  }
];

const processSteps = [
  {
    id: 1,
    title: "Ingest & Org",
    description: "Secure backup, proxy generation, and detailed bin organization.",
    icon: HardDriveDownload
  },
  {
    id: 2,
    title: "Assembly",
    description: "Crafting the narrative arc and selecting the best takes.",
    icon: Layers
  },
  {
    id: 3,
    title: "Polish",
    description: "Color grading, sound design, and motion graphics.",
    icon: Wand2
  },
  {
    id: 4,
    title: "Delivery",
    description: "Exporting in multiple formats optimized for platforms.",
    icon: FileCheck2
  }
];

const skillsList = [
  { name: "Premiere Pro", icon: VideoIcon },
  { name: "After Effects", icon: Layers },
  { name: "Motion Graphics", icon: MonitorPlay },
  { name: "Color Grading", icon: Wand2 },
];

const mailSubject = encodeURIComponent("Project Inquiry: [Your Brand/Project Name]");
const mailBody = encodeURIComponent("Hi Hariom,\n\nI'm reaching out after seeing your portfolio. I'd love to discuss a potential video project with you.\n\nProject Details:\n- Content Type (Reels/Ad/YouTube):\n- Estimated Footage Length:\n- Desired Deadline:\n\nLooking forward to your response!");
const mailLink = `mailto:editnomecreates07@outlook.com?subject=${mailSubject}&body=${mailBody}`;

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

       <section id="portfolio" className="py-24 bg-background relative border-t border-border/50">
         <div className="container mx-auto px-6">
           <div className="text-center mb-20">
             <p className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Selected Works</p>
             <h2 className="font-display text-4xl md:text-6xl font-semibold">Motion Gallery</h2>
           </div>
       
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
             {projects.map((project, index) => (
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
      
      <section className="py-24 bg-card border-t border-border">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Workflow</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold">How I Work</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <div key={step.id} className="relative group">
                        {index !== processSteps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-border group-hover:bg-primary/50 transition-colors duration-500" />
                        )}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:glow-crimson-subtle transition-all duration-300">
                                <step.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
                            </div>
                            <h3 className="font-display text-xl font-medium mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-background border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
                 <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Post Production</p>
                 <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Color Grading</h2>
                 <p className="text-muted-foreground max-w-2xl mx-auto">
                    Drag the slider to see how I transform raw LOG footage into cinematic visuals.
                 </p>
            </div>
            <div className="max-w-4xl mx-auto shadow-2xl rounded-lg">
                <BeforeAfter 
                    rawImage="/assets/raw.jpeg" 
                    gradedImage="/assets/graded.jpeg"
                />
            </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-card relative border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative opacity-0 animate-slide-in-left lg:sticky lg:top-24">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-2xl" />
                <div className="relative h-full rounded-2xl overflow-hidden border-2 border-primary/30 animate-pulse-glow">
                  <img
                    src="/assets/hariom.png"
                    alt="Hariom - Professional video editor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                  About Me
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                  Hi, I'm Hariom
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                    With 1.5 years in the field, I help brands and creators transform raw footage into high-impact visual stories.
                    </p>
                    <p>
                    I specialize in cinematic color grading and dynamic motion graphics designed to elevate content from ordinary to extraordinary.
                    </p>
                </div>
                <a href={mailLink}>
                  <Button className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:glow-crimson group">
                    <Mail className="mr-2" size={18}/> 
                    Let's Create Together
                  </Button>
                </a>
              </div>

              <div>
                 <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                    Software Proficiency
                 </h3>
                 <div className="grid grid-cols-2 gap-4">
                    {skillsList.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                        <div className="text-primary">
                           <skill.icon size={20} />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ""}
        embedCode={selectedProject?.embedCode}
        title={selectedProject?.title || ""}
        description={selectedProject?.description}
        category={selectedProject?.category}
        roles={selectedProject?.roles}
      />
    </div>
  );
};

export default Index;