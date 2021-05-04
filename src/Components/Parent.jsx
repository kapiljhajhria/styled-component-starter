import React from "react";
import styled from "styled-components";
import Children from "./Children";

const Div = styled.div`
  color: ${(props) => props.theme.parent.color};
  font-size: ${(props) => props.theme.parent.fontSize};
`;
function Parent() {
  return (
    <Div>
      this is a parent div
      <Children />
    </Div>
  );
}

export default Parent;
