import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionLayout } from './layouts/Connection';
import { InitialPage } from './pages';
import { KeysPage } from './pages/KeysPage';

export function Router() {
  console.log('salve');

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InitialPage />} />
      </Routes>
    </BrowserRouter>
  );
}
