function countCharacters(str) {
  var k = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      k++;
    }
  }
  return k;
}
let s = "hello bro";

console.log("số kí tự là ", countCharacters(s));
