import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import "./checkout.css";
import React from "react";

export default function Checkout() {
  return (
    <div className="checkout-page-wrapper">
      <div className="checkout-left-side">
        <h1>FORM SIDE</h1>
      </div>
      <CheckoutSummary />
    </div>
  );
}
