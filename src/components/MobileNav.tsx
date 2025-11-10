import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

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

export const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("HOME");
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string, label: string) => {
    setActiveSection(label);
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="md:hidden fixed top-4 right-4 z-50 flex items-center gap-2">
      <ThemeToggle />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-md border-border"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background font-bold">
                YN
              </div>
              <div>
                <p className="font-semibold">Your Name</p>
                <p className="text-sm text-muted-foreground">Developer</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                    activeSection === item.label
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
