import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionLayout } from './layouts/Connection';
import { InitialLayout } from './layouts/Initial';
import { InitialPage } from './pages';
import { KeysPage } from './pages/KeysPage';

export function Router() {
  console.log('salve');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialLayout />}>
          <Route index element={<InitialPage />} />
        </Route>
        <Route path="/:connectionURL" element={<ConnectionLayout />}>
          <Route index element={KeysPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
