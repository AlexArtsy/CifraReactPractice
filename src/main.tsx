import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app.js';
import './styles/global.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
