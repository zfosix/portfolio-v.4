"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
import { Engine, Container } from "tsparticles-engine"; 

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); 
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles container loaded:", container);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", 
            },
            onHover: {
              enable: true,
              mode: "repulse", 
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4, 
            },
            repulse: {
              distance: 100, 
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", 
          },
          links: {
            color: "#ffffff", 
            distance: 150, 
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", 
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle", 
          },
          size: {
            value: { min: 0.5, max: 2 }, 
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;