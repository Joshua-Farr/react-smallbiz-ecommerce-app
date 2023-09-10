import "./AddProductPopout.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function AddProductPopout() {
  return (
    <div className="full-screen">
      <div className="dark-side-of-screen"></div>
      <div className="add-product-popup-wrapper">
        <span className="close-add-product-popup">x</span>
        <h2 className="addproduct-title">Add Product</h2>
        <p className="add-product-text beginning">
          Add a new product to your store
        </p>

        <form>
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
                required
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

              {/* <input
                id="name"
                className="questions-input"
                type="text"
                placeholder=""
                required
              ></input>
              <p className="add-product-text">
                Select the pricing model for this product
              </p> */}

              <label htmlFor="price" className="input-label-text">
                Price
              </label>
              <input
                id="price"
                className="questions-input"
                type="number"
                placeholder=""
              ></input>
              <label htmlFor="tax-category" className="input-label-text">
                Tax category
              </label>
              <select
                className="questions-input"
                name="tax-category"
                id="tax-category"
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
