import React from "react";
import { Link } from "react-router-dom";
import { TopMenuContainer } from "./TopMenu.style";

export const TopMenu = () => {
  return (
    <>
      <TopMenuContainer>
        <div class="topnav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
      </TopMenuContainer>
    </>
  );
};
