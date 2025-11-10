import { useEffect, useRef } from "react";

interface Ribbon {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export const RibbonsCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ribbonsRef = useRef<Ribbon[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new ribbon
      ribbonsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: 60,
      });

      // Limit ribbons array size
      if (ribbonsRef.current.length > 50) {
        ribbonsRef.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ribbonsRef.current = ribbonsRef.current.filter((ribbon) => {
        ribbon.life++;
        ribbon.x += ribbon.vx;
        ribbon.y += ribbon.vy;
        ribbon.vy += 0.1; // gravity

        const alpha = 1 - ribbon.life / ribbon.maxLife;
        const hue = (ribbon.life * 2) % 360;

        ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(ribbon.x, ribbon.y);
        ctx.lineTo(ribbon.x - ribbon.vx * 5, ribbon.y - ribbon.vy * 5);
        ctx.stroke();

        return ribbon.life < ribbon.maxLife;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
    />
  );
};
