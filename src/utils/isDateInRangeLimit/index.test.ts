import { isDateInRangeLimit } from '.';

describe('isDateInRangeLimit function', () => {
  it('should return true if the date is within the range limit', () => {
    const dateInput = { year: 2024, month: 5, day: 6 };
    const dateLimit = {
      min: { year: 2024, month: 1, day: 1 },
      max: { year: 2024, month: 12, day: 31 },
    };
    expect(isDateInRangeLimit(dateInput, dateLimit)).toBe(true);
  });

  it('should return false if the date is before the range limit', () => {
    const dateInput = { year: 2024, month: 1, day: 1 };
    const dateLimit = {
      min: { year: 2024, month: 2, day: 1 },
      max: { year: 2024, month: 12, day: 31 },
    };
    expect(isDateInRangeLimit(dateInput, dateLimit)).toBe(false);
  });

  it('should return false if the date is after the range limit', () => {
    const dateInput = { year: 2024, month: 12, day: 31 };
    const dateLimit = {
      min: { year: 2024, month: 1, day: 1 },
      max: { year: 2024, month: 11, day: 30 },
    };
    expect(isDateInRangeLimit(dateInput, dateLimit)).toBe(false);
  });
});
