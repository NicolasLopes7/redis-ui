import { styled } from '../../stitches.config';
import { Text } from '../base';

export const SidebarTitle = styled(Text, {
  fontSize: '$sm',
  color: '$text200',
  fontWeight: 'bold'
});

export const SidebarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
});
