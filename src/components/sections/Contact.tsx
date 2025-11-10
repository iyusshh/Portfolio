import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div
        ref={elementRef}
        className={cn(
          "max-w-4xl mx-auto w-full transition-all duration-1000 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                your.email@example.com
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input placeholder="Your Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" required />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={6} required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
