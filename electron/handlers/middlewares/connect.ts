import { connect } from '../../services/redis/connection';

export const connectionMiddleware = async (...args: unknown[]) => {
  let connectionIDX: number | undefined;
  const connectionURL = args.find((arg, idx) => {
    if (typeof arg === 'string' && arg.includes('redis://')) {
      connectionIDX = idx;
      return true;
    }
    return false;
  });

  if (!connectionIDX) return args;

  const connection = await connect(connectionURL as string);
  return args.map((arg, idx) => {
    if (connectionIDX === idx) {
      return connection;
    }
    return arg;
  });
};
