// src/pages/Intro.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const fullName = "Vansh Mahajan".split("");

export default function Intro() {
  const navigate = useNavigate();
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (visibleIndex < fullName.length) {
      const timer = setTimeout(() => setVisibleIndex((i) => i + 1), 200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setFadeOut(true), 2000); // Start fade out
      setTimeout(() => navigate("/home"), 2000); // Navigate after fade
    }
  }, [visibleIndex]);

  return (
    <div
      className={`h-screen bg-black flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider text-[#e50914]">
        {fullName.slice(0, visibleIndex).map((char, idx) => (
          <span key={idx} className={`inline-block`}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
