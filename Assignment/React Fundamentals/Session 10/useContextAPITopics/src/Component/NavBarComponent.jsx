import React, { useContext } from 'react';
import UserContext from './UserContext';

function NavbarComponent() {
  const { username, loggedIn } = useContext(UserContext);

  return (
    <nav style={{ padding: '12px 20px', background: '#222', color: '#fff' }}>
      <span>My App</span>
      <span style={{ float: 'right' }}>
        {loggedIn ? `Hi, ${username}` : 'Not logged in'}
      </span>
    </nav>
  );
}

export default NavbarComponent;