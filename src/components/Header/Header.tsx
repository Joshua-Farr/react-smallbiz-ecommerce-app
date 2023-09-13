import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import "./Header.css";

type HeaderProps = {
  clickEvent: () => void;
};

export default function Header(props: HeaderProps) {
  return (
    <div className="header-wrapper">
      <h2 className="page-title">Products</h2>
      <div className="header-icons">
        <SearchRoundedIcon className="mui-icon" />
        <NotificationsNoneRoundedIcon className="mui-icon" />
        <AddCircleIcon
          onClick={() => props.clickEvent()}
          className="mui-icon plus-icon"
        />
      </div>
    </div>
  );
}
