import { RootProvider } from '@redis-ui/ui/contexts';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectionsProvider } from './contexts/ConnectionsProvider';
import './globals.css';
import { Router } from './router';

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <ConnectionsProvider>
        <Router />
      </ConnectionsProvider>
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
