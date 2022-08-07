export type Fn<T> = (args: T) => Promise<unknown> | unknown;

export class Handler<T> {
  public name: string;

  public fn: Fn<T>;

  public constructor(name: string, fn: Fn<T>) {
    this.name = name;
    this.fn = fn;
  }
}
