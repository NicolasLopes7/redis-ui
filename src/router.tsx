import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InitialLayout } from './Layout/Initial';
import { FirstConnectionPage } from './pages/FirstConnection';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialLayout />}>
          <Route path="" element={<FirstConnectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
