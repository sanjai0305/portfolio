import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleNetwork = () => {
  // This initializes the particle engine efficiently
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // Positioned absolutely behind your Hero content
      className="absolute inset-0 z-0 opacity-60 dark:opacity-100 transition-opacity duration-300"
      options={{
        fullScreen: { enable: false }, // Keeps it confined to the Hero section
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Creates cool "AI neural links" when you move your mouse
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.6,
                color: "#8b5cf6", // Purple grab lines
              },
            },
          },
        },
        particles: {
          color: {
            // Using your brand colors: Blue, Purple, Indigo
            value: ["#3b82f6", "#a855f7", "#6366f1"], 
          },
          links: {
            color: "#6366f1",
            distance: 150,
            enable: true,
            opacity: 0.25, // Subtle connecting lines
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // Keeps particles inside the screen
            },
            random: true,
            speed: 1.2, // Slow, elegant, floating movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Perfect balance for mobile and desktop
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleNetwork;