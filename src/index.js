function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    if (expr.length == 0) {return false};
    
//    let str = expr.match(/\(.+?\)/g).map(function(str) {    
//         return str.slice(1,-1)
//     })

    let arr = expr.split('');

   if (arr.filter(item => item =='(' || item ==')').length % 2 !== 0) {

       throw new Error();
   } 

   function findBrackets(expr) {
    if (expr.includes('(')) {
        let startInd = expr.lastIndexOf('(');
        let endInd = expr.indexOf(')');
        let brackets = expr.slice(startInd+1, endInd);
        let bracketsRes = 'blabla';

        expr = expr.replace(`(${brackets})`, bracketsRes);
        console.log(expr);
        return findBrackets(expr);

    } else {
       return console.log(expr);
    }
   
    return 
   }
   
   
//    arr.map(item => {

// if (!Number(item)) {item = item} else { item = Number(item)}
// return item;
//     });

}

module.exports = {
    expressionCalculator
}