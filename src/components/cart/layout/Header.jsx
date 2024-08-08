import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to={"/"}>Mobile</Link>
      </h1>
      <StyledDiv>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Profile
        </NavLink>
        <br />
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          about
        </NavLink>
        <NavLink
          to="phones"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          phones
        </NavLink>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;

  a.active {
    color: #03ec2e;
    border-radius: 5px;
    font-style: oblique;
    text-decoration: none;
  }
  a.inactive {
    font-style: italic;
    text-decoration: none;
  }
`;
