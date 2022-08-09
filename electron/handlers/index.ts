import { CheckConnectionURLHandler } from './checkConnectionURL';
import { GetKeysHandler } from './get-keys';

import { Fn, Handler } from './common/Handler';

const handlers: Handler<any>[] = [CheckConnectionURLHandler, GetKeysHandler];

export default handlers.reduce(
  (acc, handler) => ({
    ...acc,
    [handler.name]: handler.fn
  }),
  {} as Record<string, Fn<any>>
);
