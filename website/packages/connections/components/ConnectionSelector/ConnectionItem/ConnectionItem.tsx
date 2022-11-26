import { Cross1Icon } from '@radix-ui/react-icons';
import { Text } from '@redis-ui/ui';
import { IconButton } from '@redis-ui/ui/base/IconButton';
import { useButton } from '@redis-ui/ui/hooks/useButton';
import React, { useRef } from 'react';
import { Connection } from '../../../schemas';
import { CloseAction, Container, ContentContainer } from './styles';

type Props = {
  connection: Connection;
  isSelected: boolean;

  onSelect: () => void;
  onRemove: () => void;
};

export function ConnectionItem({ isSelected, connection, onSelect, onRemove }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonProps = useButton(containerRef, { onClick: onSelect });

  return (
    <Container ref={containerRef} {...buttonProps} isSelected={isSelected}>
      <CloseAction
        transparent
        color="dark"
        size="sm"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        <Cross1Icon />
      </CloseAction>
      <ContentContainer>
        <Text
          css={{
            fontWeight: 'bold',
            color: '$gray900'
          }}
        >
          {connection.metadata.name}
        </Text>

        <Text css={{ color: '$gray800' }}>
          {connection.data.host}:{connection.data.port}
        </Text>
      </ContentContainer>
    </Container>
  );
}
