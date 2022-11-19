import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '../../../../../stitches.config';

export const CloseAction = styled(Cross1Icon, {
  position: 'absolute',
  top: '$2',
  right: '$2',
  color: '$text200',

  opacity: 0,
  transition: 'opacity 300ms ease-in-out',
  fontSize: '$sm',

  '&:hover': {
    color: '$white'
  },
  zIndex: 5
});

CloseAction.defaultProps = { className: 'close-action' };
CloseAction.toString = () => '.close-action';

export const Container = styled('div', {
  display: 'flex',
  position: 'relative',

  borderLeftWidth: '4px',
  borderLeftStyle: 'solid',
  borderRadius: '6px',

  padding: '$3',
  paddingLeft: '$4',

  cursor: 'pointer',

  backgroundColor: '$black100',
  transition: 'background-color 200ms ease-in-out',
  width: '100%',

  '&:focus': {
    outline: '1px solid $colors$white'
  },

  '&:hover': {
    backgroundColor: '$black200',

    [`& ${CloseAction}`]: {
      opacity: 1
    }
  },

  variants: {
    isSelected: {
      true: {
        borderColor: '$white'
      },
      false: {
        borderColor: '$black300'
      }
    }
  }
});

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$sm',
  width: '100%'
});
