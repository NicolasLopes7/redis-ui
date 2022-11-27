import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';
import { keyframes, styled } from '../stitches.config';
import { IconButton } from './IconButton';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: '$aGray100',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
});

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray100',
  color: '$gray800',
  borderRadius: '$sm',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '$5',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' }
});

export const Title = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 'bold',
  color: '$gray900',
  fontSize: '$md'
});

export const Description = styled(Dialog.Description, {
  my: '$space$5',
  color: '$gray800',
  fontSize: '$md'
});

export const Root = Dialog.Root;
export const Trigger = Dialog.Trigger;
export const Close = Dialog.Close;
export const Portal = Dialog.Portal;

export const CloseIcon = styled(Cross2Icon, {
  color: '$gray900'
});

export function CloseIconButton() {
  return (
    <Close asChild>
      <IconButton
        transparent={false}
        color="dark"
        css={{
          position: 'absolute',
          top: '$3',
          right: '$3',
          width: '$5',
          height: '$5'
        }}
      >
        <CloseIcon />
      </IconButton>
    </Close>
  );
}
