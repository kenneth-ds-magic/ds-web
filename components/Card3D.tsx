"use client";

import React, { useRef, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "red" | "white" | "crimson";
}

export default function Card3D({
  children,
  className = "",
  glowColor = "red",
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const glowBorder =
    glowColor === "white"
      ? "hover:border-zinc-400 dark:hover:border-white/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_35px_rgba(255,255,255,0.2)]"
      : "hover:border-[#ea1d05]/70 hover:shadow-[0_15px_35px_rgba(234,29,5,0.18)] dark:hover:shadow-[0_15px_35px_rgba(234,29,5,0.35)]";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full transition-transform duration-200 ease-out"
    >
      <div
        className={`relative rounded-2xl bg-white dark:bg-[#09090b]/85 backdrop-blur-xl border border-zinc-200 dark:border-white/10 p-6 sm:p-8 transition-all duration-300 preserve-3d overflow-hidden shadow-lg shadow-zinc-200/50 dark:shadow-none ${glowBorder} ${className}`}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out, border 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Dynamic Light Sheen / Glare with #ea1d05 */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(234, 29, 5, 0.08) 0%, rgba(255, 255, 255, 0.2) 30%, transparent 70%)`,
            }}
          />
        )}

        {/* Content with 3D Pop Depth */}
        <div style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)", transition: "transform 0.3s ease" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
