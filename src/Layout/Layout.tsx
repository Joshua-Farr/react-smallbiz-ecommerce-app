import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout-wrapper">
      <div className="layout-sections">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
