import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@redis-ui/ui';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSavedConnections } from '../contexts';
import { NewConnection, newConnectionSchema } from '../schemas';
import { NewConnectionForm } from './NewConnectionForm';

type Props = {
  defaultValues?: NewConnection;
  onSubmit: (connection: NewConnection) => void;
};

export function NewConnectionCard({ defaultValues, onSubmit }: Props) {
  const { register, handleSubmit, control, formState } = useForm<NewConnection>({
    resolver: zodResolver(newConnectionSchema),
    defaultValues
  });

  return (
    <Card.Container css={{ alignItems: 'center', gap: '$3' }} as={'form'} onSubmit={handleSubmit(onSubmit)}>
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
