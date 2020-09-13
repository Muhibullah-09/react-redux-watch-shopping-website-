import React from 'react';
import './Style.css';
import { productType } from '../Redux-ToolKit/Shoes';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { increment, clear, decrement } from '../Redux-ToolKit/CounterSlice';
function Basket() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const baskets = useSelector((state: productType[]) => state)
  return (
    <div>
      <div className="cart-empty">
        {
          baskets.filter((prod) => prod.added).length === 0 ? (<>
            <h1 className="cartEmpty">Your Cart is Empty</h1>
            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/product')}>See our Products</button>
          </>) : ' '
        }
      </div>
      <div className="container box1 ">
        {baskets.filter((prod) => prod.added).length === 0 ? '' : (
          <>
            <div>
              {baskets.filter((prod) => prod.added).map((prods, ind) => (
                <>
                  <div className="row ">
                    <div className="box">
                      <div className="col-md-6" >
                        <img src={prods.img} width="300px" height="300px" alt={prods.name} />
                        <h4 className="text-secondary">{prods.name}</h4>
                        <p className="text-dark">$ {prods.price}</p>
                      </div>
                      <div className="col-md-6">
                        <div className="transaction">
                          <h4 className="text-secondary">{prods.name}</h4>
                          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Odio delectus quasi vero ullam laudantium consectetur doloremque mollitia,
                          sunt, magnam temporibus quas neque nihil nam placeat
                              perspiciatis culpa ducimus asperiores saepe.</p>
                          <p className="text-success priceInc" >$ {prods.price * prods.quantity}</p>
                          <div className="beside1">
                            <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(increment(prods))}>+</button>
                            <p className="text-secondary">{prods.quantity}</p>
                            <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(decrement(prods))}>-</button>
                          </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                          <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(clear(prods))}>Remove All</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="row justify-content-center mt-5">
              <h4>TOTAL: {baskets.reduce((total, nextItem) => total + (nextItem.price) * nextItem.quantity, 0)}</h4>
            </div>
          </>
        )}
      </div>
    </div >
  );
}

export default Basket;


