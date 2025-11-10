import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Project Name 1",
    description: "A brief description of this amazing project and what it does.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Name 2",
    description: "Another innovative solution that solves real-world problems.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Name 3",
    description: "A cutting-edge application with modern features and design.",
    tags: ["React", "Firebase", "Material-UI"],
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div
        ref={elementRef}
        className={cn(
          "max-w-6xl mx-auto w-full transition-all duration-1000 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
