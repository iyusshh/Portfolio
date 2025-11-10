import { useEffect, useRef } from "react";

export const LiquidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let time = 0;

    const animate = () => {
      time += 0.01;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${(time * 20) % 360}, 70%, 50%)`);
      gradient.addColorStop(0.5, `hsl(${(time * 20 + 60) % 360}, 70%, 40%)`);
      gradient.addColorStop(1, `hsl(${(time * 20 + 120) % 360}, 70%, 30%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw blobs
      for (let i = 0; i < 5; i++) {
        const x = canvas.width / 2 + Math.sin(time + i) * 300;
        const y = canvas.height / 2 + Math.cos(time + i * 0.5) * 200;
        const radius = 150 + Math.sin(time * 2 + i) * 50;

        const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        blobGradient.addColorStop(0, `hsla(${(time * 30 + i * 60) % 360}, 80%, 60%, 0.3)`);
        blobGradient.addColorStop(1, "transparent");

        ctx.fillStyle = blobGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-20"
    />
  );
};
