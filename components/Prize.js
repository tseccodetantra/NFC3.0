import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .sponsor-section .sponsor.silver .wrapper .card::after {
    background: linear-gradient(
      60deg,
      rgba(112, 112, 111, 0.4),
      rgba(125, 125, 122, 0.4),
      rgba(142, 141, 141, 0.4),
      rgba(161, 162, 163, 0.4),
      rgba(179, 182, 181, 0.4),
      rgba(190, 192, 194, 0.4)
    );
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  .sponsor-section .sponsor.gold .wrapper .card::after {
    background: linear-gradient(
      60deg,
      rgba(235, 209, 151, 0.4),
      rgba(180, 136, 17, 0.4),
      rgba(162, 121, 13, 0.4),
      rgba(187, 155, 73, 0.4)
    );
    box-shadow: 0 0 10px #bb9b49;
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  .sponsor-section .sponsor.bronze .wrapper .card::after {
    background: linear-gradient(
      60deg,
      rgba(128, 74, 0, 0.3),
      rgba(137, 94, 26, 0.3),
      rgba(156, 122, 60, 0.3),
      rgba(176, 141, 87, 0.3)
    );
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;

const Container = styled.div`
  text-align: center;
  color: #fff;
  z-index: 2;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PricingTitle = styled.h1`
  ${'' /* font-size: 80px;
  margin-bottom: 40px;
  position: relative;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  display: inline-block; */}

  font-size: 2.6rem;
  margin-bottom: 40px;
  line-height: 3.2rem;
  letter-spacing: 0.08em;
  font-family: "Montserrat", sans-serif !important;
  color: #FFDE06;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  &:hover {
    animation: none;
  }

  &:hover::before,
  &:hover::after {
    content: '';
  }

  &:hover::after {
    content: attr(data-text);
    left: 0;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff;
  }

  &::after {
    text-decoration: underline;
  }
`;

const PricingTable = styled.div`
  display: flex;
  gap: 30px;
  perspective: 1000px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 70px;
  }
`;

const PricingPlan = styled.div`
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  transform: rotateY(0deg);
  flex: 1 1 300px;  /* Flex basis for responsive layout */
  z-index: 1;

  @media (max-width: 768px) {
    &.gold {
      order: -1;
    }
  }

  &.silver:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      60deg,
      rgba(112, 112, 111, 0.4),
      rgba(125, 125, 122, 0.4),
      rgba(142, 141, 141, 0.4),
      rgba(161, 162, 163, 0.4),
      rgba(179, 182, 181, 0.4),
      rgba(190, 192, 194, 0.4)
    );
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
    z-index: -1;
  }

  &.gold:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      60deg,
      rgba(235, 209, 151, 0.4),
      rgba(180, 136, 17, 0.4),
      rgba(162, 121, 13, 0.4),
      rgba(187, 155, 73, 0.4)
    );
    box-shadow: 0 0 10px #bb9b49;
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
    z-index: -1;
  }

  &.bronze:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      60deg,
      rgba(128, 74, 0, 0.3),
      rgba(137, 94, 26, 0.3),
      rgba(156, 122, 60, 0.3),
      rgba(176, 141, 87, 0.3)
    );
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
    z-index: -1;
  }

  &:hover {
    transform: rotateY(0) translateY(-20px);
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.7), 0 0 100px rgba(255, 255, 255, 0.4);
  }
`;

const PlanHeader = styled.div`
  padding: 20px 0;
  position: relative;
  z-index: 2;
`;

const PlanTitle = styled.h2`
  font-size: 28px;
  margin: 10px 0;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const PlanPrice = styled.p`
  font-size: 48px;
  margin: 10px 0 0;
  color: #fff;
  position: relative;

  span {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px){
    font-size: 30px;
  }
`;

const TrophyImage = styled.img`
  width: 120px; /* Increased size */
  margin: 0 auto 20px; /* Center the image and add margin below */
  background: transparent; /* Ensure background is transparent */
`;

const Prize = () => {
  return (
    <>
      <GlobalStyle />
      
      <Container>
        <div  ></div>
        <PricingTitle data-text="Prizes" >Prizes</PricingTitle>
        <PricingTable>
          <PricingPlan className="silver">
            <PlanHeader>
              <TrophyImage src="./images/pirates/Trophy/Silver_Trophy.png" alt="Second Prize Trophy" />
              <PlanTitle>2nd Prize</PlanTitle>
              <PlanPrice>To be Revealed</PlanPrice>
            </PlanHeader>
          </PricingPlan>

          <PricingPlan className="gold">
            <PlanHeader>
              <TrophyImage src="./images/pirates/Trophy/Golden_Trophy.png" alt="First Prize Trophy" />
              <PlanTitle>1st Prize</PlanTitle>
              <PlanPrice>To be Revealed</PlanPrice>
            </PlanHeader>
          </PricingPlan>

          <PricingPlan className="bronze">
            <PlanHeader>
              <TrophyImage src="./images/pirates/Trophy/Bronze_Trophy.png" alt="Third Prize Trophy" />
              <PlanTitle>3rd Prize</PlanTitle>
              <PlanPrice>To be Revealed</PlanPrice>
            </PlanHeader>
          </PricingPlan>
        </PricingTable>
      </Container>
    </>
  );
};

export default Prize;