import DesignSideBar from "../../components/DesignSideBar/DesignSideBar";
import React from "react";
import UserWebpage from "../../components/UserWebpage/UserWebpage";
import { UserContext } from "../../App";
import "./Design.css";

export default function Design() {
  const { siteSettings, setSiteSettings } = React.useContext(UserContext);

  const setNewSiteSettings = (key: string, value: any) => {
    console.log(key);
    if (key !== "descriptionText") {
      setSiteSettings({ ...siteSettings, [key]: !siteSettings[key] });
      console.log("Toggled: ", key);
    } else {
      setSiteSettings({ ...siteSettings, descriptionText: value });
    }
  };

  return (
    <div className="design-section-wrapper">
      <DesignSideBar
        setNewSiteSettings={setNewSiteSettings}
        siteSettings={siteSettings}
      />
      <div className="sample-view-section">
        <div className="buttons-sample-view">
          {/* <button className="publish-webpage-btn">See Preview</button> */}

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
    </div>
  );
}
