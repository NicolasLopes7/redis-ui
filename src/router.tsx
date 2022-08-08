import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InitialLayout } from './Layout/Initial';
import { FirstConnectionPage } from './pages/FistConnection';
import { KeysPage } from './pages/KeysPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialLayout />}>
          <Route path=":connectionURL" element={<KeysPage />} />
          <Route index element={<FirstConnectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
