import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: number;
  image?: string;
  description?: string;
}

export default function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <div className="product-card-img"></div>
      <h3 className="product-card-product-title">{name}</h3>
      <h4 className="product-card-product-price">${price}</h4>
      <p className="product-card-product-description">{description}</p>
    </div>
  );
}
