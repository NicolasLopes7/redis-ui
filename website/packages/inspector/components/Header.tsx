import React, { useCallback, useMemo } from 'react';
import { Button, Flex, Stack, Text } from '@redis-ui/ui';
import { useInspectedConnection } from '../contexts';
import { Connection } from '@redis-ui/connections';
import { styled } from '@redis-ui/ui/stitches.config';
import { useNavigate } from 'react-router-dom';
import { buildConnectionURL } from '../../../lib/connection-url';

type ConnectionTextProps = {
  connection?: Connection;
};

const HeaderTitle = styled('p', {
  variants: {
    highlighted: {
      true: {
        fontSize: '$lg',
        fontWeight: 'bold'
      },
      false: {
        fontSize: '$md',
        color: '$gray600'
      }
    }
  },
  defaultVariants: {
    highlighted: true
  }
});

function ConnectionText({ connection }: ConnectionTextProps) {
  if (!connection)
    return (
      <HeaderTitle highlighted={false} css={{ fontSize: '$md', color: '$gray600' }}>
        No connection...
      </HeaderTitle>
    );

  if (connection.metadata.name)
    return (
      <Stack>
        <HeaderTitle>{connection.metadata.name}</HeaderTitle>
        <Text>
          {connection.data.host}:{connection.data.port}
        </Text>
      </Stack>
    );

  return (
    <HeaderTitle>
      {connection.data.host}:{connection.data.port}
    </HeaderTitle>
  );
}

export function Header() {
  const { connection, disconnect } = useInspectedConnection();
  const navigate = useNavigate();

  const handleDisconnect = useCallback(() => {
    navigate('/');
    disconnect();
  }, [navigate, disconnect]);

  return (
    <Flex justify={'between'} align="center" css={{ width: '100%', px: '$5', py: '$4', backgroundColor: '$gray100' }}>
      <ConnectionText connection={connection} />
      <Button onClick={handleDisconnect}>Back to Selection</Button>
    </Flex>
  );
}
