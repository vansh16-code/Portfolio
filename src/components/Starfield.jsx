// src/components/Starfield.jsx
import { useEffect } from "react";

export default function Starfield() {
  useEffect(() => {
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 100;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    resize();
    createStars();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createStars();
    });
  }, []);

  return (
    <canvas
      id="starfield"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
