import { useState } from "react";
import { 
  Play, 
  Mail, 
  HardDriveDownload, 
  Layers, 
  Wand2, 
  FileCheck2 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import BeforeAfter from "@/components/BeforeAfter";
import Marquee from "@/components/Marquee"; 
import { Button } from "@/components/ui/button";

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

const mailSubject = encodeURIComponent("Project Inquiry: [Your Brand/Project Name]");
const mailBody = encodeURIComponent("Hi Hariom,\n\nI'm reaching out after seeing your portfolio. I'd love to discuss a potential video project with you.\n\nProject Details:\n- Content Type (Reels/Ad/YouTube):\n- Estimated Footage Length:\n- Desired Deadline:\n\nLooking forward to your response!");
const mailLink = `mailto:editnomecreates07@outlook.com?subject=${mailSubject}&body=${mailBody}`;

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-transparent cursor-default">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-float animation-delay-300" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in">
            “Editing stories, not just videos.”
          </p>

          <div className="overflow-hidden mb-10">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight opacity-0 animate-reveal-up animation-delay-200">
              Crafting Stories.
              <br />
              <span className="text-primary text-gradient-crimson">Frame by Frame</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in animation-delay-500">
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
                className="group px-8 py-6 text-lg font-medium rounded-full border-border hover:border-primary hover:text-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
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

      <Marquee />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-transparent relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Selected Works</p>
            <div className="overflow-hidden">
               <h2 className="font-display text-4xl md:text-6xl font-semibold animate-reveal-up">Motion Gallery</h2>
            </div>
          </div>
      
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  thumbnail={project.thumbnail}
                  videoUrl={project.videoUrl} 
                  onClick={() => setSelectedProject(project)}
                  index={index}
                  bgClass={project.bgClass}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Workflow Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm border-t border-white/5">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Workflow</p>
                <div className="overflow-hidden">
                   <h2 className="font-display text-3xl md:text-4xl font-semibold animate-reveal-up">How I Work</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <div key={step.id} className="relative group">
                        {index !== processSteps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-border group-hover:bg-primary/50 transition-colors duration-500" />
                        )}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/80 border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:glow-crimson-subtle transition-all duration-300 transform">
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

      {/* Post Production Section - 3D Tilted & Quirky Shape */}
      <section className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                 <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Post Production</p>
                 <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Color Grading</h2>
                 <p className="text-muted-foreground max-w-2xl mx-auto">
                    Hover to interact. Drag the slider to see how I transform raw LOG footage into cinematic visuals.
                 </p>
            </div>
            
            {/* 3D Perspective Container */}
            <div className="max-w-4xl mx-auto [perspective:1200px]">
                
                {/* 3D Tilted Frame with Quirky Asymmetrical Border Radius */}
                <div className="relative p-2 sm:p-4 bg-gradient-to-br from-neutral-800 to-neutral-950 shadow-[-20px_25px_40px_-10px_rgba(0,0,0,0.9)] border border-white/10 transition-transform duration-700 ease-out [transform-style:preserve-3d] [transform:rotateY(-15deg)_rotateX(10deg)_rotateZ(-2deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)_rotateZ(0deg)] rounded-[2rem_5rem_1.5rem_4rem]">
                    
                    {/* The Screen / Inner Quirky Bevel */}
                    <div className="relative overflow-hidden bg-black border border-black/80 shadow-[inset_0_5px_20px_rgba(0,0,0,1)] rounded-[1.5rem_4.5rem_1rem_3.5rem] group">
                        
                        {/* 3D Glass Glare */}
                        <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/10 to-transparent opacity-30 z-20 pointer-events-none rounded-t-[1.5rem_4.5rem]" />
                        
                        <BeforeAfter 
                            beforeMedia="/assets/videos/raw.mp4" 
                            afterMedia="/assets/videos/graded.mp4"
                            mediaType="video"
                            className="border-none !rounded-none"
                        />
                    </div>
                    
                    {/* Ambient 3D Crimson Glow underneath */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/30 blur-[50px] -z-10 [transform:translateZ(-50px)] transition-opacity duration-700 group-hover:opacity-50"></div>
                </div>

                {/* Compact Cinematic Caption Pill */}
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-3 sm:gap-4 text-xs sm:text-sm bg-black/40 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-md shadow-xl transition-all hover:border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="font-medium text-foreground/90 tracking-wide">Sony S-Log3</span>
                        </div>
                        <span className="w-[1px] h-4 bg-white/15"></span>
                        <span className="text-muted-foreground font-medium">
                            From flat to cinematic
                        </span>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* About Section - 2D Tech/Editor Frame */}
      <section id="about" className="py-24 bg-black/20 backdrop-blur-sm relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* NEW PHOTO DESIGN: Editor UI & Sliding Layers (No tilt) */}
            <div className="relative opacity-0 animate-slide-in-left lg:sticky lg:top-24 pt-4 pl-4">
              <div className="relative aspect-[4/5] max-w-sm mx-auto group">
                
                {/* Layer 1: Sliding Grid Background (Moves out on hover) */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-primary/30 bg-black/80 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, hsl(var(--crimson)) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                </div>

                {/* Layer 2: Main Image Frame */}
                <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(220,20,60,0.2)]">

                  {/* Bottom Xiaomi/Leica Watermark Bar */}
