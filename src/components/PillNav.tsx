import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export const PillNav = () => {
  const [activeSection, setActiveSection] = useState("HOME");

  const handleNavClick = (href: string, label: string) => {
    setActiveSection(label);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border rounded-full px-2 py-2 shadow-lg">
        <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm mr-2">
          YN
        </div>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.href, item.label)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeSection === item.label
                ? "bg-foreground text-background"
                : "text-foreground hover:bg-muted"
            )}
          >
            {item.label}
          </button>
        ))}
        <div className="ml-2 pl-2 border-l border-border">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
