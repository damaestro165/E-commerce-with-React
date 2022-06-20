import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark  navbar-style">
          <div className="container-fluid">
            <div className="logo">eCommerce</div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="dashboard" className="nav-link">
                    <AiOutlineDashboard className="font" />
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="products" className="nav-link">
                    <BsBasketFill className="font" /> products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="carts" className="nav-link">
                    <FaShoppingCart className="font" />
                    Cart
                    <span className="badge rounded-pill bg-success m-1">5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
