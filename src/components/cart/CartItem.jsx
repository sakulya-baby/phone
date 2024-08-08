import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addPhoneId } from "../../store/phoneSlice/PhoneSlice";

const CartItem = ({ id, img, price, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (phoneId) => {
    navigate("/mobileInfo/" + phoneId);
  };

  const handlePhoneId = (phoneID) => {
    dispatch(addPhoneId(phoneID));
  };

  const handlerSub = (phonId) => {
    handlePhoneId(phonId);
    handleNavigate(phonId);
  };

  return (
    <StyledContainer>
      <StyledSection>
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <h4>{price}$ </h4>
          <button onClick={() => handlerSub(id)}>Подробнее</button>
        </div>
      </StyledSection>
    </StyledContainer>
  );
};

export default CartItem;

const StyledContainer = styled.li`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  padding: 20px;
  border-radius: 10px;

  & > img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & > div > button {
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
      background-color: #fff;
      color: #333;
      transition: all 0.3ms ease-in;
    }
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
`;
