import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 200) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 15;
      });
    }, 400);
  }, []);

  useEffect(() => {
    if (progress >= 200) {
      document.getElementById("preloader").style.display = "none";
    }
  }, [progress]);

  return (
    <div style={styles.main}>
      <style jsx global>{`
        @font-face {
          font-family: 'Caribbean';
          src: url('/fonts/Caribbean.ttf');
          /* Adjust the path according to your file structure */
        }

        @keyframes fadeInScaleUp {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }

        .textCon {
          position: relative;
          text-align: center;
          width: 900px;
        }

        .textCon h1 {
          position: absolute;
          color: #fff;
          font-family: 'Caribbean';
          font-weight: 200;
          transform: translate(0, -50%);
          font-size: 8em;
          animation: fadeInScaleUp 2s ease-in-out forwards;
        }

        .textCon h1:nth-child(1) {
          color: transparent;
          -webkit-text-stroke: 2px #fff;
        }

        .textCon h1:nth-child(2) {
          color: #03a9f4;
          animation: animate 3.5s ease-in-out infinite;
        }

        @keyframes animate {
          0% {
            opacity: 0.8;
            clip-path: polygon(0 100%, 24% 100%, 78% 100%, 100% 100%);
          }
          10% {
            clip-path: polygon(0% 100%, 0% 88%, 9% 88%, 16% 91%, 23% 94%, 30% 97%, 38% 97%, 45% 97%, 54% 94%, 62% 91%, 73% 86%, 86% 84%, 100% 85%, 100% 100%);
          }
          10% {
            clip-path: polygon(8% 98%, 16% 97%, 26% 98%, 36% 100%, 49% 100%, 60% 98%, 68% 97%, 75% 97%, 83% 97%, 90% 98%, 96% 99%, 100% 100%, 0 100%);
          }
          12% {
            clip-path: polygon(0 93%, 10% 89%, 20% 90%, 33% 95%, 43% 96%, 52% 95%, 62% 91%, 72% 89%, 83% 90%, 92% 93%, 100% 94%, 100% 100%, 0 100%);
          }
          20% {
            clip-path: polygon(0 80%, 10% 87%, 19% 86%, 28% 81%, 37% 77%, 48% 75%, 57% 77%, 70% 84%, 81% 88%, 90% 86%, 100% 80%, 100% 100%, 0 100%);
          }
          45% {
            clip-path: polygon(0 73%, 7% 68%, 18% 65%, 29% 66%, 41% 71%, 54% 72%, 63% 69%, 71% 65%, 82% 62%, 92% 65%, 100% 69%, 100% 100%, 0 100%);
          }
          50% {
            clip-path: polygon(0 54%, 10% 60%, 19% 62%, 30% 61%, 40% 54%, 49% 49%, 62% 47%, 71% 50%, 81% 57%, 92% 59%, 100% 55%, 100% 100%, 0 100%);
          }
          52% {
            clip-path: polygon(0 54%, 10% 48%, 19% 44%, 31% 43%, 38% 45%, 52% 50%, 63% 53%, 71% 50%, 81% 46%, 90% 45%, 100% 48%, 100% 100%, 0 100%);
          }
          60% {
            clip-path: polygon(0 36%, 10% 42%, 20% 44%, 29% 42%, 40% 36%, 50% 32%, 59% 29%, 69% 32%, 79% 38%, 91% 41%, 100% 38%, 100% 100%, 0 100%);
          }
          70% {
            clip-path: polygon(0 26%, 8% 31%, 19% 34%, 29% 31%, 40% 25%, 50% 22%, 61% 24%, 70% 30%, 80% 35%, 93% 35%, 100% 27%, 100% 100%, 0 100%);
          }
          80% {
            clip-path: polygon(0 22%, 10% 20%, 19% 15%, 29% 13%, 41% 13%, 54% 14%, 65% 19%, 72% 24%, 82% 28%, 92% 27%, 100% 16%, 100% 100%, 0 100%);
          }
          90% {
            clip-path: polygon(0 8%, 10% 8%, 20% 11%, 30% 14%, 40% 13%, 48% 11%, 57% 5%, 70% 2%, 80% 2%, 91% 6%, 100% 14%, 100% 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 13% 0, 26% 0, 37% 0, 48% 0, 55% 0, 68% 0, 80% 0, 84% 0, 95% 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        #preloader {
          position: fixed;
          bottom: 10px;
          right: 10px;
          width: 20vh;
          height: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .wheelCont {
          position: relative;
          width: 15vw;
          height: 15vw;
          max-width: 150px;
          max-height: 150px;
          margin-top: 520px;
        }

        .wheel {
          width: 15vw;
          height: 15vw;
          transition: transform 0.5s linear;
        }

        @media (max-width: 1200px) {
          .textCon h1 {
            font-size: 7em;
          }
        }

        @media (max-width: 992px) {
          .textCon {
            width: 80%;
          }
          .textCon h1 {
            font-size: 6em;
          }
        }

        @media (max-width: 768px) {
          #preloader {
            position: fixed;
            bottom: 50px;
            right: 10px;
            width: 0px;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }
          .textCon {
            width: 70%;
          }
          .textCon h1 {
            font-size: 5em;
          }
          .wheelCont {
            width: 20vw;
            height: 20vw;
          }
          .wheel {
            width: 20vw;
            height: 20vw;
          }
        }

        @media (max-width: 576px) {
          .main{
            width: 10px;
           }
          .textCon {
            position: fixed;
            width: 500px;
            justify-self: center;
            align-self: start;
            padding-top: 50%;
            top:10%;
          }
          .textCon h1 {
            font-size: 4em;
          }
          .wheelCont {
            position: fixed;
            width: 10vw;
            height: 10vw;
            bottom: 40%;
            left: 32%;
          }
          .wheel {
            width: 35vw;
            height: 35vw;
          }
        }
      `}</style>
      <div className="textCon">
        <h1>need for code 3.0</h1>
        <h1>need for code 3.0</h1>
      </div>
      <div id="preloader">
        <div className="wheelCont">
          <img
            src="./images/pirates/wheel1.png"
            alt="Wheel"
            className="wheel"
            style={{ transform: `rotate(${progress * 3.6}deg)` }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
};

export default Preloader;