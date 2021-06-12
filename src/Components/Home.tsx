import React from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom'
import Product from './Product';


function Home() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="hero row">
        <div className="col-md-6 col-6 col-lg-6 col-sm-12">
          <div className="center">
            <p className="text-secondary homeProduct">
              Explore the collection of prestigious, high-precision timepieces and Quality is our first Periority.
           </p>
            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/product')} >Shop Now</button>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 imageCenter">
          <img src='https://i.gifer.com/Dmxv.gif' alt="watch"  />
        </div>
      </div><br />
      <Product />
    </div>
  );
}

export default Home;