import { useCallback } from 'react';
import { useInspectedConnection } from '../contexts';
import { useQuery } from './useQuery';

type KeysResponse = {
  key: string;
  type: string;
  value: string;
};

export const useKeys = () => {
  const { connectionURL } = useInspectedConnection();

  const getKeys = useCallback(async () => {
    if (!connectionURL) throw new Error('Tried to query keys without connection url');

    const keys = await window.Main.getKeys(connectionURL);
    return keys as KeysResponse[];
  }, [connectionURL]);

  const query = useQuery(getKeys);

  return query;
};
