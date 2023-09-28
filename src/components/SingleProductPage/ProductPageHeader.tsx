import "./SingleProductPage.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function ProductPageHeader() {
  return (
    <div className="product-page-header-wrapper">
      <h2 className="logo">MintRoad</h2>
      <ShoppingBagOutlinedIcon />
    </div>
  );
}
