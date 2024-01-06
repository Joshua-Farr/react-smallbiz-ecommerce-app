import ProductGallery from "../ProductGallery/ProductGallery";
import StarIcon from "@mui/icons-material/Star";
import { useState, useContext } from "react";
import "./SingleProductPage.css";
import { Products } from "../../Types";
import { useParams } from "react-router-dom";
import ProductPageHeader from "./ProductPageHeader";
import { UserContext } from "../../App";

export default function SingleProductPage() {
  const [quantityWanted, setQuantityWanted] = useState<number>(0);
  const { shoppingCart, setShoppingCart, productList } =
    useContext(UserContext);

  const [product] = useState<Products>(productList[useParams().id - 1]);

  function addToCart(amount: number, product: Products) {
    setShoppingCart(() => {
      let newCart = shoppingCart;
      for (let i = 0; i < amount; i++) {
        newCart = [...newCart, product];
      }
      console.log(`${amount} of ${product.name} added to the cart!`);
      return newCart;
    });
    setQuantityWanted(0);
  }

  function updateQuantityWanted(amount: number) {
    if (quantityWanted === 0 && amount === -1) {
      return;
    }
    setQuantityWanted((quantity) => quantity + amount);
  }

  return (
    <>
      <div className="overall-screen-wrapper">
        {/* <ProductPageHeader className="gallery-header" /> */}
        <ProductPageHeader />
        <div className="gallery-center">
          <div className="product-gallery-wrapper">
            <ProductGallery
              images={
                product.productImages
                //   [
                //   "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                //   "https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                //   "https://images.pexels.com/photos/6373758/pexels-photo-6373758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                //   "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                // ]
              }
            />

            <div className="product-information">
              <h1>{product?.name}</h1>
              <div className="divider-line"></div>
              <h3>${product?.price}</h3>

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

              <p className="product-description">{product?.description}</p>

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
                  if (productWanted) {
                    addToCart(quantityWanted, productWanted);
                  }
                }}
                disabled={quantityWanted === 0}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
