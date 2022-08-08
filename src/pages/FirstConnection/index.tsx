import React, { FormEvent } from 'react';
import { Box, OutlineButton } from '../../components/base';
import { Card } from '../../components/base/Card';
import { TextInput } from '../../components/base/TextInput';
import { useToastProvider } from '../../contexts/ToastProvider';

export function FirstConnectionPage() {
  const { addToast } = useToastProvider();

  const handleConnect = (e: FormEvent) => {
    e.preventDefault();
    addToast({ title: 'Could not connect', message: 'Please check your connection URL', type: 'error' });
  };

  return (
    <Card css={{ gap: '24px', alignItems: 'center', width: '600px' }}>
      <Box
        as="form"
        onSubmit={handleConnect}
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '48px 16px'
        }}
      >
        <TextInput
          css={{
            fontSize: '$lg'
          }}
          placeholder="Type your connection url"
        />
        <OutlineButton
          type="submit"
          css={{
            fontSize: '$lg'
          }}
        >
          Connect
        </OutlineButton>
      </Box>
    </Card>
  );
}
