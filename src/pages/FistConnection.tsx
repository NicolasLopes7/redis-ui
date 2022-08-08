import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '../components/base';
import { Card } from '../components/base/Card';
import { TextInput } from '../components/base/TextInput';
import { useToastProvider } from '../contexts/ToastProvider';

export function FirstConnectionPage() {
  const navigate = useNavigate();
  const { addToast } = useToastProvider();

  const [connectionURL, setConnectionURL] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const lastConnection = localStorage.getItem('@redis-ui/last-connection-url-input');
    setConnectionURL(lastConnection || '');
  }, []);

  const handleConnect = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        new URL(connectionURL);
      } catch (error) {
        addToast({
          title: 'Could not connect',
          message: 'Please enter a valid URL',
          type: 'error'
        });
        return;
      }

      setLoading(true);
      try {
        const result = await window.Main.connect(connectionURL);
        if (!result) {
          addToast({ title: 'Unable to connect', message: 'Unable to connect to Redis', type: 'error' });
          return;
        }

        addToast({ title: 'Connected', message: 'Connected to Redis', type: 'success' });
        localStorage.setItem('@redis-ui/last-connection-url-input', connectionURL);
        navigate(`/${encodeURIComponent(connectionURL)}`);
      } catch (error) {
        addToast({ title: 'Could not connect', message: 'Please check your connection URL', type: 'error' });
      } finally {
        setLoading(false);
      }
    },
    [connectionURL, navigate, addToast]
  );

  return (
    <Card css={{ gap: '24px', alignItems: 'center', width: '600px' }}>
      <Box
        as="form"
        onSubmit={handleConnect}
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '32px 16px'
        }}
      >
        <TextInput
          css={{
            fontSize: '$md',
            '&::placeholder': {
              fontSize: '$sm'
            }
          }}
          placeholder="Type your connection url"
          onChange={(e) => setConnectionURL(e.target.value)}
          value={connectionURL}
        />
        <Button
          type="submit"
          disabled={loading}
          css={{
            fontSize: '$lg'
          }}
        >
          {loading ? 'Connecting...' : 'Connect'}
        </Button>
      </Box>
    </Card>
  );
}
