import { IpcMainInvokeEvent } from 'electron';
import { connect } from '../../services/redis/connection';
import { Handler } from '../common/Handler';

const checkConnectionURL = async (_: IpcMainInvokeEvent, connectionURL: string) => {
  try {
    await connect(connectionURL);
    return true;
  } catch (error) {
    return false;
  }
};

export const CheckConnectionURLHandler = new Handler('connect', checkConnectionURL);
