import "./AddProductPopout.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DragDropFile from "../../../components/DragDropFile/DragDropFile";

type ProductFormState = {
  name: string;
  description: string;
  price: number;
  taxCategory: string;
  productImages: string[];
  files: string[];
};

type PopoutProps = {
  toggleProductAdd: () => void;
};

export default function AddProductPopout(closebtn: PopoutProps) {
  const [productDetails, setProductDetails] = React.useState<ProductFormState>({
    name: "",
    description: "",
    price: 0,
    taxCategory: "",
    productImages: [""],
    files: [""],
  });

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Submitted!", productDetails);
    closebtn.toggleProductAdd();
  }

  return (
    <div className="full-screen">
      <div className="dark-side-of-screen"></div>
      <div className="add-product-popup-wrapper">
        <div className="publish-section">
          <button type="submit" form="new-product-form">
            Publish product
          </button>
        </div>
        <span
          className="close-add-product-popup"
          onClick={() => closebtn.toggleProductAdd()}
        >
          x
        </span>
        <h2 className="addproduct-title">Add Product</h2>
        <p className="add-product-text beginning">
          Add a new product to your store
        </p>
        <form id="new-product-form" onSubmit={handleFormSubmit}>
          {/* Basic Info Section */}
          <div className="question-section">
            <div className="add-product-section-header">
              <h3>General</h3>
              <ArrowDropUpIcon />
            </div>
            <div className="section-questions">
              <label htmlFor="name" className="input-label-text">
                Name
              </label>

              <input
                id="name"
                className="questions-input"
                type="text"
                placeholder=""
                // required
                onChange={(e) => {
                  // console.log(e.target.value);
                  setProductDetails({
                    ...productDetails,
                    name: e.target.value,
                  });
                }}
              ></input>
              <p className="add-product-text">
                Give your product a short and clear name. <br></br>
                50-60 characters is the recommended length for search engines.
              </p>
              <label htmlFor="description" className="input-label-text">
                Description
              </label>
              <input
                id="description"
                className="questions-input"
                type="text"
                placeholder=""
                onChange={(e) => {
                  // console.log(e.target.value);
                  setProductDetails({
                    ...productDetails,
                    description: e.target.value,
                  });
                }}
              ></input>
              <p className="add-product-text">
                Give your product a short and clear description.
                <br></br>
                120-160 characters is the recommended length for search engines.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="question-section">
            <div className="add-product-section-header">
              <h3>Pricing</h3>
              <ArrowDropUpIcon />
            </div>
            <div className="section-questions">
              <div className="pricing-type-boxes">
                <div className="pricing-box">
                  <h3>Single Payment</h3>
                  <p>Charge a one-time fee</p>
                </div>
                <div className="pricing-box">
                  <h3>Subscription</h3>
                  <p>Charge an ongoing fee</p>
                </div>
                <div className="pricing-box">
                  <h3>Lead magnet</h3>
                  <p>Allow access for free</p>
                </div>
                <div className="pricing-box">
                  <h3>Pay what you want</h3>
                  <p>Customers set the price</p>
                </div>
              </div>

              <label htmlFor="price" className="input-label-text">
                Price
              </label>
              <input
                id="price"
                className="questions-input"
                type="number"
                placeholder=""
                onChange={(e) => {
                  console.log(e.target.value);
                  setProductDetails({
                    ...productDetails,
                    price: e.target.valueAsNumber,
                  });
                }}
              ></input>
              <label htmlFor="tax-category" className="input-label-text">
                Tax category
              </label>
              <select
                className="questions-input"
                name="tax-category"
                id="tax-category"
                onChange={(e) => {
                  console.log(e.target.value);
                  setProductDetails({
                    ...productDetails,
                    taxCategory: e.target.value,
                  });
                }}
              >
                <option value="digital-goods">
                  Digital goods or services (excluding ebooks)
                </option>
                <option value="ebook">Ebook</option>
                <option value="saas">Software as a service (SaaS)</option>
              </select>
              <p className="add-product-text">
                Select the tax category for this product
              </p>
            </div>
          </div>

          {/* Media Section */}
          <div className="question-section">
            <div className="add-product-section-header">
              <h3>Media</h3>
              <ArrowDropUpIcon />
            </div>
            <div className="section-questions">
              <DragDropFile />
              <p className="add-product-text">
                Add up to 10 images to your product. Used to represent your
                product during checkout, in email, social sharing and more.
              </p>
            </div>
          </div>

          {/* Files Section */}
          <div className="question-section">
            <div className="add-product-section-header">
              <h3>Media</h3>
              <ArrowDropUpIcon />
            </div>
            <div className="section-questions">
              <DragDropFile />
              <p className="add-product-text">
                Upload an unlimited number of files to your product. Your
                customers will be given access to them after purchase.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
