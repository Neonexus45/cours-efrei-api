import { Divison } from "./divison";

describe('alg functions', () => {
  test('2 / 1 to be equal 2', () => {
    expect(Divison(2, 1)).toBe(2);
  });
  test('25 / 5 to be equal 5', () => {
    expect(Divison(25,5)).toBe(5);
  });
  test('25 / 0 to be equal 5', () => {
    expect(Divison(25,0)).toBe("Cannot divide by zero");
  })
});