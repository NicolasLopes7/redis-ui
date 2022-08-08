import React from 'react';
import { Connection as IConnection } from '../../../contexts/ConnectionsProvider';
import { Container, IndicatorBar } from './styles';

type Props = {
  connection: IConnection;
  selected?: boolean;
};

export function Connection({ connection, selected }: Props) {
  return (
    <Container selected={!selected}>
      <IndicatorBar selected={!selected} />
      {connection.url}
    </Container>
  );
}
