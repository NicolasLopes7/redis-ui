import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        baseDarkButton: {
          fontSize: '1em',
          borderRadius: 8,
          fontWeight: 500,
          backgroundColor: '#1a1a1a',
          color: '#ffffffb0',
          _hover: {
            backgroundColor: '#1a1a1ac3',
            color: '#ffffffb7',
          },
        },
      },
    },
    Input: {
      variants: {
        baseDarkInput: {
          borderRadius: 8,
          border: 0,
          fontSize: '1em',
          fontWeight: 500,
          backgroundColor: '#1a1a1a',
          color: '#ffffffb0',
          _placeholder: { color: '#ffffffb0' },
        },
      },
    },
  },
});
