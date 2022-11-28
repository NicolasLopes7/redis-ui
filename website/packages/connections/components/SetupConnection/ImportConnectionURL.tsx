import React, { useCallback } from 'react';
import { Dialog, Stack, TextInput } from '@redis-ui/ui';
import { Connection } from '../../schemas';
import { useForm } from 'react-hook-form';
import { ConnectionURL, connectionURLSchema } from '../../schemas/connectionURL';
import { zodResolver } from '@hookform/resolvers/zod';
import { LetterCaseCapitalizeIcon } from '@radix-ui/react-icons';
import { buildConnectionFromURL } from '../../../../lib/connection-url';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConnectionImport: (connection: Connection) => void;
};

export function ImportConnectionURL({ isOpen, onClose, onConnectionImport }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ConnectionURL>({ resolver: zodResolver(connectionURLSchema) });

  const onSubmit = useCallback(
    (data: ConnectionURL) => {
      const connection = buildConnectionFromURL(data.url);
      onConnectionImport(connection);
    },
    [onConnectionImport]
  );

  return (
    <Dialog.Root modal open={isOpen} onOpenChange={onClose}>
      <Dialog.Overlay />
      <Dialog.Portal>
        <Dialog.Container>
          <Dialog.Content as="form" onSubmit={handleSubmit(onSubmit)}>
            <Dialog.CloseIconButton />
            <Dialog.Header>
              <Dialog.Title>Import connection from URL</Dialog.Title>
            </Dialog.Header>
            <Stack spacing="md" direction={'column'}>
              <TextInput
                autoFocus
                required
                LeftIcon={<LetterCaseCapitalizeIcon />}
                placeholder="redis://localhost:6379"
                {...register('url')}
                error={errors.url?.message}
              />
            </Stack>
            <Dialog.Footer>
              <Dialog.FooterActions>
                <Dialog.FooterAction kind="secondary" type="button" onClick={onClose}>
                  Cancel
                </Dialog.FooterAction>
                <Dialog.FooterAction type="submit">Send</Dialog.FooterAction>
              </Dialog.FooterActions>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Container>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
