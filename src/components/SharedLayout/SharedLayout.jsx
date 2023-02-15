import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>....LOADING!!!!</div>}>
        <Outlet />
      </Suspense>

      <footer>
        <p>2023</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
