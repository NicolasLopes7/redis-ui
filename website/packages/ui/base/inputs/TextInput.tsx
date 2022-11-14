import React, { forwardRef, ReactNode } from 'react';
import { CSS } from '../../../../stitches.config';
import { Box } from '../Box';
import { Flex, FlexProps } from '../Flex';
import { BaseInput, BaseInputProps } from './Base';

type Props = {
  LeftIcon?: ReactNode;

  containerCss?: CSS;
} & BaseInputProps;

export const TextInput = forwardRef<HTMLInputElement, Props>(({ LeftIcon, containerCss, ...props }: Props, ref) => {
  return (
    <Flex
      align="center"
      css={{
        position: 'relative',
        backgroundColor: '$black100',
        borderRadius: '6px',
        paddingLeft: '20px',
        width: '100%',
        ...containerCss
      }}
    >
      {LeftIcon && <Box>{LeftIcon}</Box>}
      <BaseInput css={{ width: '100%', outline: 'none' }} ref={ref} {...props} />
    </Flex>
  );
});

TextInput.displayName = 'TextInput';

export type TextInputProps = React.ComponentPropsWithRef<typeof TextInput>;
