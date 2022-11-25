import React from 'react';
import { Stack } from '@redis-ui/ui';
import { styled } from '@redis-ui/ui/stitches.config';
import { BellIcon, ColumnsIcon, KeyboardIcon, RowsIcon, TableIcon } from '@radix-ui/react-icons';

export const Icon = styled('div', {
  sq: '$5'
});

export const ToolItem = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  color: '$gray800',
  backgroundColor: '$gray100',
  sq: '$8',
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
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$gray400',
        color: '$gray900',

        '&:hover, &:focus, &:active': {
          backgroundColor: '$gray400'
        }
      }
    }
  }
});

export type Tool = 'keys' | 'pubsub' | 'lists' | 'sets';

type Props = {
  onToolSelect: (tool: Tool) => void;
  selectedTool: Tool;
};

export function ToolSelector({ onToolSelect, selectedTool }: Props) {
  const handleToolSelect = (tool: Tool) => () => onToolSelect(tool);

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
      <ToolItem isSelected={selectedTool === 'keys'} onClick={handleToolSelect('keys')}>
        <Icon as={TableIcon} />
        Keys
      </ToolItem>

      <ToolItem isSelected={selectedTool === 'pubsub'} onClick={handleToolSelect('pubsub')}>
        <Icon as={BellIcon} />
        Pub/Sub
      </ToolItem>

      <ToolItem isSelected={selectedTool === 'lists'} onClick={handleToolSelect('lists')}>
        <Icon as={ColumnsIcon} />
        Lists
      </ToolItem>

      <ToolItem isSelected={selectedTool === 'sets'} onClick={handleToolSelect('sets')}>
        <Icon as={RowsIcon} />
        Sets
      </ToolItem>
    </Stack>
  );
}
