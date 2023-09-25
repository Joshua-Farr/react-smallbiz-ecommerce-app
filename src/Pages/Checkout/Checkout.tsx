import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import "./checkout.css";

export default function Checkout() {
  return (
    <div className="checkout-page-wrapper">
      <div className="checkout-left-side">
        <h2 className="sidebar-logo">MintRoad</h2>
        <>
          <form className="checkout-form">
            <div className="payment-detail-wrapper">
              <h2>Payment Details</h2>
              <p>Complete your purchase by providing your payment details</p>
            </div>
            <label htmlFor="email-address">Email Address</label>
            <input
              type="email"
              id="email-address"
              className="questions-input"
              placeholder="TheBigBird@gmail.com"
            />

            <label htmlFor="card-details">Card Details</label>
            <div className="card-details">
              <input
                type="number"
                id="card-number"
                className="questions-input"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
              <input
                type="number"
                id="card-exp"
                className="questions-input"
                placeholder="MM / YY"
              />
              <input
                type="number"
                id="card-cvc"
                className="questions-input"
                placeholder="CVC"
              />
            </div>

            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input
              type="text"
              id="cardholder-name"
              className="questions-input"
              placeholder="Big Bird"
            />

            <label htmlFor="billing-address">Billing Address</label>
            <input
              type="text"
              id="billing-address"
              className="questions-input"
              placeholder="123 Sesame Street"
            />

            <label htmlFor="discount-code">Discount Code</label>
            <input type="text" id="discount-code" className="questions-input" />

            <button type="submit" className="complete-payment-btn">
              Complete my purchase
            </button>
          </form>
        </>
      </div>

      <CheckoutSummary />
    </div>
  );
}
