import { HTMLAttributes, RefObject } from 'react';

type Options = {
  onClick: () => void;
  disabled?: boolean;
};

export const useButton = (ref: RefObject<HTMLDivElement>, { onClick, disabled }: Options) => {
  return {
    tabIndex: 0,
    onClick: () => {
      if (disabled) return;

      onClick();
    },
    onMouseDown: () => {
      if (!ref.current) return;
      if (disabled) return;
      ref.current.classList.add('active');
    },
    onMouseUp: () => {
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.classList.remove('active');
      }, 100);
    },
    onKeyDown: (e) => {
      if (disabled) return;
      if (e.target !== ref.current) return;

      if (e.key === ' ') {
        e.stopPropagation();
        ref.current.classList.add('active');
        onClick();
      }
    },
    onKeyUp: (e) => {
      if (disabled) return;
      if (e.target !== ref.current) return;

      if (e.key === ' ') {
        setTimeout(() => {
          if (!ref.current) return;
          ref.current.classList.remove('active');
        }, 100);
      }
    },
    ref
  } as HTMLAttributes<HTMLDivElement>;
};
