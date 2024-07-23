import React, { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import styles from './Landing.module.css'; // Assuming you are using CSS Modules

const Landing = () => {
  const [title, setTitle] = useState("MAY THE CODE BE WITH YOU...");
  let idx = 0;
  let direction = 1;
  let animationDelay = 100; // milliseconds
  let pauseDelay = 2000; // milliseconds

  function writeText() {
    if (direction === 1) {
      setTitle(title.slice(0, idx));
      idx++;
      if (idx > title.length) {
        direction = -1;
        idx = title.length;
        setTimeout(writeText, pauseDelay);
        return;
      }
    } else if (direction === -1) {
      setTitle(title.slice(0, idx));
      idx--;
      if (idx < 0) {
        direction = 1;
        idx = 0;
        setTimeout(writeText, pauseDelay);
        return;
      }
    }

    setTimeout(writeText, animationDelay);
  }

  useEffect(() => {
    writeText();
  }, []);

  return (
    <section id="home" className={styles.home}>
      <video className={styles.backgroundVideo} playsInline autoPlay loop muted>
        <source src="./images/video/newtry.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">

      </div>
     
      <div className={styles.overlayContent}>
        {/* <div className={`${styles.cost1} ${styles.animateImage}`}>
          <img src="./images/home/constellation1.png" alt="NFC2" />
        </div> */}
      
  <style jsx>{`
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .rotating-image {
      animation: rotate 2s linear infinite;
    }
  `}</style>
  <div>
  <div className="hollow">
          <h1 className="bback">NEED</h1>
          <div className="image-text-group bback">
            <h1 style={{ marginRight: "-15px" }}>F</h1>
            <img
              src="./images/pirates/wheelnew.png"
              alt="NFC3"
              className="rotating-image"
            />
            <h1 style={{ marginLeft: "-25px" }}>R</h1>
          </div>
          <h1 className="bback">CODE 3.0</h1>
        </div>
          <br />
          <br />
          <p style={{ marginTop: "0" }}>29 - 30 AUGUST, 2024</p>
          <p className="venue-text">
            Thadomal Shahani Engineering College
            <br />
            Mumbai, Maharashtra
          </p>

          {/* <div className="butHolder">
            <button type="button" className="Btn zinc-bg">
              <a href="#" target="_blank"> 
                <div className="gradient-mask blue-bg"></div>
                <span className="text" style={{ color: "white", fontSize: 16 }}>
                  Apply with Devfolio
                </span>
              </a>
            </button>
          </div> */}
          <div className="butHolder">
            <button type="button" className="Btn zinc-bg">
              <a href="#" target="_blank"> {/* Change the href once devfolio link is activated */}
                <div className="gradient-mask blue-bg"></div>
                <span className="text" style={{ color: "white", fontSize: 16, marginLeft:"-25px",width:"250px" }}>
                  Registration starting soon...
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className={`${styles.cost2} ${styles.animateImage}`}>
          {/* <img
            src="./images/home/constellation2.png"
            alt="Hack the space Hackathon Constellation"
          /> */}
        </div>
      </div>
      {/* <Script src=".https://apply.devfolio.co/v2/sdk.js" async defer /> */}
    </section>
  );
};

export default Landing;
