import DesignSideBar from "../../components/DesignSideBar/DesignSideBar";
import React from "react";
import Header from "../../components/Header/Header";
import UserWebpage from "../../components/UserWebpage/UserWebpage";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import "./Design.css";

export default function Design() {
  const [siteSettings, setSiteSettings] = React.useState({
    header: true,
    logo: true,
    name: true,
    description: true,
    descriptionText: "string",
    subscriberForm: true,
    thumbnailSize: "string",
    showProductDetails: true,
  });

  function changeSettings(key: string, value: any): void {
    console.log(siteSettings);
    const tempObj = { ...siteSettings, key: value };
    setSiteSettings(tempObj);
    console.log("----------------");
    console.log(siteSettings);
  }

  // changeSettings("header", false);

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
          <UserWebpage
            header={siteSettings.header}
            logo={siteSettings.logo}
            name={siteSettings.name}
            description={siteSettings.description}
            descriptionText={siteSettings.descriptionText}
            subscriberForm={siteSettings.subscriberForm}
            thumbnailSize={siteSettings.thumbnailSize}
            showProductDetails={siteSettings.showProductDetails}
          />
        </div>
      </div>
    </div>

    // </div>
  );
}
