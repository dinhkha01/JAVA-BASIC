function maxSubArraySum(a) {
  var max_so_far = a[0];
  var curr_max = a[0];
  var start = 0;
  var end = 0;
  var s = 0;

  for (var i = 1; i < a.length; i++) {
    if (a[i] > curr_max + a[i]) {
      curr_max = a[i];
      s = i;
    } else {
      curr_max = curr_max + a[i];
    }
    if (curr_max > max_so_far) {
      max_so_far = curr_max;
      start = s;
      end = i;
    }
  }
  return a.slice(start, end + 1);
}

// Khai báo mảng số nguyên
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let result = maxSubArraySum(arr);

console.log("Mảng con có tổng lớn nhất là: ", result);
