import { LogoLoop } from "../LogoLoop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const About = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div
        ref={elementRef}
        className={cn(
          "max-w-4xl mx-auto transition-all duration-1000 delay-150",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-5xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm a passionate developer with X years of experience in building
              web applications. I specialize in creating elegant solutions to
              complex problems.
            </p>
            <p className="text-lg text-muted-foreground">
              My expertise lies in modern web technologies, and I'm always
              eager to learn new tools and frameworks to stay at the forefront
              of web development.
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Frontend Development (React, TypeScript)</li>
              <li>✓ Backend Development (Node.js, Python)</li>
              <li>✓ Database Design (SQL, NoSQL)</li>
              <li>✓ Cloud Services (AWS, Azure)</li>
              <li>✓ UI/UX Design</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Technologies I Work With
          </h3>
          <LogoLoop />
        </div>
      </div>
    </section>
  );
};
