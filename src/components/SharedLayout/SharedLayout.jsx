import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from '../App.module.css';
import styled from 'styled-components';

const SharedLayout = () => {
  const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: 20px;

    &.active {
      color: orange;
    }
  `;

  return (
    <>
      <nav className={css.navigation}>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movie">Movies</StyledLink>
          </li>
        </ul>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
