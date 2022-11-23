import { RedisKey, useKeys } from '@redis-ui/inspector/hooks/useKeys';
import { Background, LoadingScreen, Text } from '@redis-ui/ui';
import { ErrorScreen } from '@redis-ui/ui/error/ErrorScreen';
import { SmartCell, Table, TableBody, TableCell, TableHead } from '@redis-ui/ui/table';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';

const columnHelper = createColumnHelper<RedisKey>();

const columns = [
  columnHelper.accessor('key', {
    header: 'Key',
    cell: (info) => <Text>{info.getValue()}</Text>
  }),
  columnHelper.accessor('value', {
    header: 'Value',
    cell: (info) => {
      let parsedValue: unknown;
      try {
        parsedValue = JSON.parse(info.getValue());
      } catch (err) {
        parsedValue = info.getValue();
      }

      return <SmartCell value={parsedValue} />;
    }
  })
];

export function KeysPage() {
  const { isError, isLoading, data, error } = useKeys();

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen />;

  return (
    <Background css={{ flexDirection: 'column', alignItems: 'center', p: '$5' }}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell as="th" key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </tr>
          ))}
        </TableBody>
      </Table>
    </Background>
  );
}
