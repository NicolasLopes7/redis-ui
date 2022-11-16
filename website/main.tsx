import { RootProvider as RootUIProvider } from '@redis-ui/ui/contexts';
import { RootProvider as RootConnectionsProvider } from '@redis-ui/connections';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectionsProvider } from './contexts/ConnectionsProvider';
import './globals.css';
import { Router } from './router';

ReactDOM.render(
  <React.StrictMode>
    <RootUIProvider>
      <RootConnectionsProvider>
        <ConnectionsProvider>
          <Router />
        </ConnectionsProvider>
      </RootConnectionsProvider>
    </RootUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
