import { styled } from '../stitches.config';

export const Table = styled('table', {
  background: '$gray100',
  borderCollapse: 'collapse',
  borderRadius: '10px',
  overflow: 'hidden',
  p: '$4'
});

export const TableHead = styled('thead', {
  backgroundColor: '$gray200',

  '& > tr': {
    padding: '$2'
  },

  '& > tr > td': {
    padding: '$4',
    borderBottom: '1px solid $colors$gray600',
    fontWeight: 'bold'
  }
});

export const TableBody = styled('tbody', {
  background: '$gray100',

  '& > tr > td': {
    padding: '$4',
    borderBottom: '1px solid $colors$gray200'
  }
});
