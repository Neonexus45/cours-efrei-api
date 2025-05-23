import { substraction } from "./substraction";

describe('alg functions', () => {
  test('2 - 1 to be equal 1', () => {
    expect(substraction(2, 1)).toBe(1);
  });
  test('5 - 7 to be equal -3', () => {
    expect(substraction(5, 7)).toBe(-2);
  })
});