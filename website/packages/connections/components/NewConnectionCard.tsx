import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@redis-ui/ui';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useConnectionsProvider } from '../../../contexts/ConnectionsProvider';
import { useSavedConnections } from '../contexts';
import { NewConnection, newConnectionSchema } from '../schemas';
import { NewConnectionForm } from './NewConnectionForm';

export function NewConnectionCard() {
  const { register, handleSubmit, control, formState } = useForm<NewConnection>({
    resolver: zodResolver(newConnectionSchema)
  });

  const { saveConnection } = useSavedConnections();

  const handleConnect = useCallback(async (connection: NewConnection) => {
    try {
      const { host, password, port, database } = connection.data;

      const connectionURL = `redis://${password ? `:${password}@` : ''}${host}:${port}/${database}`;
      console.log({ connectionURL });

      const response = await window.Main.connect(connectionURL);
      if (!response) {
        return;
      }

      if (connection.metadata.saveConnection) {
        saveConnection({
          host,
          password,
          name: connection.metadata.connectionName,
          port,
          database
        });
      }

      console.log('Able to connect!');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Card.Container css={{ alignItems: 'center', gap: '$3' }} as={'form'} onSubmit={handleSubmit(handleConnect)}>
      <Card.Header>
        <Card.Title>Setup Connection</Card.Title>
        <Card.HeaderActions>
          <Card.HeaderAction>Import from URL</Card.HeaderAction>
        </Card.HeaderActions>
      </Card.Header>

      <NewConnectionForm control={control} formState={formState} register={register} />

      <Card.Footer>
        <Card.FooterActions>
          <Card.FooterAction>Connect</Card.FooterAction>
        </Card.FooterActions>
      </Card.Footer>
    </Card.Container>
  );
}
