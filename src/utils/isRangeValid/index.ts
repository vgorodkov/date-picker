import { Range } from '@/types/range';

export const isRangeValid = (range: Range) => {
  const { start, end } = range;
  const hasStartAndEnd = start && end;
  if (hasStartAndEnd && end <= start) {
    return false;
  }

  if (hasStartAndEnd && start >= end) {
    return false;
  }

  return true;
};
