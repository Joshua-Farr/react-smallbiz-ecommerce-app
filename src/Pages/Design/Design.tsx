import DesignSideBar from "../../components/DesignSideBar/DesignSideBar";
import Header from "../../components/Header/Header";
import UserWebpage from "../../components/UserWebpage/UserWebpage";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import "./Design.css";

export default function Design() {
  //   const [hasProduct, setHasProduct] = React.useState(false);

  const settings = {
    header: true,
    logo: true,
    name: false,
    description: true,
    descriptionText: "string",
    subscriberForm: true,
    thumbnailSize: "string",
    showProductDetails: true,
  };

  return (
    // <div className="store-section-wrapper">
    <div className="design-section-wrapper">
      <DesignSideBar />
      <div className="sample-view-section">
        {/* <div className="buttons-sample-view">
            <RemoveRedEyeOutlinedIcon sx={{ color: "grey" }} /> */}
        <button className="publish-webpage-btn">Publish Changes</button>
        {/* </div> */}
        <div className="design-preview">
          <div className="fake-browser">
            <div className="circle open-circle"></div>
            <div className="circle minimize-circle"></div>
            <div className="circle close-circle"></div>
          </div>
          <UserWebpage settings={settings} />
        </div>
      </div>
    </div>

    // </div>
  );
}
