import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from '../components/base';
import { Card } from '../components/base/Card';
import { useConnectionsProvider } from '../contexts/ConnectionsProvider';
import { useToastProvider } from '../contexts/ToastProvider';

export function KeysPage() {
  const { connectionURL } = useParams();
  const { addToast } = useToastProvider();
  const { connections, selectConnection } = useConnectionsProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connectionURL) {
      navigate('/');
      addToast({
        title: 'Could not connect',
        message: `Couldn't retrieve last connection url`,
        type: 'error'
      });

      return;
    }

    const connection = connections.find((c) => c.url === connectionURL);
    if (!connection) {
      navigate('/');
      addToast({
        title: 'Could not connect',
        message: `Please connect again`,
        type: 'error'
      });

      return;
    }

    if (connection.status !== 'active') {
      navigate('/');
    }
  }, [connectionURL, connections, selectConnection]);

  return (
    <Card css={{ gap: '24px', alignItems: 'center', width: '600px' }}>
      <Text>Not implemented yet</Text>
    </Card>
  );
}
