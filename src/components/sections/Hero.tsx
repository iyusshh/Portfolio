import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div
        ref={elementRef}
        className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Aayush Rai
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Full Stack Developer & Designer
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building beautiful, functional, and user-friendly applications.
          Passionate about creating exceptional digital experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
