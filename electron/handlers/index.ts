/* eslint-disable @typescript-eslint/ban-ts-comment */
import Bluebird from 'bluebird';
import { CheckConnectionURLHandler } from './checkConnectionURL';
import { GetKeysHandler } from './get-keys';

import { Fn, Handler } from './common/Handler';

const handlers: Handler<any>[] = [CheckConnectionURLHandler, GetKeysHandler];

export default handlers.reduce(
  (acc, handler) => ({
    ...acc,
    [handler.name]: async (...args: unknown[]) => {
      const middlewares = handler.middlewares || [];

      /// @ts-ignore
      const newArgs = await Bluebird.reduce(middlewares, async (_, middleware) => middleware(...args), args);
      /// @ts-ignore
      handler.fn(...newArgs);
    }
  }),
  {} as Record<string, Fn<any>>
);
