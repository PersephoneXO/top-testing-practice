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
function reverseString(str){
    let newStr='';
    for(let i=str.length-1;i>-1;i--){
        newStr+=str[i];
    }
    return newStr;
}

//3.
export const calculator=(function(){

    function add(a,b){
        return a+b;
    }
    function subtract(a,b){
        return a-b;
    }
    function divide(a,b){
        return a/b;
    }
    function multiply(a,b){
        return a*b;
    }

    return{
        add,
        subtract,
        divide,
        multiply
    }
})();


//4.
function caesarCipher(str,shift){
    if(shift==0||shift==26){
        return str;
    }
    let cipherStr='';
    for(let i=0;i<str.length;i++){
        let current=str[i];
        //check is current is a letter
        if(current.match(/[a-z]/i)){
            let charCode=str.charCodeAt(i);

            //for uppercase
            if(charCode>=65 && charCode<=90){
                current=String.fromCharCode(((charCode-65+shift)%26)+65);
            }

            //for lowercase
            if(charCode>=97 && charCode<=122){
                current=String.fromCharCode(((charCode-97+shift)%26)+97);;
            }
        }
        cipherStr+=current;
    }
    return cipherStr;
}

//5.
function analyzeArray(arr){
    let object={};

    //average
    let sum=0;
    for(let each of arr){
        sum+=each;
    }
    let avg=sum/arr.length;
    object.average=avg;

    //min
    let min=arr[0];
    for(let each of arr){
        if(min>each){
            min=each;
        }
    }
    object.min=min;

    //max
    let max=arr[0];
    for(let each of arr){
        if(max<each){
            max=each;
        }
    }
    object.max=max;

    //length
    object.length=arr.length;

    return object;
}


export {
    capitalize,
    reverseString,
    caesarCipher,
    analyzeArray
}
