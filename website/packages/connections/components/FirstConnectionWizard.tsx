import { Card } from '@redis-ui/ui';
import React from 'react';
import { NewConnectionForm } from './NewConnectionForm';

export function FirstConnectionWizard() {
  return (
    <Card.Container css={{ alignItems: 'center', gap: '$3' }}>
      <Card.Header>
        <Card.Title>Setup Connection</Card.Title>
        <Card.HeaderActions>
          <Card.HeaderAction>Import from URL</Card.HeaderAction>
        </Card.HeaderActions>
      </Card.Header>

      <NewConnectionForm onSubmit={(data) => console.log({ data })} />
    </Card.Container>
  );
}
