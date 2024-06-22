import { MonthDate } from '@/types/date';
import { Range, RangeVariant } from '@/types/range';

export const getRangeVariant = (date: MonthDate, range: Range | undefined) => {
  if (!range) return undefined;

  const { start, end } = range;
  const { timestamp } = date;

  if (timestamp === start) return RangeVariant.START;
  if (timestamp === end) return RangeVariant.END;
  if (start && end && timestamp > start && timestamp < end) return RangeVariant.INBETWEEN;

  return undefined;
};
