import ProductCard from "../ProductCard/ProductCard";
import "./UserWebpage.css";

type StoreSettings = {
  header: boolean;
  logo: boolean;
  name: boolean;
  description: boolean;
  descriptionText: string;
  subscribe: boolean;
  thumbnailSize: string;
  details: boolean;
};

export default function UserWebpage(settings: StoreSettings) {
  return (
    <div className="webpage-wrapper">
      {settings.header && (
        <div className="store-header-img">
          <img />
        </div>
      )}

      {settings.logo && <div className="store-logo">MR</div>}
      {settings.name && <h1 className="store-name">Store Name Here</h1>}
      {settings.description && (
        <p className="store-description">
          Discover a world of digital treasures at our E-commerce store.
          Instantly download top-quality digital products for all your needs.
          Shop now!
        </p>
      )}

      {settings.subscribe && (
        <div className="subscribe-form">
          <form action="">
            <input
              className="subscribe-form-input"
              type="email"
              placeholder="Enter your email address..."
            />
            <button type="submit" className="subscribe-form-btn">
              Subscribe
            </button>
          </form>
        </div>
      )}
      <div className="product-gallery">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <h5 className="powered-by">Powered by MintRoad</h5>
    </div>
  );
}
