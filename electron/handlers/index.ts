import { CheckConnectionURLHandler } from './checkConnectionURL';
import { Fn, Handler } from './common/Handler';

const handlers: Handler<any>[] = [CheckConnectionURLHandler];

export default handlers.reduce(
  (acc, handler) => ({
    ...acc,
    [handler.name]: handler.fn
  }),
  {} as Record<string, Fn<any>>
);
