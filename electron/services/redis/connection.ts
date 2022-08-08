import Redis from 'ioredis';

type Connect = (connectionURL: string) => Promise<Redis>;

const connectionPool: Record<string, Redis> = {};
export const connect: Connect = async (connectionURL: string) => {
  if (!connectionPool[connectionURL]) {
    const connection = new Redis(connectionURL, {
      enableReadyCheck: true,
      connectTimeout: 15000
    });
    connectionPool[connectionURL] = connection;

    return new Promise((resolve, reject) => {
      connection.once('connect', () => {
        connectionPool[connectionURL] = connection;
        resolve(connection);
      });

      connection.once('error', (e) => reject(new Error(e)));
    });
  }

  return connectionPool[connectionURL];
};
