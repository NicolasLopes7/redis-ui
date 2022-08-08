import { Cross1Icon } from '@radix-ui/react-icons';
import React, { useMemo } from 'react';
import { useConnectionsProvider, SavedConnection } from '../../../contexts/ConnectionsProvider';
import { ConnectionText, Container, IndicatorBar } from './styles';

type Props = {
  connection: SavedConnection;
};

export function Connection({ connection }: Props) {
  const { removeConnection, selectConnection, selectedConnection } = useConnectionsProvider();

  const selected = useMemo(() => {
    return selectedConnection?.id === connection.id;
  }, [selectedConnection, connection]);

  return (
    <Container selected={selected} onClick={() => selectConnection(connection.id)}>
      <IndicatorBar selected={selected} />
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
