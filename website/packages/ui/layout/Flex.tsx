import React from 'react';
import { styled } from '../stitches.config';

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    },
    justify: {
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
      },
      center: {
        justifyContent: 'center'
      },
      between: {
        justifyContent: 'space-between'
      }
    },
    align: {
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      },
      center: {
        alignItems: 'center'
      }
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap'
      },
      nowrap: {
        flexWrap: 'nowrap'
      }
    },

    flex: {
      1: {
        flex: 1
      },
      default: {
        flex: 'initial'
      }
    },

    gap: {
      default: {
        gap: '0'
      },
      xs: {
        gap: '4px'
      },
      sm: {
        gap: '8px'
      },
      md: {
        gap: '16px'
      },
      lg: {
        gap: '24px'
      }
    }
  },
  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'start',
    wrap: 'nowrap',
    flex: 'default'
  }
});

export type FlexProps = React.ComponentPropsWithRef<typeof Flex>;
