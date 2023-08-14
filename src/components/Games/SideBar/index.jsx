import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import {
  faGear,
  faMoon,
  faSun as duotoneSun,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { PATHS } from "../../../router/paths";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ROLES, THEMES } from "../../../constants";
import { useAuthContext } from "../../contexts/AuthContext";

const SideBar = ({ activeIcon, showSettings }) => {
  const { theme, toggleTheme } = useThemeContext();
  const { logout, role } = useAuthContext();
  console.log(role);
  const handleLogout = () => {
    logout();
  };
  const handleMoonClick = () => {
    toggleTheme(THEMES.DARK);
  };

  const handleSunClick = () => {
    toggleTheme(THEMES.LIGHT);
  };

  return (
    <div className={`sidebar ${theme === "dark" ? "dark" : "light"}`}>
      <div className="sidebars">
        <Link to={PATHS.ADMIN.SETTINGS}>
          {role === ROLES.ADMIN && (
            <SidebarItem icon={faGear} active={activeIcon === "home"} />
          )}
        </Link>
        <SidebarItem
          icon={faArrowRightFromBracket}
          active={activeIcon === "home"}
          onClick={handleLogout}
        />
      </div>
      <div className="theme">
        <SidebarItem
          icon={faMoon}
          active={activeIcon === "home"}
          onClick={handleMoonClick}
        />
        <SidebarItem
          icon={duotoneSun}
          active={activeIcon === "home"}
          onClick={handleSunClick}
        />
      </div>
    </div>
  );
};
const SidebarItem = ({ icon, active, onClick }) => {
  return (
    <div className={`sidebar-item `} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="icon" />
    </div>
  );
};

export default SideBar;
