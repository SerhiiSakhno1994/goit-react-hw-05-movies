import { Outlet, NavLink } from 'react-router-dom';

import s from './Layout.module.css';

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={setActive}>
          Movies
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
