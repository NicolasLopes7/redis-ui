import { styled } from '../stitches.config';

export const Stack = styled('div', {
  display: 'flex',

  variants: {
    wrap: {
      true: {
        flexWrap: 'wrap'
      },
      false: {
        flexWrap: 'nowrap'
      }
    },

    align: {
      center: {
        alignItems: 'center'
      },
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      }
    },

    justify: {
      center: {
        justifyContent: 'center'
      },
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
      },
      stretch: {
        justifyContent: 'stretch'
      }
    },

    width: {
      full: {
        width: '100%'
      },
      auto: {
        width: 'auto'
      }
    },
    direction: {
      column: {
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      }
    },
    spacing: {
      xs: {
        gap: '$1'
      },
      sm: {
        gap: '$2'
      },
      md: {
        gap: '$4'
      },
      lg: {
        gap: '$6'
      },
      xl: {
        gap: '$8'
      }
    }
  }
});
