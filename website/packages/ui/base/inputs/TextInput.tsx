import React, { forwardRef, ReactNode } from 'react';
import { CSS } from '../../stitches.config';
import { Box } from '../../layout/Box';
import { Flex } from '../../layout/Flex';
import { Text } from '../Text';
import { BaseInput, BaseInputProps } from './Base';

type Props = {
  LeftIcon?: ReactNode;
  error?: string;

  containerCss?: CSS;
} & BaseInputProps;

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ LeftIcon, containerCss, error, ...props }: Props, ref) => {
    return (
      <Flex direction="column" css={{ width: '100%', alignItems: 'stretch', gap: '$1', ...containerCss }}>
        <Flex
          align="center"
          css={{
            position: 'relative',
            backgroundColor: '$gray200',
            borderRadius: '6px',
            pl: '20px',
            width: '100%'
          }}
        >
          {LeftIcon && <Box>{LeftIcon}</Box>}
          <BaseInput css={{ width: '100%', outline: 'none' }} ref={ref} {...props} />
        </Flex>

        {error && (
          <Text
            css={{
              color: 'red',
              fontSize: '$xs',
              fontWeight: 'bold',
              ml: '2px'
            }}
          >
            {error}
          </Text>
        )}
      </Flex>
    );
  }
);

TextInput.displayName = 'TextInput';

export type TextInputProps = React.ComponentPropsWithRef<typeof TextInput>;
