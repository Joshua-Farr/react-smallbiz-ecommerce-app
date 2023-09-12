import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
import "./DesignSideBar.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function DesignSideBar() {
  return (
    <>
      <div className="design-sidebar">
        <NavLink to="/">
          <KeyboardBackspaceIcon className="back-icon-design" />
        </NavLink>
        {/* <hr></hr> */}
        <div className="switch-group">
          <span>Show store header</span>
          <Switch defaultChecked color="secondary" size="small" />
        </div>
        <div className="switch-group">
          <span>Show store logo</span>
          <Switch color="secondary" size="small" defaultChecked />
        </div>
        <div className="switch-group">
          <span>Show store name</span>
          <Switch color="secondary" size="small" defaultChecked />
        </div>
        <div className="switch-group secondary">
          <div className="top-info-toggle">
            <span>Show store description</span>
            <Switch color="secondary" size="small" defaultChecked />
          </div>
          <p className="thin-writing">
            Give your store a short, clear description.
          </p>
          <input className="design-description" type="text"></input>
        </div>

        <div className="switch-group">
          <span>Show subscribe form</span>
          <Switch color="secondary" size="small" defaultChecked />
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
          <Switch color="secondary" size="small" />
        </div>
      </div>
    </>
  );
}
