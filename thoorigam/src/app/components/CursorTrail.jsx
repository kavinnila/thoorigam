'use client';
import React, { useState, useEffect } from "react";

const CursorTrail = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPositions((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Reduce trail to a maximum of 5 droplets
    if (positions.length > 5) {
      setPositions((prev) => prev.slice(1));
    }
  }, [positions]);

  return (
    <>
      {positions.map((position, index) => {
        const size = Math.max(20 - index * 2, 10); // Dynamic size
        const opacity = Math.max(1 - index * 0.2, 0.3); // Dynamic opacity

        return (
          <div
            key={position.id}
            className={`absolute bg-black rounded-full`}
            style={{
              position: "fixed",
              left: position.x - size / 1.5 + "px",
              top: position.y - size / 1.5 + "px",
              width: size + "px",
              height: size + "px",
              opacity: opacity, // Use inline style for opacity
              pointerEvents: "none",
            }}
          />
        );
      })}
    </>
  );
};

export default CursorTrail;


