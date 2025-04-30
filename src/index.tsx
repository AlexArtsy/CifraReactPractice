import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app';
import './styles/main.scss';
import '@mantine/dates/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
