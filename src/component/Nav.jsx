import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-dark">
      <ul className="d-flex justify-content-between">
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/about">關於我們</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
