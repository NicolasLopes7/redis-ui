import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@redis-ui/ui/stitches.config';

export const CloseAction = styled(Cross1Icon, {
  position: 'absolute',
  top: '$2',
  right: '$2',
  color: '$gray800',

  opacity: 0,
  transition: 'opacity 300ms ease-in-out',
  fontSize: '$sm',

  '&:hover': {
    color: '$gray900'
  },

  '&:focus': {
    opacity: 1
  },

  zIndex: 5
});

CloseAction.defaultProps = { className: 'close-action' };
CloseAction.toString = () => '.close-action';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  position: 'relative',

  border: 'none',
  borderLeftWidth: '4px',
  borderLeftStyle: 'solid',
  borderRadius: '6px',

  p: '$3',
  pl: '$4',

  cursor: 'pointer',

  backgroundColor: '$gray200',
  transition: 'background-color 200ms ease-in-out',
  width: '100%',

  '&:focus': {
    outline: '1px solid $colors$gray900'
  },

  '&:hover, &:active': {
    backgroundColor: '$gray300'
  },

  '&:hover, &:focus': {
    [`& ${CloseAction}`]: {
      opacity: 1
    }
  },

  variants: {
    isSelected: {
      true: {
        borderColor: '$gray900'
      },
      false: {
        borderColor: '$gray400'
      }
    }
  }
});

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  gap: '4px',
  width: '100%'
});
