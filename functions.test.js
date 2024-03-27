/*const sum = require('./functions.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
*/

import { capitalize } from "./functions.js";

//capitalize(str)
test(`capitalize(str) changes the string 'hello' to 'Hello'`,()=>{
    expect(capitalize('hello')).toBe('Hello');
});

//reverseString(str)
test(`reverseString(str) changes 'hello' to 'olleh'`,()=>{
    expect(reverseString('hello')).toBe('olleh');
})
