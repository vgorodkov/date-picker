import { isInputMaskified } from '.';

describe('isInputMaskified function', () => {
  it('should return true if any value in the dateInput is maskified', () => {
    const dateInput1 = { year: 'YYYY', month: '05', day: '06' };
    const dateInput2 = { year: '2024', month: 'MM', day: '06' };
    const dateInput3 = { year: '2024', month: '05', day: 'DD' };
    expect(isInputMaskified(dateInput1)).toBe(true);
    expect(isInputMaskified(dateInput2)).toBe(true);
    expect(isInputMaskified(dateInput3)).toBe(true);
  });
  it('should return false if values in the dateInput are not maskified', () => {
    const dateInput1 = { year: '2024', month: '05', day: '06' };
    const dateInput2 = { year: '2024', month: '01', day: '06' };
    expect(isInputMaskified(dateInput1)).toBe(false);
    expect(isInputMaskified(dateInput2)).toBe(false);
  });
});
