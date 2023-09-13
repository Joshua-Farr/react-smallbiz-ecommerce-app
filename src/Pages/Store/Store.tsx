// import CreateAProductCard from "../../components/CreateAProduct/CreateAProductCard";
import Header from "../../components/Header/Header";
import { useState } from "react";
import "./Store.css";
import AddProductPopout from "./Add ProductPopout/AddProductPopout";
import ProductListDisplay from "../../components/ProductListDisplay/ProductListDisplay";

export default function Store() {
  // const [hasProduct, setHasProduct] = useState(false);

  const [showAddProduct, setShowAddProduct] = useState(false);

  function toggleProductAdd() {
    setShowAddProduct((state) => !state);
  }

  return (
    <div className="store-section-wrapper">
      <Header clickEvent={() => toggleProductAdd()} />
      {showAddProduct && <AddProductPopout />}
      {/* <div className="create-a-product-card">
        {!hasProduct && <CreateAProductCard />}
      </div> */}
      <ProductListDisplay />
    </div>
  );
}
