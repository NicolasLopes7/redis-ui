import * as ToastPrimitive from '@radix-ui/react-toast';
import { styled, keyframes } from '../stitches.config';

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' }
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  p: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  m: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none'
});

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$gray100',
  color: '$gray900',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  p: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out'
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    }
  },
  variants: {
    type: {
      success: {
        borderLeft: '2px solid $colors$green500'
      },
      error: {
        borderLeft: '2px solid $colors$red500'
      },
      info: {
        borderLeft: '2px solid $colors$blue500'
      },
      warning: {
        borderLeft: '2px solid $colors$yellow500'
      }
    }
  }
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  mb: 5,
  fontWeight: 500,
  color: '$gray900',
  fontSize: 15
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  m: 0,
  color: '$gray900',
  fontSize: 13,
  lineHeight: 1.3
});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action'
});

export const StyledClose = styled(ToastPrimitive.Close, {
  color: '$colors$red500',
  cursor: 'pointer'
});

// Exports
export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const Toast = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = StyledAction;
export const ToastClose = StyledClose;
