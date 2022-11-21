import { Link } from 'react-router-dom';
import { styled } from '@redis-ui/ui/stitches.config';

export const SidebarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
});

export const SidebarItem = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '$md',
  color: '$white',
  padding: '8px 32px',

  '& svg': {
    width: '16px',
    height: '16px'
  },

  textDecoration: 'none',

  '&:hover': {
    background: '$black200'
  },

  '&:active': {
    background: '$black100'
  }
});
