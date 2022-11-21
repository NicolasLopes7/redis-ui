import React, { PropsWithChildren } from 'react';
import { styled } from '../stitches.config';
import { Switch, Text } from '../base';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  p: '12px 20px',

  width: '100%',
  borderRadius: '6px',

  background: '$gray50'
});

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%'
});

const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  overflow: 'hidden',
  variants: {
    visible: {
      true: {},
      false: {
        display: 'none'
      }
    }
  },

  defaultVariants: {
    visible: false
  }
});

type ToggleAreaProps = {
  id: string;
  title: string;

  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (isToggled: boolean) => void;
};

export function ToggleArea({
  id,
  title,
  checked,
  defaultChecked,
  onChange,
  children
}: PropsWithChildren<ToggleAreaProps>) {
  return (
    <Container>
      <Header as={'label'} htmlFor={id}>
        <Text css={{ fontSize: '$sm', fontWeight: 'bold' }}>{title}</Text>
        <Switch id={id} checked={checked} defaultChecked={defaultChecked} onChange={onChange} />
      </Header>

      {checked && <Body visible={checked}>{children}</Body>}
    </Container>
  );
}
