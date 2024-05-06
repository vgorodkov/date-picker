import { getMonthLength } from '.';

describe('getMonthLength function', () => {
  it('should return 31 for January (month 1)', () => {
    expect(getMonthLength(1, 2024)).toBe(31);
  });

  it('should return 28 for February (month 2) in a non-leap year', () => {
    expect(getMonthLength(2, 2023)).toBe(28);
  });

  it('should return 29 for February (month 2) in a leap year', () => {
    expect(getMonthLength(2, 2024)).toBe(29);
  });

  it('should return 31 for March (month 3)', () => {
    expect(getMonthLength(3, 2024)).toBe(31);
  });

  it('should return 30 for April (month 4)', () => {
    expect(getMonthLength(4, 2024)).toBe(30);
  });

  it('should return 30 for June (month 6)', () => {
    expect(getMonthLength(6, 2024)).toBe(30);
  });

  it('should return 31 for July (month 7)', () => {
    expect(getMonthLength(7, 2024)).toBe(31);
  });

  it('should return 31 for August (month 8)', () => {
    expect(getMonthLength(8, 2024)).toBe(31);
  });

  it('should return 30 for September (month 9)', () => {
    expect(getMonthLength(9, 2024)).toBe(30);
  });

  it('should return 31 for October (month 10)', () => {
    expect(getMonthLength(10, 2024)).toBe(31);
  });

  it('should return 30 for November (month 11)', () => {
    expect(getMonthLength(11, 2024)).toBe(30);
  });

  it('should return 31 for December (month 12)', () => {
    expect(getMonthLength(12, 2024)).toBe(31);
  });
});
