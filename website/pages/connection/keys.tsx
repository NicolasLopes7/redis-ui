import { RedisKey, useKeys } from '@redis-ui/inspector/hooks/useKeys';
import { Background, LoadingScreen, Text } from '@redis-ui/ui';
import { ErrorScreen } from '@redis-ui/ui/error/ErrorScreen';
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
      let parsed;
      try {
        parsed = JSON.parse(JSON.parse(info.getValue())).name;
      } catch (err) {
        parsed = info.getValue();
      }
      return <Text>{parsed}</Text>;
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
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <td key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
