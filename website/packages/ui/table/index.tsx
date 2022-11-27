import React from 'react';
import { Flex } from '../layout';
import { styled } from '../stitches.config';
import ReactJson from 'react-json-view';
import { Text } from '../base';

export const Table = styled('table', {
  display: 'block',
  background: '$gray100',
  borderCollapse: 'collapse',
  borderRadius: '10px',
  overflow: 'auto',
  width: '100%',
  maxHeight: '80vh',
  whiteSpace: 'nowrap',

  '& tr': {
    width: '100%'
  }
});

export const TableHead = styled('thead', {
  backgroundColor: '$gray200',

  '& > tr > th': {
    borderBottom: '1px solid $colors$gray600',
    backgroundColor: '$gray200',
    fontWeight: 'bold',
    position: 'sticky',
    top: 0,
    zIndex: 1
  },

  '& > tr > th:last-child': {
    width: '100%'
  }
});

export const TableBody = styled('tbody', {
  background: '$gray100',

  '& > tr > td': {
    borderBottom: '1px solid $colors$gray400',
    borderLeft: '1px solid $colors$gray400',
    borderRight: '1px solid $colors$gray400'
  }
});

export const TableCell = styled('td', {
  p: '$4'
});

type SmartCellProps = {
  value: unknown;
};

export function SmartCell({ value }: SmartCellProps) {
  if (typeof value === 'string') {
    return <Text>{value}</Text>;
  }

  if (typeof value === 'number') {
    return <Text css={{ textAlign: 'right' }}>{value}</Text>;
  }

  if (typeof value === 'boolean') {
    return <Text>{value ? 'True' : 'False'}</Text>;
  }

  if (Array.isArray(value)) {
    return (
      <Flex align="center" css={{ maxWidth: '200px', overflowX: 'auto' }}>
        {(value as Array<unknown>).map((entry, index) => (
          <SmartCell value={entry} key={index} />
        ))}
      </Flex>
    );
  }

  if (!value) {
    return <Text></Text>;
  }

  return (
    <Flex css={{ whiteSpace: 'normal' }}>
      <ReactJson
        name={null}
        src={value}
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={false}
        collapseStringsAfterLength={200}
        theme="tomorrow"
      />
    </Flex>
  );
}
