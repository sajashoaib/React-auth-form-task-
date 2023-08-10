import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';
import { useAuthContext } from '../../contexts/AuthContext';
import { ROLES, THEMES } from '../../constants';
import { useThemeContext } from '../../contexts/ThemeContext';
const Header = () => {
  const { role } = useAuthContext();
  const { theme, toggleTheme } = useThemeContext();
  return (

    <header className='header'>
      <h1>Header</h1>
      <nav>
        {role === ROLES.GUEST ? (
          <ul>
            <li>  <Link to={PATHS.LOGIN}>  LOGIN  </Link> </li>
            <li>  <Link to={PATHS.SIGNUP}>  SIGNUP  </Link> </li>

            <li><button onClick={toggleTheme} style={theme === THEMES.LIGHT ? {
              backgroundColor: "black", color: "white"

            } : {
              backgroundColor: 'white',
              color: 'black'
            }}>{theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT}</button></li>
          </ul>
        )
          : (
            <ul>
              <li>  <Link to={PATHS.HOME}>  Home  </Link> </li>
              <li>  <Link to={PATHS.ABOUT}>  about  </Link> </li>
              <li>  <Link to='/info'>  info  </Link> </li>
              <li>  <Link to={PATHS.POSTS.ROOT}>  POSTS  </Link> </li>

            </ul>
          )}
      </nav>
    </header>
  );
}


export default Header;