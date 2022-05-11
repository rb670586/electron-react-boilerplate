import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/playertable">Table</Link>
      <Link to="/team">Team Viewer</Link>
    </div>
  );
}
