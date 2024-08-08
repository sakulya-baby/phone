import React from "react";
import CartItem from "./CartItem";

import styled from "styled-components";
import { useSelector } from "react-redux";

const CartList = () => {
  const { Phone } = useSelector((store) => store.phones);

  return (
    <StyledUl>
      {Phone.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </StyledUl>
  );
};

export default CartList;
const StyledUl = styled.ul`
  display: flex;
`;
