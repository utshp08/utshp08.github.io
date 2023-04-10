import '../styles/globals.css'
import { useCallback } from 'react';
import type { AppProps } from 'next/app'
import PageWithTransition from '../layouts/PageWithTransition';
import SideBar from '../layouts/Sidebar';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, Container } from 'tsparticles-engine';
import particleConfig from "../particles-config.json"

export default function App(props: AppProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <div className=" bg-black text-white"  >
      <Particles id="tsparticles" options={{
        "background": {
          "color": {
            "value": "#000000"
          }
        },
        "fpsLimit": 120,
        "interactivity": {
          "events": {
            "onClick": {
              "enable": false,
              "mode": "push"
            },
            "onHover": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "push": {
              "quantity": 4
            },
            "repulse": {
              "distance": 200,
              "duration": 2
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "links": {
            "color": "#ffffff",
            "distance": 150,
            "enable": true,
            "opacity": 0.2,
            "width": 3
          },
          "collisions": {
            "enable": false
          },
          "move": {
            "direction": "none",
            "enable": true,
            "outModes": {
              "default": "bounce"
            },
            "random": false,
            "speed": 3,
            "straight": false
          },
          "number": {
            "density": {
              "enable": false,
              "area": 800
            },
            "value": 100
          },
          "opacity": {
            "value": 0.8
          },
          "shape": {
            "type": "octagon"
          },
          "size": {
            "value": { "min": 1, "max": 5 }
          }
        },
        "detectRetina": true
      }} init={particlesInit} loaded={particlesLoaded} />
      <SideBar />
      <PageWithTransition {...props} />
    </div>
  )
}
