import "./SingleProductPage.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { NavLink } from "react-router-dom";

export default function ProductPageHeader() {
  return (
    <div className="product-page-header-wrapper">
      <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
        <h2 className="logo">MintRoad</h2>
      </NavLink>
      <NavLink to="/checkout">
        <ShoppingBagOutlinedIcon />
      </NavLink>
    </div>
  );
}
