import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Premiere Pro", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Final Cut Pro", level: 80 },
  { name: "Motion Graphics", level: 85 },
  { name: "Color Grading", level: 90 },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative opacity-0 animate-slide-in-left">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-2xl" />
                
                {/* Image Container */}
                <div className="relative h-full rounded-2xl overflow-hidden border-2 border-primary/30 animate-pulse-glow">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Professional video editor portrait"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
                <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-primary/20 rounded-full" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="opacity-0 animate-slide-in-right">
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Crafting Stories Through
                <span className="text-primary"> Visual Excellence</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in professional video editing, I've had the privilege 
                  of working with brands, content creators, and filmmakers from around the world. 
                  My passion lies in transforming raw footage into compelling visual narratives that 
                  captivate audiences.
                </p>
                <p>
                  My creative philosophy centers on understanding the unique story each project needs 
                  to tell. Whether it's a high-energy commercial, an emotional wedding film, or a 
                  viral social media reel, I approach every project with fresh eyes and unwavering 
                  dedication to excellence.
                </p>
                <p>
                  I specialize in cinematic color grading, dynamic motion graphics, and seamless 
                  transitions that elevate content from ordinary to extraordinary. My toolkit includes 
                  industry-standard software like Adobe Premiere Pro, After Effects, and DaVinci Resolve.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "text-center p-4 rounded-xl bg-card border border-border",
                      "hover:border-primary transition-all duration-300"
                    )}
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Expertise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Skills & Tools
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-crimson-glow rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
