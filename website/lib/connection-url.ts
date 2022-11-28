import { Connection, connectionSchema } from '@redis-ui/connections';
import { connectionURLSchema } from '@redis-ui/connections/schemas/connectionURL';

export const buildConnectionURL = (connection: Connection) => {
  const { host, password, port, database } = connection.data;

  const connectionURL = `redis://${password ? `:${password}@` : ''}${host}:${port}/${database}`;
  return connectionURL;
};

const connectionRegex = /redis:\/\/(?:(?<user>.+):)?(?:(?<password>.+)@)?(?<host>.*):(?<port>\d+)\/?(?<database>\d+)?/;

export const buildConnectionFromURL = (connectionURL: string) => {
  const { url } = connectionURLSchema.parse({ url: connectionURL });

  const matchResult = url.match(connectionRegex);

  if (!matchResult) throw new Error('Invalid connection url');

  const connection = connectionSchema.parse({ data: matchResult.groups, metadata: {} });

  return connection;
};
