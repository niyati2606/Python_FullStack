import { createContext } from 'react';

const UserContext = createContext({
  username: 'nr',
  loggedIn: true,
});

export default UserContext;