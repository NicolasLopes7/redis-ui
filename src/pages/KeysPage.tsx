import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from '../components/base';
import { Card } from '../components/base/Card';
import { useToastProvider } from '../contexts/ToastProvider';

export function KeysPage() {
  const { connectionURL } = useParams();
  const { addToast } = useToastProvider();
  const navigate = useNavigate();

  if (!connectionURL) {
    navigate('/');
    addToast({
      title: 'Could not connect',
      message: `Couldn't retrieve last connection url`,
      type: 'error'
    });
    return null;
  }

  return (
    <Card css={{ gap: '24px', alignItems: 'center', width: '600px' }}>
      <Text>Not implemented yet</Text>
    </Card>
  );
}
