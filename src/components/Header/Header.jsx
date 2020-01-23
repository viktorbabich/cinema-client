import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="header">
    <div className="header__innner">header</div>
    <Link to="/list">лист</Link>
  </div>
);
