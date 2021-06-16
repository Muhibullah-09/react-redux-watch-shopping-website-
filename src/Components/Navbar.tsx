import React from "react";
// import "./Style.css";
import { Link } from "react-router-dom";
import { productType } from "../Redux-ToolKit/Watches";
import { useSelector } from "react-redux";
import { useState } from "react";
// import styles from './Style.module.css';
// var changeClass = "collapse navbar-collapse";

function Navbar() {
  const count = useSelector((state: productType[]) => state);
  const totalItem = count.filter((product) => product.added).length;
  const [valNav, setValNav] = useState("collapse navbar-collapse");
  const [closeVal, setCloseVal] = useState("close");
  const [changeBtn, setChangeBtn] = useState("navbar-toggler");

  const ChangeNav: any = () => {
    setValNav("navbar-collapse");
    // console.log('Clicked');
    setCloseVal("closeBtn");
    setChangeBtn("close");
  };

  const CloseNav: any = () => {
    // console.log("Close Button Clicked...");
    setChangeBtn("navbar-toggler");
    setValNav("collapse navbar-collapse")
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Watch Store
        </a>
        <button
          className={changeBtn}
          type="button"
          onClick={() => ChangeNav()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={valNav} id="navbarText">
          <div className={closeVal}>
            <button
              type="button"
              className="closeNav"
              onClick={() => CloseNav()}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="product" className="nav-link">
                Product
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link to="cart">
              <i className="fa fa-shopping-cart" aria-hidden="true">
                <sup>
                  <span className="badge badge-light text-success">
                    {totalItem}
                  </span>
                </sup>
              </i>
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
