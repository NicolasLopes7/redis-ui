import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';

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

export type Toast = {
  id: string;
  createdAt: Date;
  duration: number;
} & ToastOptions;

export type ToastContextData = {
  addToast: (options: ToastOptions) => void;
  closeToast: (id: string) => void;
  activeToasts: Toast[];
};

export const ToastContext = createContext({} as ToastContextData);

export function ToastContextProvider({ children }: PropsWithChildren<{}>) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    ({ duration = 3000, message, title, type }: ToastOptions) => {
      const newToast = { duration, message, type, title, id: crypto.randomUUID(), createdAt: new Date() };

      setToasts([...toasts, newToast]);
    },
    [toasts]
  );

  const closeToast = useCallback(
    (id: string) => {
      const newToasts = toasts.filter((toast) => toast.id !== id);
      setToasts(newToasts);
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, closeToast, activeToasts: toasts }}>{children}</ToastContext.Provider>
  );
}

export const useToastProvider = () => {
  return useContext(ToastContext);
};
