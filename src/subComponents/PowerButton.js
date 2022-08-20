import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvg";

const Power = styled.button`
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translate(-50%);

  background-color: #fcf6f4;
  border-radius: 50%;
  padding: 4.8px;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={26} height={26} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
