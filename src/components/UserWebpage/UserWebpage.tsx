import "./UserWebpage.css";

export default function UserWebpage() {
  return (
    <div className="webpage-wrapper">
      <div className="store-header-img">
        <img />
      </div>

      <div className="store-logo">MR</div>
      <h1 className="store-name">Sample Store</h1>
      <p className="store-description">
        Discover a world of digital treasures at our E-commerce store. Instantly
        download top-quality digital products for all your needs. Shop now!
      </p>

      <div className="subscribe-form">
        <form action="">
          <input className="subscribe-form-input" type="text" />
          <button type="submit" className="subscribe-form-btn">
            Subscribe
          </button>
        </form>
      </div>
      <div>Store content goes here!</div>
      <h5>Powered by MintRoad</h5>
    </div>
  );
}
