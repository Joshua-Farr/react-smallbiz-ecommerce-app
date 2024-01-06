// import CreateAProductCard from "../../components/CreateAProduct/CreateAProductCard";
import Header from "../../components/Header/Header";
import { useState } from "react";
import "./Store.css";
import AddProductPopout from "./AddProductPopout/AddProductPopout";
import ProductListDisplay from "../../components/ProductListDisplay/ProductListDisplay";
import CreateAProductCard from "../../components/CreateAProduct/CreateAProductCard";

export default function Store() {
  const [hasProduct] = useState(true);
  const [showAddProduct, setShowAddProduct] = useState(false);

  function toggleProductAdd() {
    setShowAddProduct((state) => !state);
  }

  return (
    <div className="store-section-wrapper">
      <Header
        toggleProductAdd={toggleProductAdd}
        title={"Products"}
        buttons={true}
      />
      {showAddProduct && (
        <AddProductPopout toggleProductAdd={toggleProductAdd} />
      )}
      {!hasProduct && (
        <div className="create-a-product-card">
          <CreateAProductCard />
        </div>
      )}
      {hasProduct && <ProductListDisplay />}
    </div>
  );
}
