// src/Titanic.jsx

import React, { useEffect } from 'react';

const Titanic = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('underwater', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: '#5089A8',
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'top',
            random: true,
            out_mode: 'out',
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse',
            },
            onclick: {
              enable: false,
              mode: 'push',
            },
          },
          modes: {
            grab: {
              distance: 400,
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div>
      <style>{`
        #underwater {
          background-color: #000;
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background: radial-gradient(at top center, rgba(0, 51, 90, 0.9) 0%, rgba(0,0,0,1) 80%);
        }
        #content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: serif;
          font-size: 40px;
          color: #c7c7c7;
        }
      `}</style>
      <div id="underwater"></div>
    </div>
  );
};

export default Titanic;