import "./CheckoutSummary.css";
import LockIcon from "@mui/icons-material/Lock";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Products } from "../../Types";

export default function CheckoutSummary() {
  const { shoppingCart } = useContext(UserContext);

  console.log(shoppingCart);

  function calculateSubtotal() {
    let subtotal = 0;
    shoppingCart.forEach((item: Products) => {
      subtotal += item.price;
    });
    return subtotal;
  }

  const orderDetails = shoppingCart.map((item: Products) => {
    return (
      <div className="order-summary-items">
        <li className="order-summary-items-elements">{item.name}</li>
        <span>${item.price}</span>
      </div>
    );
  });

  let subtotal = calculateSubtotal();

  const shipping = 10;
  let totalPrice = subtotal + shipping;

  return (
    <div className="summary-wrapper">
      <div className="amount-details">
        <p className="total-amount">Total Amount</p>
        <h2 className="total-amt-dollars">${`${subtotal}`}</h2>
        <div className="secure-payment">
          <LockIcon className="lock-icon" />
          <span>Payments are secure and encrypted</span>
        </div>
      </div>
      <div className="order-details">
        <p className="order-summary">Order Summary</p>
        {orderDetails}
        {/* Dynamically display the order details here */}
      </div>
      <div className="additional-details">
        <div className="detail-row">
          <h3 className="row-label">Subtotal</h3>
          <h3>${`${subtotal}`}</h3>
        </div>
        <div className="detail-row">
          <h3 className="row-label">Shipping</h3>
          <h3>${`${shipping}`}</h3>
        </div>
      </div>

      <div className="detail-row-total">
        <h3>Total:</h3>
        <h2>${`${totalPrice}`}</h2>
      </div>
    </div>
  );
}
