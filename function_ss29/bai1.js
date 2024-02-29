let arr = [1, 2, 5];
function ktChanLe(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(`${arr[i]} là số chẵn`);
    } else {
      console.log(`${arr[i]} là số lẻ`);
    }
  }
}
ktChanLe(arr);
