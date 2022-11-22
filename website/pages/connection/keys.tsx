import { RedisKey, useKeys } from '@redis-ui/inspector/hooks/useKeys';
import { Background, LoadingScreen, Text } from '@redis-ui/ui';
import { ErrorScreen } from '@redis-ui/ui/error/ErrorScreen';
import { Table, TableBody, TableHead } from '@redis-ui/ui/table';
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
      return <Text>{info.getValue()}</Text>;
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
    <Background css={{ flexDirection: 'column', alignItems: 'center', p: '$6' }}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <td key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </TableBody>
      </Table>
    </Background>
  );
}
