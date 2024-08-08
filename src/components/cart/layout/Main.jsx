import React from "react";
import styled from "styled-components";
import CartList from "../CartList";

const Main = () => {
  return (
    <StyledMain>
      <CartList />
    </StyledMain>
  );
};

export default Main;
const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
`;
