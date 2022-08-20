import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvg";

const Box = styled(motion.li)`
  width: 256px;
  height: 36vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 24px 32px;
  margin-right: 128px;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: 0.3s all ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  font-size: calc(16px + 0.5vw);
`;

const Discription = styled.h2`
  font-size: calc(10px + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 16px;
  font-size: calc(10px + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  text-decoration: none;
  padding: 8px calc(32px + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(16px + 0.5vw);
  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Git = styled.a`
  color: inherit;
  text-decoration: none;
  margin-top: 9px;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const WorkCard = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Discription>{description}</Discription>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link>
          <a href={demo} target="_blank">
            Visit
          </a>
        </Link>
        <Git href={github} target="_blank">
          <Github width={30} height={30} fill="currentColor" />
        </Git>
      </Footer>
    </Box>
  );
};

export default WorkCard;
