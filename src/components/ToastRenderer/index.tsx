import React from 'react';
import { useToastProvider } from '../../contexts/ToastProvider';
import { ToastProvider, ToastViewport } from '../base/Toast';
import { ToastContainer } from './Toast';

export function ToastRenderer() {
  const { activeToasts, closeToast } = useToastProvider();

  return (
    <ToastProvider swipeDirection="right">
      {activeToasts.map((toast) => (
        <ToastContainer key={toast.id} toast={toast} closeToast={() => closeToast(toast.id)} />
      ))}

      <ToastViewport />
    </ToastProvider>
  );
}
