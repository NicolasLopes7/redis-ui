import React, { useState } from 'react';
import { Box, OutlineButton } from '../../components/base';
import { Card } from '../../components/base/Card';
import { TextInput } from '../../components/base/TextInput';

export function FirstConnectionPage() {
  return (
    <Card css={{ gap: '24px', alignItems: 'center', width: '600px' }}>
      <Box
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
