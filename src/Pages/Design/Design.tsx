import DesignSideBar from "../../components/DesignSideBar/DesignSideBar";
import Header from "../../components/Header/Header";
import UserWebpage from "../../components/UserWebpage/UserWebpage";
import "./Design.css";

export default function Design() {
  //   const [hasProduct, setHasProduct] = React.useState(false);

  return (
    <div className="store-section-wrapper">
      <div className="design-section-wrapper">
        <DesignSideBar />
        <div className="sample-view-section">
          <button className="publish-webpage-btn">Publish Changes</button>
          <div className="design-preview">
            <div className="fake-browser">
              <div className="circle open-circle"></div>
              <div className="circle minimize-circle"></div>
              <div className="circle close-circle"></div>
            </div>
            <UserWebpage />
          </div>
        </div>
      </div>

      {/* <Header /> */}
    </div>
  );
}
