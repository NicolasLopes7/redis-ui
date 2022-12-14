import { useCallback } from 'react';
import { useInspectedConnection } from '../contexts';
import { useQuery } from './useQuery';

export type RedisKey = {
  key: string;
  type: string;
  value: string;
};

export const useKeys = () => {
  const { connectionURL } = useInspectedConnection();

  const getKeys = useCallback(async () => {
    if (!connectionURL) throw new Error('Tried to query keys without connection url');

    const keys = (await window.Main.getKeys(connectionURL)) as RedisKey[];
    const parsedKeys = keys.map((key) => ({
      ...key,
      value: eval(key.value)
    }));

    return parsedKeys;
  }, [connectionURL]);

  const query = useQuery(getKeys, { enabled: !!connectionURL });

  return query;
};
