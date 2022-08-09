import Bluebird from 'bluebird';
import { IpcMainInvokeEvent } from 'electron';
import Redis from 'ioredis';
import { getRedisKeys } from '../../services/redis/getKeys';
import { redisValueParserFactory } from '../../services/redis/getValues';
import { paginateArray } from '../../utils/pagination';
import { Handler } from '../common/Handler';
import { connectionMiddleware } from '../middlewares/connect';

const getKeys = async (_: IpcMainInvokeEvent, connection: Redis, take = 100, skip = 0) => {
  const allKeys = await getRedisKeys(connection);
  const redisParser = redisValueParserFactory(connection);
  const keys = paginateArray<string>(allKeys, take, skip);

  return Bluebird.map(
    keys,
    async (key) => {
      const rawType = await connection.type(key);
      const type = Object.keys(redisParser).includes(rawType) ? rawType : 'default';

      const value = await redisParser[type](key);

      return { type: rawType, key, value };
    },
    { concurrency: 10 }
  );
};

export const GetKeysHandler = new Handler('get-keys', getKeys, [connectionMiddleware]);
