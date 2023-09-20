import Switch from "@mui/material/Switch";
import React from "react";
import { NavLink } from "react-router-dom";

import "./DesignSideBar.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface DesignSideBarProps {
  setNewSiteSettings: (key: string, value: any) => void;
}

export default function DesignSideBarReact({ setNewSiteSettings }) {
  const [switchStatus, setSwitchStatus] = React.useState({
    header: true,
    logo: true,
    name: true,
    description: true,
    subscribe: true,
  });

  const handleChange = (value: String): void => {
    console.log(value);
  };

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
              setNewSiteSettings("header", switchStatus.header);
            }}
            checked={switchStatus.header}
          />
        </div>
        <div className="switch-group">
          <span>Show store logo</span>
          <Switch
            color="secondary"
            size="small"
            defaultChecked
            onChange={() => setNewSiteSettings("logo", switchStatus.logo)}
            checked={switchStatus.logo}
          />
        </div>
        <div className="switch-group">
          <span>Show store name</span>
          <Switch
            color="secondary"
            size="small"
            defaultChecked
            onChange={() => setNewSiteSettings("logo", switchStatus.name)}
            checked={switchStatus.name}
          />
        </div>
        <div className="switch-group secondary">
          <div className="top-info-toggle">
            <span>Show store description</span>
            <Switch
              color="secondary"
              size="small"
              defaultChecked
              onChange={() => handleChange("description")}
            />
          </div>
          <p className="thin-writing">
            Give your store a short, clear description.
          </p>
          <input className="design-description" type="text"></input>
        </div>

        <div className="switch-group">
          <span>Show subscribe form</span>
          <Switch
            color="secondary"
            size="small"
            defaultChecked
            onChange={() => handleChange("subscribe")}
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
        <div className="switch-group">
          <span>Show product details</span>
          <Switch
            color="secondary"
            size="small"
            onChange={() => handleChange("details")}
          />
        </div>
      </div>
    </>
  );
}
