import React from 'react';
import ReactDOM from 'react-dom';
import { ToastRenderer } from './components/ToastRenderer';
import { ToastContextProvider } from './contexts/ToastProvider';
import './globals.css';

import { Router } from './router';

ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <ToastRenderer />

      <Router />
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
