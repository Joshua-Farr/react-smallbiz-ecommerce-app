import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import "./Login.css";

export default function Login() {
  return (
    <div className="page-wrapper">
      <div className="left-side-main">
        <div className="form-wrapper">
          <h1 className="main-txt">Sign in to MintRoad</h1>

          <h3>or</h3>
          <form onSubmit={(e) => console.log(e)}>
            <input
              type="text"
              className="input-main-screen"
              placeholder="Email address"
              name="username"
            />

            <input
              className="input-main-screen"
              type="password"
              placeholder="Password"
              name="password"
            />

            <button className="sign-in-btn">Sign in</button>
          </form>
        </div>
      </div>

      <div className="right-side-main">
        <TestimonialCard />
      </div>
    </div>
  );
}
