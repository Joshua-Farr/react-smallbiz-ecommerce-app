import ProductCard from "../ProductCard/ProductCard";
import "./UserWebpage.css";
import { StoreSettings } from "../../Types";
import { useContext } from "react";

import { UserContext } from "../../App.tsx";
import { Products } from "../../Types.tsx";

export default function UserWebpage(settings: StoreSettings) {
  const { productList } = useContext(UserContext);

  const theProducts = productList.map((product: Products) => {
    return (
      <ProductCard
        price={product.price}
        name={product.name}
        description={product.description}
        image={product.productImages}
      />
    );
  });

  return (
    <div className="webpage-wrapper">
      {settings.header && (
        <div className="store-header-img">
          <img />
        </div>
      )}

      {settings.logo && (
        <div
          className="store-logo"
          style={{
            marginTop: settings.header ? "-40px" : "2em",
          }}
        >
          MR
        </div>
      )}
      {settings.name && <h1 className="store-name">Store Name Here</h1>}
      {settings.description && (
        <p className="store-description">{settings.descriptionText}</p>
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
      <div className="product-gallery">{theProducts}</div>
      <h5 className="powered-by">Powered by MintRoad</h5>
    </div>
  );
}
