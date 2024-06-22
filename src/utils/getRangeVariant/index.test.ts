import { MonthDate } from '@/types/date';
import { Range, RangeVariant } from '@/types/range';

import { getRangeVariant } from '.';

describe('getRangeVariant function', () => {
  const mockDate: MonthDate = { day: 9, month: 5, year: 2024, timestamp: 1705132800000 };
  const mockRange: Range = { start: 1705132800000, end: 1705315200000 };

  it('should return RangeVariant.START if the date is the start of the range', () => {
    expect(getRangeVariant(mockDate, mockRange)).toBe(RangeVariant.START);
  });

  it('should return RangeVariant.END if the date is the end of the range', () => {
    const endDate: MonthDate = { day: 11, month: 5, year: 2024, timestamp: 1705315200000 };
    expect(getRangeVariant(endDate, mockRange)).toBe(RangeVariant.END);
  });

  it('should return RangeVariant.INBETWEEN if the date is between the start and end of the range', () => {
    const inBetweenDate: MonthDate = { day: 10, month: 5, year: 2024, timestamp: 1705224000000 };
    expect(getRangeVariant(inBetweenDate, mockRange)).toBe(RangeVariant.INBETWEEN);
  });

  it('should return undefined if the range is undefined', () => {
    expect(getRangeVariant(mockDate, undefined)).toBeUndefined();
  });

  it('should return undefined if the date is not within the range', () => {
    const outOfRangeDate: MonthDate = { day: 12, month: 5, year: 2024, timestamp: 1705401600000 };
    expect(getRangeVariant(outOfRangeDate, mockRange)).toBeUndefined();
  });
});
