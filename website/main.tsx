import { RootProvider as RootUIProvider } from '@redis-ui/ui/contexts';
import { RootProvider as RootConnectionsProvider } from '@redis-ui/connections';
import { RootProvider as RootInspectorProvider } from '@redis-ui/inspector';
import React from 'react';
import './globals.css';
import { Router } from './router';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RootUIProvider>
      <RootConnectionsProvider>
        <RootInspectorProvider>
          <Router />
        </RootInspectorProvider>
      </RootConnectionsProvider>
    </RootUIProvider>
  </React.StrictMode>
);
