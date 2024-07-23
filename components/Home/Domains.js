import { infoConfig } from "../../config/info";
import React from "react";
import Image from "next/image";

const Domains = () => {
  const { about } = infoConfig;
  return (
    <section
      id="domains"
      className="section about-section wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
    >
      <div className="abbox">
        <h2 className="section-title">DOMAINS</h2>
        <div className="paraDiv">
          <div className="domains">
            <div className="domain">
              <div className="domain-div" id="ai">
                <img src="./images/domains/ai.png" width={150} height={150} />
                <p>AI / ML</p>
              </div>
              <div className="domain-div">
                <img
                  src="./images/domains/blockchain.png"
                  width={150}
                  height={150}
                />
                <p>Blockchain</p>
              </div>
            </div>
            <div className="domain">
              <div className="domain-div">
                <img
                  src="./images/domains/social.png"
                  width={150}
                  height={150}
                />
                <p>Social Cause</p>
              </div>
              <div className="domain-div">
                <img
                  src="./images/domains/webdev.png"
                  width={150}
                  height={150}
                />
                <p>Web/App Development</p>
              </div>
            </div>
          </div>
          <div className="rstar">
            <img
              className="topstar"
              src="./images/pirates/skull05.png"
              alt="Hack the space Hackathon Star"
            />
          </div>
          
        </div>
      </div>
      {/* <div className="pattern7">
        <img
          src="./images\Constillations\Moon.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div> */}
    </section>
  );
};

export default Domains;