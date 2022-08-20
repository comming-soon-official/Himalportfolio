import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvg";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relatibve;
  h2,
  h2,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 32px;
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 32px;
  right: calc(16px + 2vw);
  text-decoration: none;
  z-index: 1;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(16px + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 45%;
  left: 25px;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    padding: 16px;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 85 : 200}
            height={click ? 85 : 200}
            fill="currentColor"
          />
          {click ? null : <span>Click Here...</span>}
        </Center>
        <Contact>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duriation: 0.3, delay: 0.3 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duriation: 0.3, delay: 0.3 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a target="_blank" href="mailto:jaydenlking@gmail.com">
              {" "}
              Say hi..
            </a>
          </motion.h2>
        </Contact>
        <BLOG to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duriation: 0.3, delay: 0.3 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duriation: 0.3, delay: 0.3 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog{" "}
          </motion.h2>
        </BLOG>
        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              x: -200,
              transition: { type: "spring", duriation: 0.3, delay: 0.3 },
            }}
            animate={{
              x: 0,
              transition: { type: "spring", duriation: 0.3, delay: 0.3 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Works{" "}
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duriation: 0.3, delay: 0.3 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duriation: 0.3, delay: 0.3 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              About{" "}
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duriation: 0.3, delay: 0.3 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duriation: 0.3, delay: 0.3 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills{" "}
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
