import React from 'react';
import ReactDOM from 'react-dom/client';
import { user1 } from '@assets/userData';
import App from './App';
import './styles/index.css';
import UserContext from './contexts/userContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UserContext.Provider value={user1}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
);
