import { Multiplication } from "./multiplication";

describe('alg functions', () => {
  test('2 * 1 to be equal 2', () => {
    expect(Multiplication(2, 1)).toBe(2);
  });
  test('7 * 5 to be equal 35', () => {
    expect(Multiplication(5, 7)).toBe(35);
  })
});