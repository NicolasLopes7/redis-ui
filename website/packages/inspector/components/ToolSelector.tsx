import React from 'react';
import { Stack } from '@redis-ui/ui';
import { styled } from '@redis-ui/ui/stitches.config';
import { KeyboardIcon } from '@radix-ui/react-icons';

export const Icon = styled('div', {
  sq: '$7'
});

export const ToolItem = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$sm',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  color: '$gray900',
  backgroundColor: '$gray100',
  p: '$2',
  px: '16px',
  cursor: 'pointer',
  borderRadius: '$sm',
  transition: 'background-color 200ms ease-in-out',
  fontSize: '$sm',
  fontWeight: 'bold',

  '&:hover, &:focus': {
    backgroundColor: '$gray300'
  },

  '&:active': {
    backgroundColor: '$gray400'
  }
});

export function ToolSelector() {
  return (
    <Stack
      direction={'column'}
      align="center"
      spacing={'md'}
      css={{
        minHeight: '100vh',
        background: '$gray100',
        p: '$4',
        pt: '76px'
      }}
    >
      <ToolItem>
        <Icon as={KeyboardIcon} />
        Keys
      </ToolItem>

      <ToolItem>
        <Icon as={KeyboardIcon} />
        Pub/Sub
      </ToolItem>

      <ToolItem>
        <Icon as={KeyboardIcon} />
        Lists
      </ToolItem>

      <ToolItem>
        <Icon as={KeyboardIcon} />
        Sets
      </ToolItem>
    </Stack>
  );
}
