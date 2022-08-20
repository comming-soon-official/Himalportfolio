import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import astronant from "../assets/Images/space.png";
import BigTitle from "../subComponents/BigTitle";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0%{transform: translateY(-10px)}
50%{transform: translateY(15px) translateX(15px)}
100%{transform: translateY(-10px)}

`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 20%;
  width: 20vw;
  animation: ${float} 3s ease infinite;

  img {
    width: 700px;
    height: auto;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1) rotate(40deg);
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 32px;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(80px + 5vw);
  top: 160px;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;
const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronant} alt="astronant" />
        </Spaceman>
        <Main>
          I'm FullStack Developer located in India,TamilNadu. I like to develop
          new things with creative ideas.
          <br />
          <br />
          I'm very enthusiastic in Modern Technology to create simple and unique
          projects with great ideas.
          <br />
          <br />
          I'm currently Software Engineer in testAing.com.
          <br />
          <br />I believe Chocolate is tasty, Music is everything, Quotes is
          emotion.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
