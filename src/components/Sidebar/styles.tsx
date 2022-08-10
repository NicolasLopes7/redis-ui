import { styled } from '../../stitches.config';
import { Flex, Text } from '../base';

export const SidebarTitle = styled(Text, {
  fontSize: '$sm',
  color: '$text200',
  fontWeight: 'bold'
});

export const SidebarGroup = styled(Flex, {
  width: '100%',
  defaultVariants: {
    direction: 'column',
    gap: 'sm'
  }
});
