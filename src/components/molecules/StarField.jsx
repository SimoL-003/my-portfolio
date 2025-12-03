import { useRef, useEffect, useState } from "react";

const StarField = () => {
  const canvasRef = useRef(null);
  const HEADER_HEIGHT = 112; // altezza fissa dell'header

  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight - HEADER_HEIGHT,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // SETTINGS
    const MOUSE_LINK_DIST = 100;
    const STAR_LINK_DIST = 250;
    const FADE_START = 500;
    const COLORS = ["#ed855d", "#07a0c3"];
    const COLD_WHITE = "#E0F2FE";

    // numero stelle proporzionale alla larghezza
    const STAR_COUNT = Math.max(
      50,
      Math.floor((canvasSize.width / 1200) * 200)
    );

    const mouse = { x: null, y: null };
    let mouseActive = false;

    // Gestione mouse
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouseActive = true;
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Classe Star
    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.radius = Math.random() * 1.2 + 0.5;

        if (Math.random() < 0.05) {
          this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          this.baseOpacity = 0.9;
        } else {
          this.color = COLD_WHITE;
          this.baseOpacity = 0.45;
        }

        this.opacity = this.baseOpacity;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouseActive) {
          const dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
          const fade = Math.min(dist / FADE_START, 1);
          this.opacity = this.baseOpacity * (1 - fade * 0.8);
        }
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = Array.from({ length: STAR_COUNT }, () => new Star());

    const drawLines = () => {
      ctx.lineWidth = 0.8;
      const center = { x: canvas.width / 2, y: canvas.height / 2 };
      const CENTER_RADIUS = 150;

      for (let i = 0; i < STAR_COUNT; i++) {
        const s1 = stars[i];

        if (!mouseActive) {
          const distCenter = Math.hypot(s1.x - center.x, s1.y - center.y);
          if (distCenter < CENTER_RADIUS) {
            for (let j = i + 1; j < STAR_COUNT; j++) {
              const s2 = stars[j];
              const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);
              if (dist < 120) {
                ctx.beginPath();
                ctx.globalAlpha = (1 - dist / 120) * 0.25;
                ctx.strokeStyle = COLD_WHITE;
                ctx.moveTo(s1.x, s1.y);
                ctx.lineTo(s2.x, s2.y);
                ctx.stroke();
              }
            }
          }
        } else {
          const distMouse = Math.hypot(s1.x - mouse.x, s1.y - mouse.y);
          if (distMouse < MOUSE_LINK_DIST) {
            ctx.beginPath();
            ctx.globalAlpha = (1 - distMouse / MOUSE_LINK_DIST) * 0.5;
            ctx.strokeStyle = COLD_WHITE;
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }

          if (distMouse < STAR_LINK_DIST) {
            for (let j = i + 1; j < STAR_COUNT; j++) {
              const s2 = stars[j];
              const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);
              if (dist < 120) {
                ctx.beginPath();
                ctx.globalAlpha = (1 - dist / 120) * 0.25;
                ctx.strokeStyle = COLD_WHITE;
                ctx.moveTo(s1.x, s1.y);
                ctx.lineTo(s2.x, s2.y);
                ctx.stroke();
              }
            }
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    let animationFrameId;
    const animate = () => {
      canvas.width = canvasSize.width;
      canvas.height = canvasSize.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.update();
        star.draw();
      }

      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight - HEADER_HEIGHT,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvasSize]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      style={{ display: "block" }}
    />
  );
};

export default StarField;
