const technologies = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export const LogoLoop = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex animate-loop">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-6 px-6 py-3 bg-muted/50 rounded-lg text-foreground font-semibold text-lg whitespace-nowrap"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};
