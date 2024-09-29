import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getNavLinkClass = props => {
  return clsx(css.link, props.isActive && css.active);
};

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={getNavLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
