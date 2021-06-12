import React from 'react';
import './Style.css';
import { productType } from '../Redux-ToolKit/Watches'
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../Redux-ToolKit/CounterSlice';
function Product() {
  const products = useSelector((state: productType[]) => state)
  const dispatch = useDispatch()
  const product = products.map((prod, id) => {
    return (
      <div className="card col-lg-4  my-3  col-sm-12 col-md-6" key={id}>
        <img className="card-img-top" width="100%" height="400px" src={prod.img} alt={id.toString()} />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <div className="beside">
            <p className="card-text"><strong>$ {prod.price}</strong></p>
            <p>
              <i className="fa fa-plus-circle" aria-hidden="true" 
              onClick={() => dispatch(add(prod))}></i>
            </p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="container">
      <div className="row mt-5  justify-content-center">
        {product}
      </div>
    </div>
  );
}
export default Product;