import React from "react";
import styled from "styled-components";
import Parent from "./Parent";

const Div = styled.div`
  color: ${(props) => props.theme.top.color};
  font-size: ${(props) => props.theme.top.fontSize};
`;

function Top() {
  return (
    <Div>
      This is the Top Component
      <Parent />
    </Div>
  );
}

export default Top;
