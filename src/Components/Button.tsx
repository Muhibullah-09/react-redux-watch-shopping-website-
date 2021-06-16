require('dotenv').config()
import React from "react";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe( process.env.Publishable_key || '');

function Button() {
  return (
    <div>
      <button role="link">Checkout</button>
    </div>
  );
}

export default Button;
