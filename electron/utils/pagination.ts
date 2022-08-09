export function paginateArray<T>(arr: T[], take: number, skip: number): T[] {
  return arr.slice(skip, skip + take);
}
