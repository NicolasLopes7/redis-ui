import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionLayout } from './layouts/Connection';
import { InitialPage } from './pages';
import { KeysPage } from './pages/connection/keys';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InitialPage />} />
        <Route path="/connection" element={<ConnectionLayout />}>
          <Route path="keys" element={<KeysPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
