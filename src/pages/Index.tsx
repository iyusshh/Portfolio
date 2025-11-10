import { PillNav } from "@/components/PillNav";
import { MobileNav } from "@/components/MobileNav";
import { RibbonsCursor } from "@/components/RibbonsCursor";
import { LiquidBackground } from "@/components/LiquidBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="relative">
      <LiquidBackground />
      <RibbonsCursor />
      <PillNav />
      <MobileNav />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Aayush Rai. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Index;
