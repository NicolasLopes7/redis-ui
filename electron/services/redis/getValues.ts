import Redis from 'ioredis';

type GetHandlerByKeyType = (connection: Redis) => Record<string, (key: string) => Promise<string>>;
export const redisValueParserFactory: GetHandlerByKeyType = (connection: Redis) => ({
  hash: async (key: string) => {
    const hashValue = await connection.hgetall(key);
    return JSON.stringify(hashValue);
  },
  list: async (key: string) => {
    const listValue = await connection.lrange(key, 0, -1);
    return JSON.stringify(listValue);
  },
  set: async (key: string) => {
    const setValue = await connection.smembers(key);
    return JSON.stringify(setValue);
  },
  zset: async (key: string) => {
    const zsetValue = await connection.zrange(key, 0, -1);
    return JSON.stringify(zsetValue);
  },
  default: async (key: string) => {
    const value = await connection.get(key);
    return JSON.stringify(value);
  }
});
