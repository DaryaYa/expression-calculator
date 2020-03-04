function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    
    if (expr.length == 0) {
        throw new Error();
    };

   let regexp = /[-+*\/()]|\d+/g;
   let arr = expr.match(regexp);
  
// console.log(arr);
   if (arr.filter(item => item =='(').length !== arr.filter(item => item ==')').length) {

       throw new Error('ExpressionError: Brackets must be paired');
   } ;
// console.log(arr);
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
   };

   function calculate(a, op, b) {
// console.log(op);
    if (op === '/' && Number(b) === 0) throw new Error("TypeError: Division by zero.");
    if (op === '-') return Number(a) - Number(b);
    else if (op === '+') return Number(a) + Number(b);
    else if (op === '/') return Number(a) / Number(b);
    else if (op === '*') return Number(a) * Number(b);
  };
   
  while (operators != 0 || arr.length != 0) {
      let token = arr[0];
// console.log(token);
    if (!isNaN(token)) {
        numStack.push(token); 
        arr.shift()
    }  else if (token === ')') {
       while (operators[operators.length - 1] !== '(') {
         result = calculate(numStack[numStack.length - 2], operators[operators.length - 1], numStack[numStack.length - 1]);
// console.log(result);
         numStack = numStack.slice(0, -2);
         numStack.push(result);
         operators.pop();
       }
       operators.pop();
      arr.shift();

   } 

    else if (priority[token] > priority[operators[operators.length-1]] || token === '(' || operators.length == 0 || numStack.length < 1) {
// console.log(token);
    operators.push(token);
    arr.shift();
  } else {
      result = calculate(numStack[numStack.length - 2], operators[operators.length-1], numStack[numStack.length - 1]);
      numStack = numStack.slice(0, -2);
      numStack.push(result);
      operators.pop();
  }
  }
    // for (let i = 0; i < arr.length; i++) {
    // if (!isNaN(arr[i])) {
    //     numStack.push(arr[i]); 
    // } else if (arr[i] === ')') {
    //     while (operators[operators.length - 1] !== '(') {
    //     result = calculate(numStack[numStack.length - 2], operators[operators.length - 1], numStack[numStack.length - 1]);
    //     numStack = numStack.slice(0, -2);
    //     numStack.push(result);
    //     operators.pop();
    //     } 
    //     operators.pop();
    // } else if (priority[arr[i]] > priority[operators[operators.length-1]] || arr[i] === '(' || operators.length == 0) {
    //     operators.push(arr[i]);
    // } else {
    //     result = calculate(numStack[numStack.length - 2], operators[operators.length-1], numStack[numStack.length - 1]);
    //     numStack = numStack.slice(0, -2);
    //     numStack.push(result);
    //     operators.pop();
    //     operators.push(arr[i]);
        
    // }    
    // }
  return result;
}

module.exports = {
    expressionCalculator
}