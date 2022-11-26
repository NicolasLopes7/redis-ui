import { styled } from '../stitches.config';

export const IconButton = styled('button', {
  border: 'none',
  borderRadius: '$round',
  color: '$gray900',
  transition: 'background-color 0.3s ease-in-out',
  cursor: 'pointer',

  variants: {
    size: {
      sm: {
        p: '$1',
        sq: '$5',
        fontSize: '$sm'
      },
      md: {
        p: '$2',
        sq: '$6',
        fontSize: '$md'
      },
      lg: {
        p: '$3',
        sq: '$8',
        fontSize: '$lg'
      }
    },

    transparent: {
      true: { backgroundColor: 'transparent' }
    },

    color: {
      dark: {},
      red: {},
      yellow: {},
      blue: {},
      green: {}
    }
  },

  compoundVariants: [
    {
      transparent: false,
      color: 'dark',
      css: {
        backgroundColor: '$gray500',
        '&:hover': {
          backgroundColor: '$gray600'
        },
        '&:active': {
          backgroundColor: '$gray200'
        }
      }
    },
    {
      transparent: true,
      color: 'dark',
      css: {
        backgroundColor: '$aGray50',
        '&:hover': {
          backgroundColor: '$aGray100'
        },
        '&:active': {
          backgroundColor: '$aGray200'
        }
      }
    },
    {
      transparent: false,
      color: 'blue',
      css: {
        backgroundColor: '$blue500',
        '&:hover': {
          backgroundColor: '$blue600'
        },
        '&:active': {
          backgroundColor: '$blue700'
        }
      }
    },
    {
      transparent: true,
      color: 'blue',
      css: {
        backgroundColor: '$aBlue500',
        '&:hover': {
          backgroundColor: '$aBlue600'
        },
        '&:active': {
          backgroundColor: '$aBlue700'
        }
      }
    },
    {
      transparent: false,
      color: 'green',
      css: {
        backgroundColor: '$green500',
        '&:hover': {
          backgroundColor: '$green600'
        },
        '&:active': {
          backgroundColor: '$green200'
        }
      }
    },
    {
      transparent: true,
      color: 'green',
      css: {
        backgroundColor: '$aGreen50',
        '&:hover': {
          backgroundColor: '$aGreen100'
        },
        '&:active': {
          backgroundColor: '$aGreen200'
        }
      }
    },
    {
      transparent: false,
      color: 'green',
      css: {
        backgroundColor: '$green500',
        '&:hover': {
          backgroundColor: '$green600'
        },
        '&:active': {
          backgroundColor: '$green700'
        }
      }
    },
    {
      transparent: true,
      color: 'green',
      css: {
        backgroundColor: '$aGreen500',
        '&:hover': {
          backgroundColor: '$aGreen600'
        },
        '&:active': {
          backgroundColor: '$aGreen700'
        }
      }
    },
    {
      transparent: false,
      color: 'yellow',
      css: {
        backgroundColor: '$yellow500',
        '&:hover': {
          backgroundColor: '$yellow600'
        },
        '&:active': {
          backgroundColor: '$yellow700'
        }
      }
    },
    {
      transparent: true,
      color: 'yellow',
      css: {
        backgroundColor: '$aYellow500',
        '&:hover': {
          backgroundColor: '$aYellow600'
        },
        '&:active': {
          backgroundColor: '$aYellow700'
        }
      }
    }
  ]
});
