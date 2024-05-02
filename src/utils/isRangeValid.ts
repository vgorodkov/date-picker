import { Range } from '@/types/range';

export const isRangeValid = (range: Range) => {
  const { start, end } = range;
  if (!start || !end) {
    return false;
  }
  if (end < start) {
    return false;
  }
  if (start > end) {
    return false;
  }
  return true;
};
