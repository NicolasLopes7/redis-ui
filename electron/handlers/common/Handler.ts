import { IpcMainInvokeEvent } from 'electron';

export type Fn<T> = (event: IpcMainInvokeEvent, args: T) => Promise<unknown> | unknown;
export type Middleware = (...args: unknown[]) => Promise<unknown> | unknown;
export class Handler<T> {
  public name: string;

  public middlewares?: Middleware[];

  public fn: Fn<T>;

  public constructor(name: string, fn: Fn<T>, middlewares?: Middleware[]) {
    this.middlewares = middlewares;
    this.name = name;
    this.fn = fn;
  }
}
