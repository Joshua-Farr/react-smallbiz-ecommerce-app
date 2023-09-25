import "./CheckoutSummary.css";
import LockIcon from "@mui/icons-material/Lock";

export default function CheckoutSummary() {
  return (
    <div className="summary-wrapper">
      <div className="amount-details">
        <p className="total-amount">Total Amount</p>
        <h2 className="total-amt-dollars">$120.00</h2>
        <div className="secure-payment">
          <LockIcon className="lock-icon" />
          <span>Payments are secure and encrypted</span>
        </div>
      </div>
      <div className="order-details">
        <p className="order-summary">Order Summary</p>

        {/* Dynamically display the order details here */}
      </div>
      <div className="additional-details">
        <div className="detail-row">
          <h3 className="row-label">Subtotal</h3>
          <h3>$120.00</h3>
        </div>
        <div className="detail-row">
          <h3 className="row-label">Shipping</h3>
          <h3>$10</h3>
        </div>
      </div>

      <div className="detail-row-total">
        <h3>Total:</h3>
        <h2>$120</h2>
      </div>
    </div>
  );
}
