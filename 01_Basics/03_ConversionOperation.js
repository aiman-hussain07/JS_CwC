let score = true;
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/* "3" => 3
"3abc" => NaN
undefined => NaN
null => 0
true => 1 */

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);