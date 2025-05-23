import { Pow } from "./pow";

describe('alg functions', () => {
  test('2^1 to be equal 2', () => {
    expect(Pow(2, 1)).toBe(2);
  });
  test('5^2 to be equal 25', () => {
    expect(Pow(5, 2)).toBe(25);
  })
});