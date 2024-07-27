import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";
import Domains from "../components/Home/Domains";
import Wihts from "../components/Home/Wihts";
import Journey from "../components/Home/Journey";
import Venue from "../components/Home/Venue";
import Sponsor from "../components/Sponsor";
import CountdownTimer from "../components/CountdownTimer"; 
import "animate.css";
import Preloader from "../components/Home/Preloader";
import ImageSlider from "../components/ImageSlider";
import Prize from "../components/Prize"
const targetDate = "2024-08-20T23:59:00"; // Replace with your target date

const index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import("wow.js").then((WOW) => {
      new WOW.default().init();
    });
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [count, setCount] = useState(0)

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () =>{
        setTimeout(()=>{
          setLoading(false);
        },3500)
    }
    fakeDataFetch();
  }, [])

  return isLoading? (
    <Preloader />
  )
  :(


    <div >
    <Layout>
      <Landing />
      {isMounted && <CountdownTimer targetDate={targetDate} />}
      <Wihts />
      <Journey />
      <ImageSlider/>
      <Domains />
      <Schedule />
      <Prize/>
      <Venue />
      <Sponsor /> 
      <FAQS />
    </Layout>
      </div>
  );
};

export default index;
