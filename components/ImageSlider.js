import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000;
  }
`;

const Slider = styled.section`
  position: relative;
  width: 50%;
  height: 32vw;
  margin: 150px auto;
  font-family: 'Helvetica Neue', sans-serif;
  perspective: 1400px;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    height: auto;
  width: 80%;

    padding-top:180px;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: none;
  display: none;
`;

const Label = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: white;
  font-size: 70px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 400ms ease, box-shadow 400ms ease;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    height: 200px;
    img {
      height: 100%;
    }
  }
`;

const SliderWrapper = styled.div`
  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5,
  #s6:checked ~ #slide6 {
    box-shadow: 0 0 20px 10px rgba(255, 255, 0, 0.8), 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
    transform: translate3d(0%, 0, 0px);
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide6,
  #s6:checked ~ #slide1 {
    box-shadow: 0 6px 10px rgba(0,0,0, 0.3), 0 2px 2px rgba(0,0,0, 0.2);
    transform: translate3d(20%, 0, -100px);
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide6,
  #s5:checked ~ #slide1,
  #s6:checked ~ #slide2 {
    box-shadow: 0 1px 4px rgba(0,0,0, 0.4);
    transform: translate3d(40%, 0, -250px);
  }

  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide6,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2,
  #s6:checked ~ #slide3 {
    box-shadow: 0 1px 4px rgba(0,0,0, 0.4);
    transform: translate3d(-40%, 0, -250px);
  }

  #s1:checked ~ #slide5,
  #s2:checked ~ #slide6,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3,
  #s6:checked ~ #slide4 {
    box-shadow: 0 6px 10px rgba(0,0,0, 0.3), 0 2px 2px rgba(0,0,0, 0.2);
    transform: translate3d(-20%, 0, -100px);
  }

  #s1:checked ~ #slide6,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4,
  #s6:checked ~ #slide5 {
    box-shadow: 0 1px 4px rgba(0,0,0, 0.4);
    transform: translate3d(-40%, 0, -250px);
  }

  @media (max-width: 768px) {
    #s1:checked ~ #slide1,
    #s2:checked ~ #slide2,
    #s3:checked ~ #slide3,
    #s4:checked ~ #slide4,
    #s5:checked ~ #slide5,
    #s6:checked ~ #slide6 {
      transform: translate3d(0, 0%, 0);
    }

    #s1:checked ~ #slide2,
    #s2:checked ~ #slide3,
    #s3:checked ~ #slide4,
    #s4:checked ~ #slide5,
    #s5:checked ~ #slide6,
    #s6:checked ~ #slide1 {
      transform: translate3d(0, 20%, -100px);
    }

    #s1:checked ~ #slide3,
    #s2:checked ~ #slide4,
    #s3:checked ~ #slide5,
    #s4:checked ~ #slide6,
    #s5:checked ~ #slide1,
    #s6:checked ~ #slide2 {
      transform: translate3d(0, 40%, -250px);
    }

    #s1:checked ~ #slide4,
    #s2:checked ~ #slide5,
    #s3:checked ~ #slide6,
    #s4:checked ~ #slide1,
    #s5:checked ~ #slide2,
    #s6:checked ~ #slide3 {
      transform: translate3d(0, -40%, -250px);
    }

    #s1:checked ~ #slide5,
    #s2:checked ~ #slide6,
    #s3:checked ~ #slide1,
    #s4:checked ~ #slide2,
    #s5:checked ~ #slide3,
    #s6:checked ~ #slide4 {
      transform: translate3d(0, -20%, -100px);
    }

    #s1:checked ~ #slide6,
    #s2:checked ~ #slide1,
    #s3:checked ~ #slide2,
    #s4:checked ~ #slide3,
    #s5:checked ~ #slide4,
    #s6:checked ~ #slide5 {
      transform: translate3d(0, -40%, -250px);
    }
  }
`;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide % 6) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <SliderWrapper>
        <Slider id="slider">
          <Input type="radio" name="slider" id="s1" checked={currentSlide === 1} readOnly />
          <Input type="radio" name="slider" id="s2" checked={currentSlide === 2} readOnly />
          <Input type="radio" name="slider" id="s3" checked={currentSlide === 3} readOnly />
          <Input type="radio" name="slider" id="s4" checked={currentSlide === 4} readOnly />
          <Input type="radio" name="slider" id="s5" checked={currentSlide === 5} readOnly />
          <Input type="radio" name="slider" id="s6" checked={currentSlide === 6} readOnly />

          <Label htmlFor="s1" id="slide1">
            <img src="./images/pirates/slider/A.jpg" alt="Slide 1" />
          </Label>
          <Label htmlFor="s2" id="slide2">
            <img src="./images/pirates/slider/B.jpg" alt="Slide 2" />
          </Label>
          <Label htmlFor="s3" id="slide3">
            <img src="./images/pirates/slider/C.jpg" alt="Slide 3" />
          </Label>
          <Label htmlFor="s4" id="slide4">
            <img src="./images/pirates/slider/D.jpg" alt="Slide 4" />
          </Label>
          <Label htmlFor="s5" id="slide5">
            <img src="./images/pirates/slider/E.jpg" alt="Slide 5" />
          </Label>
          <Label htmlFor="s6" id="slide6">
            <img src="./images/pirates/slider/F.jpg" alt="Slide 6" />
          </Label>
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default App;