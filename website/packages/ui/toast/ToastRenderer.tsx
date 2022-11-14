import React, { useCallback } from 'react';
import { ToastData as IToast, useToastProvider } from '../contexts';
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './Toast';
import { Cross1Icon } from '@radix-ui/react-icons';

export function ToastRenderer() {
  const { activeToasts, closeToast } = useToastProvider();

  const handleOpenChange = useCallback(
    (toast: IToast, open: boolean) => {
      if (!open) setTimeout(() => closeToast(toast.id));
    },
    [closeToast]
  );
  return (
    <ToastProvider swipeDirection="right">
      {activeToasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          duration={toast.duration}
          open
          onOpenChange={(open) => handleOpenChange(toast, open)}
        >
          <ToastTitle>{toast?.title}</ToastTitle>
          <ToastDescription>{toast?.message}</ToastDescription>
          <ToastClose asChild aria-label="Close" css={{ color: '$text100' }}>
            <Cross1Icon />
          </ToastClose>
        </Toast>
      ))}

      <ToastViewport />
    </ToastProvider>
  );
}

// export function ToastContainer({ toast, closeToast }: Props) {
//   const handleOpenChange = useCallback(
//     (open: boolean) => {
//       if (!open) setTimeout(() => closeToast());
//     },
//     [closeToast]
//   );

//   return (
//   );
// }
