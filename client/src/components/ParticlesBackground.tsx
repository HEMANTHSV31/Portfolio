import { Container } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useCallback } from "react";

export const ParticlesBackground = () => {
  // const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
  //   await loadSlim(engine);
  // }, []);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      if (!container) {
        return;
      }
      // await loadParticlesOptions(container);
      console.log("Particles container loaded", container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      // particlesInit={particlesInit}
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1 // Ensure it stays in the background
        },
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
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
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
            value: "#ff0000",
          },
          links: {
            color: "#ff0000",
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
            speed: 1.4,
            straight: false,
          },
          number: {
            value: 30,
            density: {
              enable: true,
              width: 100,
              height:400
            }
          },
          opacity: {
            value: 0.45,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    );
};
