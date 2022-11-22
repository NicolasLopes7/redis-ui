import { Connection } from '@redis-ui/connections';

export const buildConnectionURL = (connection: Connection) => {
  const { host, password, port, database } = connection.data;

  const connectionURL = `redis://${password ? `:${password}@` : ''}${host}:${port}/${database}`;
  return connectionURL;
};
