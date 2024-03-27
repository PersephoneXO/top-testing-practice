/*function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
*/

//1.
function capitalize(str){
    let start=str[0].toUpperCase();
    let rest=str.slice(1,str.length);
    return start+rest;
}

//2.


export {
    capitalize
}