<div className="absolute bottom-0 left-0 w-full h-12 md:h-14 bg-black/20 backdrop-blur-sm translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-30 border-t border-white/5 flex items-center justify-between px-3 md:px-5">                      {/* Left: Device Name */}
                      <span className="font-sans font-bold text-xs md:text-sm tracking-wide text-white">
                        xiaomi 15 Ultra
                      </span>
                      
                      {/* Right: Leica Badge + Camera Specs */}
                      <div className="flex items-center gap-2 md:gap-3">
                          {/* Leica Badge (CSS Replica) */}
                          <div className="bg-[#e2001a] flex items-center justify-center rounded-full w-6 h-6 md:w-8 md:h-8 shadow-inner">
                              <span className="text-white text-[6px] md:text-[8px] font-serif font-bold italic tracking-wider">Leica</span>
                          </div>
                          
                          {/* Vertical Divider */}
                          <div className="w-[1px] h-4 md:h-5 bg-white/20"></div>
                          
                          {/* Camera EXIF Data */}
                          <span className="font-sans text-[9px] md:text-[11px] text-white font-medium tracking-wide">
                            100mm <span className="ml-1 md:ml-2">f/2.6</span> <span className="ml-1 md:ml-2">1/50s</span> <span className="ml-1 md:ml-2">ISO800</span>
                          </span>
                      </div>
                  </div>

                  {/* Subtle Focus Reticle in the center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/20 rounded-full z-20 opacity-0 transition-all duration-700 scale-150 group-hover:scale-100 group-hover:opacity-100 flex items-center justify-center pointer-events-none">
                      <div className="w-1 h-1 bg-primary/80 rounded-full" />
                      <div className="absolute top-0 w-[1px] h-2 bg-white/40" />
                      <div className="absolute bottom-0 w-[1px] h-2 bg-white/40" />
                      <div className="absolute left-0 w-2 h-[1px] bg-white/40" />
                      <div className="absolute right-0 w-2 h-[1px] bg-white/40" />
                  </div>

                  {/* The Image (Starts slightly moody, blooms into vibrant color on hover) */}
                  <img
                    src="/assets/hariom.jpg"
                    alt="Hariom - Professional video editor"
                    className="w-full h-full object-cover transition-all duration-700 ease-out filter grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
                  />
                  
                  {/* Bottom fade gradient to ground the image (hidden when watermark slides in) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                  About Me
                </p>
                <div className="overflow-hidden">
                    <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 animate-reveal-up">
                    Hi, I'm Hariom
                    </h2>
                </div>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ""}
        title={selectedProject?.title || ""}
        description={selectedProject?.description}
        category={selectedProject?.category}
        roles={selectedProject?.roles}
      />
    </div>
  );
};

export default Index;