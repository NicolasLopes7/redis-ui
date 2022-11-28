import { zodResolver } from '@hookform/resolvers/zod';
import { LetterCaseCapitalizeIcon, LetterCaseUppercaseIcon } from '@radix-ui/react-icons';
import { Card, Dialog, TextInput, useDisclosure } from '@redis-ui/ui';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Connection, connectionSchema } from '../../schemas';
import { ImportConnectionURL } from './ImportConnectionURL';
import { SetupConnectionForm } from './SetupConnectionForm';

type Props = {
  selectedConnection?: Connection;
  onSubmit: (connection: Connection) => void;
};

const defaultValues: Partial<Connection> = {
  data: {
    database: '',
    host: '',
    port: '',
    password: ''
  },
  metadata: {
    name: '',
    saveConnection: false
  }
};

export function SetupConnection({ selectedConnection, onSubmit }: Props) {
  const { register, handleSubmit, reset, control, formState } = useForm<Connection>({
    resolver: zodResolver(connectionSchema),
    defaultValues
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onConnectionImport = useCallback(
    (connection: Connection) => {
      reset(connection);
      onClose();
    },
    [reset, onClose]
  );

  useEffect(() => {
    if (!selectedConnection) {
      reset(defaultValues);
      return;
    }

    reset(selectedConnection);
  }, [selectedConnection, reset]);

  return (
    <>
      <Card.Container as={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Card.Header>
          <Card.Title>Setup Connection</Card.Title>
          <Card.HeaderActions>
            <Card.HeaderAction type="button" onClick={onOpen}>
              Import from URL
            </Card.HeaderAction>
          </Card.HeaderActions>
        </Card.Header>

        <SetupConnectionForm control={control} formState={formState} register={register} />

        <Card.Footer>
          <Card.FooterActions>
            <Card.FooterAction>Connect</Card.FooterAction>
          </Card.FooterActions>
        </Card.Footer>
      </Card.Container>

      <ImportConnectionURL isOpen={isOpen} onClose={onClose} onConnectionImport={onConnectionImport} />
    </>
  );
}
