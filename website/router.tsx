import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionLayout } from './layouts/Connection';
import { InitialPage } from './pages';
import { KeysPage } from './pages/connection/keys';
import { ListsPage } from './pages/connection/lists';
import { PubSubPage } from './pages/connection/pubsub';
import { SetsPage } from './pages/connection/sets';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InitialPage />} />
        <Route path="/connection" element={<ConnectionLayout />}>
          <Route path="keys" element={<KeysPage />} />
          <Route path="pubsub" element={<PubSubPage />} />
          <Route path="sets" element={<SetsPage />} />
          <Route path="lists" element={<ListsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
