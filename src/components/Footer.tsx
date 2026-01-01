import { Instagram, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:editnomecreates07@outlook.com?subject=Work%20Inquiry%20-%20Video%20Editing&body=Hi%20Hariom,%0D%0A%0D%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0D%0A%0D%0AHere%20are%20some%20details:%0D%0A-%20Project%20Type:%20%0D%0A-%20Timeline:%20%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you." },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/editnome07/" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Crimson accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 py-16">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Let's Create Something Amazing
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
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

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Video Editor. All rights reserved.
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
