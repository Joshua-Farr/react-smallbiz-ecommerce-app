import "./AddProductPopout.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function AddProductPopout() {
  return (
    <div className="full-screen">
      <div className="dark-side-of-screen">hello</div>
      <div className="add-product-popup-wrapper">
        <span className="close-add-product-popup">X</span>
        <h2 className="addproduct-title">Add Product</h2>
        <p className="add-product-text">Add a new product to your store</p>

        <form>
          <div className="question-section">
            <div className="add-product-section-header">
              <h3>General</h3>
              <ArrowDropUpIcon />
            </div>
            <div className="section-questions">
              <input
                className="questions-input"
                type="text"
                placeholder=""
              ></input>
              <p className="add-product-text">
                Give your product a short and clear name. <br></br>
                50-60 characters is the recommended length for search engines.
              </p>
              <input
                className="questions-input"
                type="text"
                placeholder=""
              ></input>
              <p className="add-product-text">
                Give your product a short and clear description.
                <br></br>
                120-160 characters is the recommended length for search engines.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
