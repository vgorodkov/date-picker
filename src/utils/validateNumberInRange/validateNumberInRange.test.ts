import { validateNumberInRange } from '.';

describe('validateNumberInRange function', () => {
  it('should return the value if it is within the specified range', () => {
    expect(validateNumberInRange(5, 0, 10)).toBe(5);
    expect(validateNumberInRange(0, -10, 10)).toBe(0);
    expect(validateNumberInRange(-5, -10, 10)).toBe(-5);
    expect(validateNumberInRange(10, 0, 10)).toBe(10);
  });

  it('should return the minimum value if the input value is less than the minimum', () => {
    expect(validateNumberInRange(-15, 0, 10)).toBe(0);
    expect(validateNumberInRange(-10, 0, 10)).toBe(0);
  });

  it('should return the maximum value if the input value is greater than the maximum', () => {
    expect(validateNumberInRange(15, 0, 10)).toBe(10);
    expect(validateNumberInRange(20, 0, 10)).toBe(10);
  });

  it('should return NaN if the input value is not a number', () => {
    expect(validateNumberInRange(NaN, 0, 10)).toBe(NaN);
    expect(validateNumberInRange('not a number', 0, 10)).toBe(NaN);
  });

  it('should handle negative ranges correctly', () => {
    expect(validateNumberInRange(-5, -10, -2)).toBe(-5);
    expect(validateNumberInRange(-15, -10, -2)).toBe(-10);
    expect(validateNumberInRange(-1, -10, -2)).toBe(-2);
  });
});
