const { add } = require('./calculator.js');

// test away!
describe("Add Function", () => { 
test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
    /*example 2) declare variables
    let firstNum = 1;
    let secondNum = 2;
    let expected = 3;

    expect(add(firstNum, secondNum)).toBe(expected);
    */
    /*example 3) sanity test
    let actual = add(firstNum, secondNum);
    expect(actual).toBe(expected)
    */
  });
})