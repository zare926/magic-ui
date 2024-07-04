"use client";
import React, { useState, useEffect, useRef } from "react";

const Escape = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - elementCenterX;
        const dy = e.clientY - elementCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const newX = position.x - Math.cos(angle) * 10;
          const newY = position.y - Math.sin(angle) * 10;

          setPosition({
            x: Math.max(0, Math.min(newX, window.innerWidth - rect.width)),
            y: Math.max(0, Math.min(newY, window.innerHeight - rect.height)),
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [position]);

  return (
    <div
      ref={elementRef}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "50px",
        height: "50px",
        backgroundColor: "red",
        borderRadius: "50%",
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.1s ease-out",
      }}
    >
      逃げる!
    </div>
  );
};

export default Escape;
