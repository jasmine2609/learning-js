/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
function multiply(arr) {
var result = 1;
for (var x of arr){
result *= x;
}
return result;
}

console.log(multiply([2, 3, 4])); // expect: 24
