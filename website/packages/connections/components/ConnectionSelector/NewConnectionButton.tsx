import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@redis-ui/ui';
import React from 'react';
import { styled } from '@redis-ui/ui/stitches.config';

export const NewConnectionIcon = styled(PlusIcon, {
  fontSize: '$md',
  mr: '4px'
});

type Props = {
  onClick: () => void;
};

export function NewConnectionButton({ onClick }: Props) {
  return (
    <Button size="md" onClick={onClick}>
      <NewConnectionIcon /> New Connection
    </Button>
  );
}
