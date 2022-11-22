import { useEffect, useState } from 'react';

type FetchFunction<Data> = () => Promise<Data>;

type QueryState<Data, Error> =
  | { isLoading: true; isError: false; isSuccess: false; data: undefined; error: undefined }
  | { isLoading: false; isError: false; isSuccess: true; data: Data; error: undefined }
  | { isLoading: false; isError: true; isSuccess: false; data: undefined; error: Error };

type UseQueryReturn<Data, Error> = {} & QueryState<Data, Error>;

type Options = {
  enabled?: boolean;
};

export const useQuery = <Data, IError>(fetch: FetchFunction<Data>, options?: Options): UseQueryReturn<Data, IError> => {
  const { enabled = true } = options ?? {};
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<IError>();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    if (!enabled) return;

    setLoading(true);
    fetch()
      .then(setData)
      .catch((err) => {
        console.log('error: ', err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [fetch, enabled]);

  const isLoading = loading;
  const isError = typeof error !== 'undefined';
  const isSuccess = typeof data !== 'undefined';

  if (isLoading) {
    return {
      data: undefined,
      error: undefined,
      isError: false,
      isSuccess: false,
      isLoading
    };
  }

  if (isError) {
    return { data: undefined, error, isError, isLoading: false, isSuccess: false };
  }

  if (isSuccess) {
    return {
      isSuccess: true,
      data,
      error: undefined,
      isError: false,
      isLoading: false
    };
  }

  console.log({ loading, data, error });

  throw new Error('Never should happen');
};
