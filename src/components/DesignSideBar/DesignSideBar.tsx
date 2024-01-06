import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
import { StoreSettings } from "../../Types";

import "./DesignSideBar.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

// interface DesignSideBarProps {
//   setNewSiteSettings: (key: string, value: any) => void;
//   siteSettings: {
//     header: boolean;
//     logo: boolean;
//     name: boolean;
//     description: boolean;
//     descriptionText: string;
//     subscriberForm: boolean;
//     thumbnailSize: string;
//     showProductDetails: boolean;
//   };
// }

export default function DesignSideBarReact({
  setNewSiteSettings,
  siteSettings,
}) {
  return (
    <>
      <div className="design-sidebar">
        <NavLink to="/">
          <KeyboardBackspaceIcon className="back-icon-design" />
        </NavLink>
        {/* <hr></hr> */}
        <div className="switch-group">
          <span>Show store header</span>
          <Switch
            defaultChecked
            color="secondary"
            size="small"
            onChange={() => {
              // setSwitchStatus(...switchStatus, [switchStatus.header]: !switchStatus.header.value )
              setNewSiteSettings("header");
            }}
            checked={siteSettings.header}
          />
        </div>
        <div className="switch-group">
          <span>Show store logo</span>
          <Switch
            color="secondary"
            size="small"
            defaultChecked
            onChange={() => setNewSiteSettings("logo")}
            checked={siteSettings.logo}
          />
        </div>
        <div className="switch-group">
          <span>Show store name</span>
          <Switch
            color="secondary"
            size="small"
            defaultChecked
            onChange={() => setNewSiteSettings("name")}
            checked={siteSettings.name}
          />
        </div>
        <div className="switch-group secondary">
          <div className="top-info-toggle">
            <span>Show store description</span>
            <Switch
              color="secondary"
              size="small"
              onChange={() => setNewSiteSettings("description")}
              checked={siteSettings.description}
            />
          </div>
          <p className="thin-writing">
            Give your store a short, clear description.
          </p>
          <input
            className="design-description"
            onChange={(e) => {
              e.preventDefault();
              setNewSiteSettings("descriptionText", e.target.value);
            }}
            type="text"
          ></input>
        </div>

        <div className="switch-group">
          <span>Show subscribe form</span>
          <Switch
            color="secondary"
            size="small"
            onChange={() => setNewSiteSettings("subscribe")}
            checked={siteSettings.subscribe}
          />
        </div>

        <div>
          <div className="switch-group">
            <span>Thumbnail size</span>
            <select>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
