import { Instagram, Youtube, Mail } from "lucide-react";

// Prefilled Mail Config for Footer
const mailSubject = encodeURIComponent("Quick Inquiry: Video Editing");
const mailBody = encodeURIComponent("Hi Hariom,\n\nI'm interested in your services. Can we discuss a potential project?\n\nBest regards,");

const socialLinks = [
  { 
    name: "Email", 
    icon: Mail, 
    href: `mailto:editnomecreates07@outlook.com?subject=${mailSubject}&body=${mailBody}` 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/editnome07/" 
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // CHANGE: Removed 'bg-card', added 'bg-transparent backdrop-blur-sm' to show global animation
    <footer className="relative bg-transparent border-t border-white/5 backdrop-blur-sm">
      {/* Crimson accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 py-16">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Let's Create Something Amazing
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ready to bring your vision to life? Let's collaborate.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border border-border bg-secondary/50 transition-all duration-300 hover:border-primary hover:glow-crimson-subtle"
              aria-label={social.name}
            >
              <social.icon
                size={24}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
              />
            </a>
          ))}
        </div>

        {/* Bottom Bar - UPDATED with @kaizenbreach Link */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            Created By
            <a 
              href="https://www.instagram.com/kaizenbreach/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium hover:underline transition-all ml-1"
            >
              Kr Satyam
            </a>
          </p>
          
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;