import React from 'react';
import { Link } from 'react-router-dom';
import UserSearch from './UserSearch';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Github profile viewer</span>
        </Link>
        <UserSearch />
      </div>
    </nav>
  );
};

export default Header;
