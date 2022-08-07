import { connect } from '../../services/redis/connection';
import { Handler } from '../common/Handler';

const checkConnectionURL = async (connectionURL: string) => {
  try {
    await connect(connectionURL);
    return true;
  } catch (error) {
    return false;
  }
};

export const CheckConnectionURLHandler = new Handler('connect', checkConnectionURL);
