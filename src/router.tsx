import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionLayout } from './Layout/Connection';
import { InitialLayout } from './Layout/Initial';
import { FirstConnectionPage } from './pages/FistConnection';
import { KeysPage } from './pages/KeysPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialLayout />}>
          <Route index element={<FirstConnectionPage />} />
        </Route>
        <Route path="/:connectionURL" element={<ConnectionLayout />}>
          <Route index element={KeysPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
