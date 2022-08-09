import Redis from 'ioredis';

export const getRedisKeys = async (connection: Redis) => {
  const keys = await connection.keys('*');

  return keys;
};
