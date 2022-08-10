import { Cross1Icon } from '@radix-ui/react-icons';
import React, { useMemo } from 'react';
import { useConnectionsProvider, SavedConnection } from '../../../contexts/ConnectionsProvider';
import { ConnectionText, Container, IndicatorBar } from './styles';

type Props = {
  connection: SavedConnection;
};

export function Connection({ connection }: Props) {
  const { removeConnection, selectConnection, selectedConnection } = useConnectionsProvider();

  const isSelected = useMemo(() => {
    return selectedConnection?.id === connection.id;
  }, [selectedConnection, connection]);

  return (
    <Container selected={isSelected} onClick={() => selectConnection(connection.id)}>
      <IndicatorBar selected={isSelected} />
      <ConnectionText>{connection.url}</ConnectionText>

      <Cross1Icon
        onClick={(e) => {
          e.stopPropagation();
          removeConnection(connection.id);
        }}
      />
    </Container>
  );
}