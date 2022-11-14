import React, { PropsWithChildren } from 'react';
import { ToastContextProvider } from './ToastContext';

export function RootProvider({ children }: PropsWithChildren<{}>) {
  return <ToastContextProvider>{children}</ToastContextProvider>;
}
