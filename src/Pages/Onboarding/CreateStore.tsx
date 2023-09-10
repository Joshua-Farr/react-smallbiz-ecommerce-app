import "./CreateStore.css";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

export default function CreateStore() {
  return (
    <div className="page-wrapper">
      <div className="left-side-main">
        <div className="form-wrapper">
          <h1 className="main-txt">
            Welcome aboard, partner! Now, create your store.
          </h1>

          <h3>or</h3>
          <form onSubmit={(e) => console.log(e)}>
            <input
              type="text"
              className="input-main-screen"
              placeholder="Store Name"
              name="username"
            />

            <input
              className="input-main-screen"
              type="text"
              placeholder="Store url"
              name="password"
            />

            <button className="sign-in-btn">Create my store</button>
          </form>
        </div>
      </div>

      <div className="right-side-main">
        <TestimonialCard />
      </div>
    </div>
  );
}
