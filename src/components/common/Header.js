import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
  return (
    <nav>
      <ul className="nav nav-pills">
        <BootstrapListItem activeOnlyWhenExact={true} to="/" label="Home" />
        <BootstrapListItem to="/courses" label="Courses" />
        <BootstrapListItem to="/about" label="About" />
        <li>
          <a href="/">{loading && <LoadingDots interval={100} dots={20} />}</a>
        </li>
      </ul>
    </nav>
  );
};

const BootstrapListItem = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
);

export default Header;
