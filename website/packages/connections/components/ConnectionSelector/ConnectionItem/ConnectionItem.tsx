import { Text } from '@redis-ui/ui';
import React from 'react';
import { Connection } from '../../../schemas';
import { CloseAction, Container, ContentContainer } from './styles';

type Props = {
  connection: Connection;
  isSelected: boolean;

  onSelect: () => void;
  onRemove: () => void;
};

export function ConnectionItem({ isSelected, connection, onSelect, onRemove }: Props) {
  return (
    <Container as="button" tabIndex={0} isSelected={isSelected} onClick={onSelect}>
      <CloseAction tabIndex={0} onClick={onRemove} />
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
