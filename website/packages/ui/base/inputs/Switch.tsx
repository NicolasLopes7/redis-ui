import * as RadixSwitch from '@radix-ui/react-switch';
import React, { PropsWithChildren } from 'react';
import { styled } from '../../stitches.config';
import { Flex } from '../Flex';
import { Text } from '../Text';

const SwitchRoot = styled(RadixSwitch.Root, {
  all: 'unset',
  width: 36,
  height: 22,
  backgroundColor: '$black300',
  borderRadius: '9999px',
  position: 'relative',
  '&:focus': { boxShadow: `0 0 0 2px white` },
  '&[data-state="checked"]': { backgroundColor: '$black300' }
});

const SwitchThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: 'white',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' }
});

const Label = styled(Text, {
  fontSize: '$xs',
  marginRight: '$2'
});

type Props = {
  id: string;

  onChange?: (checked: boolean) => void;
  checked?: boolean;

  defaultChecked?: boolean;
};

export function Switch({ children, id, checked, defaultChecked, onChange }: PropsWithChildren<Props>) {
  return (
    <Flex align={'center'}>
      <Label as="label" htmlFor={id}>
        {children}
      </Label>

      <SwitchRoot onCheckedChange={onChange} checked={checked} defaultChecked={defaultChecked} id={id}>
        <SwitchThumb />
      </SwitchRoot>
    </Flex>
  );
}
