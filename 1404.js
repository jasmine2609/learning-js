
  // Giả thiết: numbers là một array các số nguyên
  // Yêu cầu: 
  //	- trả về tổng các số, dùng vòng lặp for ... of
  //  - nếu array trống trả về 0
  

function sum(numbers) {
var result = 0;
for (var int of numbers){
result += int;
}
return result;
}
