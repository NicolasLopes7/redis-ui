import React, { useCallback } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Toast as IToast } from '../../contexts/ToastProvider';
import { Toast, ToastTitle, ToastDescription, ToastAction, ToastClose } from '../base/Toast';

type Props = {
  toast: IToast;
  closeToast: () => void;
};

export function ToastContainer({ toast, closeToast }: Props) {
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) setTimeout(() => closeToast());
    },
    [closeToast]
  );

  return (
    <Toast duration={toast.duration} open onOpenChange={handleOpenChange}>
      <ToastTitle>{toast?.title}</ToastTitle>
      <ToastDescription>{toast?.message}</ToastDescription>
      <ToastClose asChild aria-label="Close">
        <Cross1Icon />
      </ToastClose>
    </Toast>
  );
}
