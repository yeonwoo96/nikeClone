import React from "react";
import styled from "styled-components";
const CircleWrap = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #7e7e7e;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
`;
type CircleProps = {
  children?: React.ReactNode;
};
const Circle = ({ children }: CircleProps) => {
  return <CircleWrap>{children}</CircleWrap>;
};

export default Circle;
