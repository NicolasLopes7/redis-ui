import React from 'react';
import { Card, Dialog } from '@redis-ui/ui';
import { Connection } from '../../schemas';
import { useForm } from 'react-hook-form';
import { ConnectionURL, connectionURLSchema } from '../../schemas/connectionURL';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConnectionImport: (connection: Connection) => void;
};

export function ImportConnectionURL({ isOpen, onClose, onConnectionImport }: Props) {
  const {} = useForm<ConnectionURL>({ resolver: zodResolver(connectionURLSchema) });

  return (
    <Dialog.Root>
      <Dialog.Overlay />
      <Dialog.Content>
        <Card.Container>
          <Card.Header>
            <Card.Title>Import connection from URL</Card.Title>
          </Card.Header>
          <Card.Footer>
            <Card.FooterActions>
              <Card.FooterAction kind="secondary" type="button" onClick={onClose}>
                Cancel
              </Card.FooterAction>
              <Card.FooterAction type="submit">Send</Card.FooterAction>
            </Card.FooterActions>
          </Card.Footer>
        </Card.Container>
      </Dialog.Content>
    </Dialog.Root>
  );
}
