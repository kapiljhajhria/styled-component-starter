import React from "react";
import styled from "styled-components";

const Div = styled.div`
  color: ${(props) => props.theme.children.color};
  font-size: ${(props) => props.theme.children.fontSize};
`;
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.button.primary.color};
  &:hover {
    color: ${(props) => props.theme.button.primary.hoverColor};
  }
`;
function Children() {
  return (
    <Div>
      This is children component
      <Button> a button</Button>
    </Div>
  );
}

export default Children;
