import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Devops, Develope } from "./AllSvg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 15px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 32px;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(16px + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 16px;
  }
`;
const Discription = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(3px + 1vw);
  padding: 8px 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 32px;
  }
`;
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={35} height={35} fill="currentColor" /> FullStack
            Developer
          </Title>
          <Discription>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Discription>
          <Discription>
            <strong>Skills</strong>
            <p>
              Html&Css, Js, ReactJS, Redux, ReactNative, nodeJS, expressJS,
              mongoDB, Linux, Scss, Bootstrap, Tailwind etc.
            </p>
          </Discription>
          <Discription>
            <strong>Tools</strong>
            <p>Burpsuite, Postman, VScode, Github, Gitlab, CodeSandBox</p>
          </Discription>
        </Main>
        <Main>
          <Title>
            <Devops
              style={{ padding: 0, marginTop: 15, marginRight: 0 }}
              width={40}
              height={40}
              fill="currentColor"
            />{" "}
            Devops Engineer
          </Title>
          <Discription>
            I love clouds to handle and implement with different ideas
          </Discription>
          <Discription>
            <strong>I like to do</strong>
            <ul>
              <li>cloud automations</li>
              <li>cloud apis</li>
            </ul>
          </Discription>
          <Discription>
            <strong>Tools</strong>
            <ul>
              <li>Git</li>
              <li>Jenkins</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </Discription>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
