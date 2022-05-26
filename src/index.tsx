import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ZCustomersPage from './pages/ZCustomersPage';
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ZCustomersPage />
  </React.StrictMode>
);
