import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductListItem.module.css";
import { useLocation } from "react-router-dom";

const ProductListItem = ({ id, name, state }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={id} id={id} state={{ from: location }}>
        <img src="https://via.placeholder.com/200x100" alt="" />
        <p>{name}</p>
      </Link>
    </li>
  );
};

export default ProductListItem;
