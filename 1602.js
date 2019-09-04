/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. Hàm sumAndDo làm nhiệm vụ tính tổng array đó, sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function double(num) {
console.log(num*2);
}

function sumAndDo(nums, callback) {
var result = 0;
for (var x of nums) {
  result += x;
}
return callback(result);
};

sumAndDo([1, 2, 3], double);
