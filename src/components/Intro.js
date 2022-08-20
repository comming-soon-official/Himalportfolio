import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Himal from "../assets/Images/hi.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 35vh;
  display: flex;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
    transition: 0.2s;

    &:hover {
      transform: translate(-50%, -3%);
    }
  }
`;
const Text = styled.div`
  font-size: calc(16px + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 32px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(8px + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "35vh" }}
      transition={{ type: "spring", duriation: 2, delay: 1 }}
    >
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duriation: 1, delay: 1.5 }}
        >
          <img className="pic" src={Himal} alt="profile pic" />
        </motion.div>
      </SubBox>
      <SubBox>
        <Text>
          <h3>This is Himal</h3>
          <h6>I'm a FullStack Developer and Devops Engineer</h6>
        </Text>
      </SubBox>
    </Box>
  );
};

export default Intro;
