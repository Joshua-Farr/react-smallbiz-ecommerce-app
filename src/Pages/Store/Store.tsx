import CreateAProductCard from "../../components/CreateAProduct/CreateAProductCard";
import Header from "../../components/Header/Header";
import "./Store.css";

export default function Store() {
  //   const [hasProduct, setHasProduct] = React.useState(false);

  return (
    <div className="store-section-wrapper">
      <Header />
      <div className="create-a-product-card">
        <CreateAProductCard />
      </div>
    </div>
  );
}
