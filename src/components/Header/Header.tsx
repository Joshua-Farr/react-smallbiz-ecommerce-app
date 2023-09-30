import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import "./Header.css";

type HeaderProps = {
  toggleProductAdd?: () => void;
  title: string;
  buttons?: boolean;
};

export default function Header(clickMe: HeaderProps) {
  return (
    <div className="header-wrapper">
      <h2 className="page-title">{clickMe.title}</h2>
      {clickMe.buttons && (
        <div className="header-icons">
          <NotificationsNoneRoundedIcon className="mui-icon" />
          <AddCircleIcon
            onClick={() => {
              clickMe?.toggleProductAdd();
            }}
            className="mui-icon plus-icon"
          />
        </div>
      )}
    </div>
  );
}
