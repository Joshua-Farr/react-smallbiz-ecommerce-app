import CreateAProductCard from "../../components/CreateAProduct/CreateAProductCard";
import "./Store.css";

export default function Store() {
  //   const [hasProduct, setHasProduct] = React.useState(false);

  return (
    <div className="store-section-wrapper">
      <h2 className="page-title">Products</h2>
      <div className="create-a-product-card">
        <CreateAProductCard />
      </div>
    </div>
  );
}
