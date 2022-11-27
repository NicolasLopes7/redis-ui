import { zodResolver } from '@hookform/resolvers/zod';
import { LetterCaseCapitalizeIcon, LetterCaseUppercaseIcon } from '@radix-ui/react-icons';
import { Card, Dialog, TextInput } from '@redis-ui/ui';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Connection, connectionSchema } from '../../schemas';
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

  useEffect(() => {
    if (!selectedConnection) {
      reset(defaultValues);
      return;
    }

    reset(selectedConnection);
  }, [selectedConnection, reset]);

  return (
    <Dialog.Root>
      <Card.Container as={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Card.Header>
          <Card.Title>Setup Connection</Card.Title>
          <Card.HeaderActions>
            <Dialog.Trigger asChild>
              <Card.HeaderAction type="button">Import from URL</Card.HeaderAction>
            </Dialog.Trigger>
          </Card.HeaderActions>
        </Card.Header>

        <SetupConnectionForm control={control} formState={formState} register={register} />

        <Card.Footer>
          <Card.FooterActions>
            <Card.FooterAction>Connect</Card.FooterAction>
          </Card.FooterActions>
        </Card.Footer>
      </Card.Container>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Import From URL</Dialog.Title>
          <Dialog.CloseIconButton />

          <Dialog.Description>Enter a valid Redis URL to import the connection.</Dialog.Description>

          <TextInput
            placeholder="Connection URL (e.g. redis://localhost:6379)"
            LeftIcon={<LetterCaseCapitalizeIcon />}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
