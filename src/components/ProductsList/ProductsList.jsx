import React from "react";

import ProductListItem from "../ProductListItem";

// import styles from "./ProductsList.module.css";

export const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map(({ id, name }) => (
        <ProductListItem key={id} id={id} name={name} />
      ))}
    </ul>
  );
};
