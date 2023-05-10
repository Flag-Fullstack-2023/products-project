import React from "react";
import { ProductWrapper } from "./Product.style";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../button/button";

export const Product = () => {
  const productData = useLoaderData();
  const navigator = useNavigate();

  const { id, title, description, price, rating, images} = productData;
  return (
    <ProductWrapper>
      <h1>Product #{id}</h1>
      <img src={images[0]} width={150}></img>
      <ul>
        <li>Title: {title}</li>
        <li>Description: {description}</li>
        <li>Price: {price}</li>
        <li>Rating: {rating}</li>
      </ul>
      <Button onClick={() => navigator(-1)}>Voltar</Button>
    </ProductWrapper>
  );
};
