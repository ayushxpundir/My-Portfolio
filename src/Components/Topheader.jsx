import { NavLink } from "react-router-dom";
import useTheme from "../useTheme";
import DarkModeIcon from "@iconify-react/material-symbols/dark-mode-outline";
import LightModeIcon from "@iconify-react/material-symbols/light-mode-outline";

function Topheader() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="top-header">
      <ul>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/certifications">Certifications</NavLink></li>
        <li>
          <button
            className="theme-toggle-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <LightModeIcon style={{width:'1.25em', height: 'auto',}} />
            ) : (
              <DarkModeIcon style={{width:'1.25em', height: 'auto',}} />
            )}
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Topheader;