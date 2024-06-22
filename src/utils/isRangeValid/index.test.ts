import { isRangeValid } from '.';

describe('isRangeValid function', () => {
  it('should return true if the range is valid', () => {
    const range = { start: 1, end: 10 };
    expect(isRangeValid(range)).toBe(true);
  });

  it('should return false if the end value is less than or equal to the start value', () => {
    const range1 = { start: 1, end: 1 };
    const range2 = { start: 10, end: 5 };
    expect(isRangeValid(range1)).toBe(false);
    expect(isRangeValid(range2)).toBe(false);
  });

  it('should return false if the start value is greater than or equal to the end value', () => {
    const range1 = { start: 5, end: 5 };
    const range2 = { start: 15, end: 10 };
    expect(isRangeValid(range1)).toBe(false);
    expect(isRangeValid(range2)).toBe(false);
  });
});
