import ProductGallery from "../ProductGallery/ProductGallery";
import StarIcon from "@mui/icons-material/Star";
import "./SingleProductPage.css";
import { Products } from "../../Types";

export default function SingleProductPage(product: Products) {
  function handleAddToCart(): void {
    console.log("Added to the cart!");
  }

  return (
    <div className="overall-screen-wrapper">
      <div className="product-gallery-wrapper">
        <ProductGallery
          images={[
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
            <input type="number" placeholder="0" />
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
