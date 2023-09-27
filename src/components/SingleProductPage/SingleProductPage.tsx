import ProductGallery from "../ProductGallery/ProductGallery";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import "./SingleProductPage.css";
import { Products } from "../../Types";

import { productTestData } from "../../ProductTestData";

export default function SingleProductPage(product: Products) {
  function handleAddToCart(): void {
    console.log("Added to the cart!");
  }

  function addToCart(amount: number, product: Products) {
    console.log(`${amount} of ${product} added to the cart!`);
  }

  const [quantityWanted, setQuanityWanted] = useState(0);

  function updateQuantityWanted(amount: number) {
    if (quantityWanted === 0 && amount === -1) {
      return;
    }
    setQuanityWanted((quantity) => quantity + amount);
  }

  return (
    <div className="overall-screen-wrapper">
      <div className="product-gallery-wrapper">
        <ProductGallery
          images={[
            "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/6373758/pexels-photo-6373758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          ]}
        />

        <div className="product-information">
          <h1>{product.name}Product Name</h1>
          <div className="divider-line"></div>
          <h3>$199.00</h3>

          <div className="ratings">
            <>
              <StarIcon className="star-icon-rating" />
              <StarIcon className="star-icon-rating" />
              <StarIcon className="star-icon-rating" />
              <StarIcon className="star-icon-rating" />
              <StarIcon className="star-icon-rating" />
            </>
            <span>8 Reviews</span>
          </div>

          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            cumque repellat, reiciendis iusto eaque, vitae mollitia rem,
            repudiandae incidunt voluptatum ut harum officia dolorum beatae
            accusamus. Voluptatibus laudantium eligendi odit. <br></br>
            <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat cumque repellat, reiciendis iusto eaque, vitae mollitia rem,
            repudiandae incidunt voluptatum ut harum officia dolorum beatae
            accusamus. Voluptatibus laudantium eligendi odit.
          </p>

          <div className="quantity-product-page">
            <span>Quantity</span>
            <div className="increment-decrement-section">
              <span
                onClick={() => {
                  updateQuantityWanted(-1);
                }}
              >
                -
              </span>
              <div className="quantity-product-page-value">
                {quantityWanted}
              </div>
              <span
                onClick={() => {
                  updateQuantityWanted(1);
                }}
              >
                +
              </span>
            </div>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() => {
              const productWanted = product;
              addToCart(quantityWanted, productWanted);
            }}
            disabled={quantityWanted === 0 ? true : false}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
