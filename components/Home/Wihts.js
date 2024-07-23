// What is Hack The Space -> WIHTS
import { infoConfig } from "../../config/info";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Wihts = () => {
  const { wihts } = infoConfig;
  const { Hackathon } = infoConfig;
  return (
    <section
      className="section about-section wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
    >
      <div className="abbox">
        <h2 className="section-title">WHAT IS NEED FOR CODE 3.0?</h2>
        <div className="paraDiv" style={{ zIndex: 100 }}>
          {wihts.map((d, index) => (
            <React.Fragment key={d.id}>
              <br key={index} />
              <p key={d.id}>{d.data}</p>
            </React.Fragment>
          ))}
          {/*<p>
            {Hackathon.data}
            <Link
              target="_blank"
              style={{ color: "#FFDE06" }}
              href={Hackathon.link}
            >
              here..
            </Link>
          </p>*/}

          <div className="frm">
            <img
              src="./images/pirates/shipwrek.png"
              alt="Hack the space Hackathon planet"
            />
          </div>
          {/* <div className="asrt">
            <img
              src="./images/images/yoda.png"
              alt="Hack the space Hackathon planet"
              // style={{height:"200px"}}
            />
          </div> */}
        </div>
      </div>
      {/* <div className="aconst1">
        <img
          src="./images/aconst5.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div> */}
      {/* <div className="pattern2">
        <img
          src="./images/pattern6.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div> */}
    </section>
  );
};

export default Wihts;