import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import { productType } from '../Redux-ToolKit/Watches'
import { useSelector } from 'react-redux';

function Navbar() {

  const count = useSelector((state: productType[]) => state)
  const totalItem = count.filter((product) => product.added).length

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Watch Store</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="product" className="nav-link">Product</Link>
            </li>
            <li className="nav-item">

            </li>
          </ul>
          <span className="navbar-text">
            <Link to="cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"><sup><span className="badge badge-light text-success">{totalItem}</span></sup></i>
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
