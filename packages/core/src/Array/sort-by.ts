/**
 * Sorts an array of objects based on a specified key in descending order.
 */
export const sortBy = <T, K extends keyof T>(arr: T[], key: K): T[] =>
  arr.sort((a, b) => {
    let x = a[key];
    let y = b[key];

    return (
      (x > y && -1) ||
      (x < y && 1) ||
      (y == null && -1) ||
      (x == null && 1) ||
      0
    );
  });
