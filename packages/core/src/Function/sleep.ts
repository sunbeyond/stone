/**
 * Pause execution for N milliseconds
 */
export const sleep = async (ms: number = 1000): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));
