import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app';
import '@mantine/dates/styles.css';
import 'antd/dist/reset.css';
import '@radix-ui/themes/styles.css';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
