import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import "./Header.css";

export default function Header({}) {
  return (
    <div className="header-wrapper">
      <h2 className="page-title">Products</h2>
      <div className="header-icons">
        <SearchRoundedIcon className="mui-icon" />
        <NotificationsNoneRoundedIcon className="mui-icon" />
        <AddCircleIcon className="mui-icon plus-icon" />
      </div>
    </div>
  );
}
