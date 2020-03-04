function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    if (expr.length == 0) {return false};

    let arr = expr.trim().split(' ');
    arr = arr.filter(item => item !== '');
    let str = arr.join('');

   if (arr.filter(item => item =='(' || item ==')').length % 2 !== 0) {

       throw new Error();
   } 

  let numStack = [];
  let operators = [];
  let result = 0;
  const priority = {
       
    '+': 2,
    '-': 2,
    '*': 3,
    '/': 3,
    '(': 1,
    ')': 1
   }
}
//     for (let i = 0; i < str.length-1; i++) {
//         if (!isNaN(str[i])) {
//             numStack.push(str[i]);
//         } else if (isNaN(str[i])) {
//             while (priority[operators[operators.length-1]] >= priority[str[i]] && operators[operators.length-1] !== '(') {
//                 numStack.push(operators.pop());
//             } 
//             operators.push(str[i]);
//         }
//         else if (str[i] === '(') {
//             operators.push(str[i]);
//         }
//         else if (str[i] === ')') {
//             while (operators[operators.length - 1] !== '(') {
//                 numStack.push(operators.pop())
//             } if (operators[operators.length - 1] === '(') {
//                 operators.pop();
//             }
//         }
//     };

//     // while (operators.length !== 0) {
//     //     numStack.push(operators.pop());
//     // }

//     function calculate(numStack) {
        
//         let result = [];

//         for (let j = 0; j < numStack.length; j++) {

//              if (!isNaN(str[i])) {
//             result.push(numStack[j]);           
//         }

//         switch (num[j]) {
//             case '/':
                
//                 break;
//             case '*':

//             default:
//                 break;
//         }
//         }
       
//     }

// }

//    function findBrackets(expr) {

//     if (expr.includes('(')) {
//         let startInd = expr.lastIndexOf('(');
//         let endInd = expr.indexOf(')');
//         let brackets = expr.slice(startInd+1, endInd);
//         let bracketsRes = calculate(brackets);

//         expr = expr.replace(`(${brackets})`, bracketsRes);
        
//         return findBrackets(expr);

//     } else {
//        return calculate(expr)
//     }
   
//     return 
//    }

//    function calculate(arr) {

//        let arrResult = [];

//        for ( let i = 0; i < arr.length; i++ ) {

//       if (arr[i] === '*') {
//         arrResult[arrResult.length - 1] = arrResult[arrResult.length - 1] * arr[i + 1];
//         i++;

//       } else if (arr[i] === '/') {

//         if (arr[i + 1] == 0) {
//           throw("TypeError: Division by zero");
//         };

//         arrResult[arrResult.length - 1] = arrResult[arrResult.length - 1] / arr[i + 1];
//         i++;

//       } else {
//         arrResult.push(arr[i]);
//       }
//     };

//    }
   
   




module.exports = {
    expressionCalculator
}