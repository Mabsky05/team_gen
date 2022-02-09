const index = require('../index.js')

const fizzBuzz = require('../fizz');
 
describe('fizzBuzz', () => {
  it('should return the number if not a multiple of three or five', () => {
    expect(fizzBuzz([1])).toBe('1');
    expect(fizzBuzz([1, 2])).toBe('1, 2');
  });

  it('should return Fizz if multiple of 3', () => {
    expect(fizzBuzz([3])).toBe('Fizz');
    expect(fizzBuzz([3, 6, 12])).toBe('Fizz, Fizz, Fizz');
  });

});
