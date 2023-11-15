import { functionType } from '../__Tag__';

/**
 * Whether it is of type Function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunction = (val: any): boolean => typeof val === functionType;
