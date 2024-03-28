/*const sum = require('./functions.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
*/

import { capitalize,
        reverseString,
        caesarCipher,
        analyzeArray
} from "./functions.js";
import { calculator } from "./functions.js";

//capitalize(str)
test(`capitalize(str) changes the string 'hello' to 'Hello'`,()=>{
    expect(capitalize('hello')).toBe('Hello');
});

//reverseString(str)
test(`reverseString(str) changes 'hello' to 'olleh'`,()=>{
    expect(reverseString('hello')).toBe('olleh');
});

//calculator()
test(`calculator.add(2,3) returns 5`,()=>{
    expect(calculator.add(2,3)).toBe(5);
});
test(`calculator.subtract(5,2) returns 3`,()=>{
    expect(calculator.subtract(5,2)).toBe(3);
});
test(`calculator.divide(18,9) returns 2`,()=>{
    expect(calculator.divide(18,9)).toBe(2);
});
test(`calculator.multiply(5,10) returns 50`,()=>{
    expect(calculator.multiply(5,10)).toBe(50);
});

//caesarCipher(str,shift)
test(`caesarCipher(str,shift) takes 'hello' and 1 and returns 'ifmmp'`,()=>{
    expect(caesarCipher('hello',1)).toBe('ifmmp');
});

//analyzeArray(arr)
test(`analyzeArray([1,8,3,4,2,6]) returns
    object == {
    average: 4,
    min: 1,
    max: 8,
    length: 6
    };`,()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
  });
