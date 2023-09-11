import CreateAProductCard from "../../components/CreateAProduct/CreateAProductCard";
import Header from "../../components/Header/Header";
import { useState } from "react";
import "./Store.css";
import AddProductPopout from "./Add ProductPopout/AddProductPopout";

export default function Store() {
  //   const [hasProduct, setHasProduct] = React.useState(false);

  const [showAddProduct, setShowAddProduct] = useState(false);

  function toggleProductAdd() {
    setShowAddProduct((state) => !state);
  }

  return (
    <div className="store-section-wrapper">
      <Header toggleProductAdd={toggleProductAdd} />
      {showAddProduct && <AddProductPopout />}

      <div className="create-a-product-card">
        <CreateAProductCard />
      </div>
    </div>
  );
}
