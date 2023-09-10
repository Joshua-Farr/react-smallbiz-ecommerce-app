import "./SideBar.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <h2 className="sidebar-logo">MintRoad</h2>
      <ul className="sidebar-links">
        <NavLink to="/" className="sidebar-link">
          Home
        </NavLink>
        <NavLink to="/store" className="sidebar-link">
          Products
        </NavLink>
        <NavLink to="/analytics" className="sidebar-link">
          Analytics
        </NavLink>
      </ul>
    </div>
  );
}
