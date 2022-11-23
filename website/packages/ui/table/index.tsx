import React from 'react';
import { getSchema } from '../../../lib/generateSchema';
import { Flex } from '../layout';
import { styled } from '../stitches.config';
import ReactJson from 'react-json-view';
import { Text } from '../base';

export const Table = styled('table', {
  background: '$gray100',
  borderCollapse: 'collapse',
  borderRadius: '10px',
  overflow: 'hidden',
  p: '$4'
});

export const TableHead = styled('thead', {
  backgroundColor: '$gray200',

  '& > tr': {
    padding: '$2'
  },

  '& > tr > td': {
    padding: '$4',
    borderBottom: '1px solid $colors$gray600',
    fontWeight: 'bold'
  }
});

export const TableBody = styled('tbody', {
  background: '$gray100',

  '& > tr > td': {
    padding: '$4',
    borderBottom: '1px solid $colors$gray400'
  }
});

export const TableCell = styled('td', {
  p: '$4'
});

type SmartCellProps = {
  value: unknown;
};

export function SmartCell({ value }: SmartCellProps) {
  const schema = getSchema(value);

  if (schema.type === 'string') {
    return <Text>{schema.value}</Text>;
  }

  if (schema.type === 'number') {
    return <Text css={{ textAlign: 'right' }}>{schema.value}</Text>;
  }

  if (schema.type === 'boolean') {
    return <Text>{schema.value ? 'True' : 'False'}</Text>;
  }

  if (schema.type === 'null') {
    return <Text></Text>;
  }

  if (schema.type === 'array') {
    return (
      <Flex align="center" css={{ maxWidth: '200px', overflowX: 'auto' }}>
        {(value as Array<unknown>).map((entry, index) => (
          <SmartCell value={entry} key={index} />
        ))}
      </Flex>
    );
  }

  return (
    <Flex>
      <ReactJson
        name={null}
        src={schema.value}
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={false}
        collapseStringsAfterLength={200}
        theme="tomorrow"
      />
    </Flex>
  );
}
