import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

export const SidebarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
});

export const SidebarItem = styled(Link, {
  fontSize: '$2xl',
  color: '$white',

  textDecoration: 'none',

  '&:hover': {
    background: '$black200'
  },

  '&:active': {
    background: '$black100'
  }
});
