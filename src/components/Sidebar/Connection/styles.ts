import { styled } from '../../../stitches.config';
import { Text } from '../../base';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '8px',
  minHeight: '40px',
  borderRadius: '4px',
  cursor: 'pointer',

  variants: {
    selected: {
      true: {
        background: '$black50'
      },
      false: {
        background: '$black200',

        '&:hover': {
          background: '$black100'
        }
      }
    }
  }
});

export const ConnectionText = styled(Text, {
  marginRight: 'auto'
});

export const IndicatorBar = styled('div', {
  width: '2px',
  height: '100%',
  marginRight: '12px',

  variants: {
    selected: {
      true: {
        backgroundColor: 'white'
      },
      false: {
        backgroundColor: '$bg100'
      }
    }
  }
});
