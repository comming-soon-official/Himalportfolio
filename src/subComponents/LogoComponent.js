import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 32px;
  top: 32px;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>Himal</Logo>;
};

export default LogoComponent;
