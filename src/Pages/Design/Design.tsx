import DesignSideBar from "../../components/DesignSideBar/DesignSideBar";
import React, { useEffect } from "react";
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
    descriptionText:
      "Discover a world of digital treasures at our E-commerce store. Instantly download top-quality digital products for all your needs. Shop now!",
    subscribe: true,
    thumbnailSize: "string",
    details: true,
  });

  const setNewSiteSettings = (key: string, value: any) => {
    console.log(key);
    if (key !== "descriptionText") {
      setSiteSettings({ ...siteSettings, [key]: !siteSettings[key] });
      console.log("Toggled: ", key);
    } else {
      setSiteSettings({ ...siteSettings, descriptionText: value });
    }
  };

  React.useEffect(() => {
    console.log(siteSettings);
  }, [siteSettings]);

  return (
    // <div className="store-section-wrapper">
    <div className="design-section-wrapper">
      <DesignSideBar
        setNewSiteSettings={setNewSiteSettings}
        siteSettings={siteSettings}
      />
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
            subscribe={siteSettings.subscribe}
            thumbnailSize={siteSettings.thumbnailSize}
            details={siteSettings.details}
          />
        </div>
      </div>
    </div>

    // </div>
  );
}
