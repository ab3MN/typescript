import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Nav: FC = () => (
  <nav className={style.nav}>
    <NavLink
      exact
      to="/"
      className={style.nav_item}
      activeClassName={style.nav_item__active}
    >
      Home
    </NavLink>
    <NavLink
      to="/posts"
      className={style.nav_item}
      activeClassName={style.nav_item__active}
    >
      Posts
    </NavLink>
    <NavLink
      to="/gallery"
      className={style.nav_item}
      activeClassName={style.nav_item__active}
    >
      Gallery
    </NavLink>
    <NavLink
      to="/weather"
      className={style.nav_item}
      activeClassName={style.nav_item__active}
    >
      Weather
    </NavLink>
    <NavLink
      to="/movies"
      className={style.nav_item}
      activeClassName={style.nav_item__active}
    >
      Movies
    </NavLink>
  </nav>
);

export default Nav;
