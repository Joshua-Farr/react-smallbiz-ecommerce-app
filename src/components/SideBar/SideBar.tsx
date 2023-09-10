import { Outlet } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="window-wrapper">
      <div className="sidebar-wrapper">
        <h2 className="sidebar-logo">MintRoad</h2>
        <ul className="sidebar-links">
          <li className="sidebar-link">Home</li>
          <li className="sidebar-link">Store</li>
          <li className="sidebar-link">Analytics</li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
