import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { ToastRenderer } from '../toast/ToastRenderer';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export type ToastOptions = {
  type: ToastType;
  title: string;
  message: string;

  /**
   * The duration in milliseconds to show the toast.
   * 0 to infinite
   *
   * @default 3000
   */
  duration?: number;
};

export type ToastData = {
  id: string;
  createdAt: Date;
  duration: number;
} & ToastOptions;

export type ToastContextData = {
  addToast: (options: ToastOptions) => { data: ToastData; remove: () => void };
  closeToast: (id: string) => void;
  activeToasts: ToastData[];
};

export const ToastContext = createContext<ToastContextData | null>(null);

export function ToastContextProvider({ children }: PropsWithChildren<{}>) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const closeToast = useCallback((id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(({ duration = 6000, message, title, type }: ToastOptions) => {
    const id = crypto.randomUUID();
    const newToast = { duration, message, type, title, id, createdAt: new Date() };

    setToasts((toasts) => [...toasts, newToast]);

    return {
      data: newToast,
      remove: () => closeToast(id)
    };
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, closeToast, activeToasts: toasts }}>
      <ToastRenderer />
      {children}
    </ToastContext.Provider>
  );
}

export const useToastProvider = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToastProvider must be called within a ToastContextProvider');

  return context;
};
