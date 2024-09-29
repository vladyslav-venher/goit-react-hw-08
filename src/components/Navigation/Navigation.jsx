import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClass = props => {
  return clsx(css.link, props.isActive && css.active);
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
