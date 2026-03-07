import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Cpu, 
  HardDrive, 
  Monitor, 
  Zap, 
  Quote, 
  Mail, 
  Video, 
  Layers, 
  Palette, 
  Wand2, 
  Aperture, 
  MonitorPlay 
} from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skillsList = [
  { name: "Premiere Pro", icon: Video },
  { name: "After Effects", icon: Layers },
  { name: "DaVinci Resolve", icon: Palette },
  { name: "Final Cut Pro", icon: Aperture },
  { name: "Motion Graphics", icon: MonitorPlay },
  { name: "Color Grading", icon: Wand2 },
];

const hardware = [
    { icon: Cpu, label: "Processor", value: "Apple M2 Max / Ryzen 9" },
    { icon: Zap, label: "RAM", value: "64GB Unified Memory" },
    { icon: Monitor, label: "Display", value: "Dual 4K Color Calibrated" },
    { icon: HardDrive, label: "Storage", value: "10TB NVMe RAID Array" },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Content Creator (1M+ Subs)",
    quote: "Hariom has an incredible sense of pacing. He turned my 2 hours of raw footage into a 10-minute masterpiece."
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, TechFlow",
    quote: "Professional, fast, and the color grading was exactly on brand. Highly recommended for commercial work."
  },
  {
    name: "Mike Chen",
    role: "Indie Filmmaker",
    quote: "He doesn't just cut video; he understands story. The sound design added a whole new layer of depth."
  }
];

const About = () => {
  const mailSubject = encodeURIComponent("Collaboration Inquiry: Creative Project");
  const mailBody = encodeURIComponent("Hi Hariom,\n\nI was reading your about page and was impressed by your workflow. I'd love to chat about a project I have in mind.\n\nBest,");
  const mailLink = `mailto:editnomecreates07@outlook.com?subject=${mailSubject}&body=${mailBody}`;

  return (
    // CHANGE: Transparent background
    <div className="min-h-screen bg-transparent">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in">
            Get to Know Me
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 opacity-0 animate-fade-in animation-delay-200">
            About
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
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

            {/* Bio Content */}
            <div className="animate-slide-in-right space-y-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                  Crafting Stories Through
                  <span className="text-primary"> Visual Excellence</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                    With 1.5 years in the field, I help brands and creators transform raw footage into high-impact visual stories.
                    </p>
                    <p>
                    I specialize in cinematic color grading and dynamic motion graphics designed to elevate content from ordinary to extraordinary.
                    </p>
                </div>
                {/* CTA Button */}
                <a href={mailLink}>
                  <Button className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:glow-crimson group">
                    <Mail className="mr-2" size={18}/> 
                    Let's Create Together
                  </Button>
                </a>
              </div>

              <div>
                 <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    Software Proficiency
                 </h3>
                 <div className="grid grid-cols-2 gap-4">
                    {skillsList.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-background text-primary group-hover:text-white group-hover:bg-primary transition-colors">
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

      {/* Tech Specs Section - Opaque background changed to glass */}
      <section className="py-24 bg-black/20 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent" />
        <div className="relative container mx-auto px-6">
            <div className="text-center mb-12">
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Engine Room</p>
                <h2 className="font-display text-3xl font-semibold">My Rig</h2>
                <p className="text-muted-foreground mt-2">Optimized for 4K/8K workflow and fast delivery.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {hardware.map((item) => (
                    <div key={item.label} className="bg-background/50 border border-border p-6 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors">
                        <item.icon className="text-primary mb-4" size={32} />
                        <h4 className="font-medium text-muted-foreground text-sm uppercase tracking-wide mb-1">{item.label}</h4>
                        <p className="font-display text-lg font-semibold text-foreground">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section - Background removed */}
      <section className="py-24 bg-transparent border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">What Clients Say</h2>
            
            <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                    {testimonials.map((t, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                            <div className="h-full p-1">
                                <Card className="h-full bg-black/40 backdrop-blur-md border-border hover:border-primary/50 transition-colors">
                                    <CardContent className="flex flex-col justify-between p-6 h-full min-h-[200px]">
                                        <div>
                                            <Quote className="text-primary mb-4 opacity-50" size={32} />
                                            <p className="text-muted-foreground text-lg italic mb-6">"{t.quote}"</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{t.name}</h4>
                                            <p className="text-sm text-primary">{t.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex border-border bg-background text-foreground hover:bg-primary hover:text-white" />
                <CarouselNext className="hidden md:flex border-border bg-background text-foreground hover:bg-primary hover:text-white" />
            </Carousel>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;