import "./ProductCard.css";
import { NavLink } from "react-router-dom";

interface ProductCardProps {
  name: string;
  price: number;
  image?: string;
  description?: string;
  id: number;
}

export default function ProductCard(product: ProductCardProps) {
  return (
    <NavLink
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: `black` }}
    >
      <div className="product-card">
        <div className="product-card-img">
          <img src={product.image} alt="" />
        </div>
        <h3 className="product-card-product-title">{product.name}</h3>
        <h4 className="product-card-product-price">${product.price}</h4>
        <p className="product-card-product-description">
          {product.description}
        </p>
      </div>
    </NavLink>
  );
}
