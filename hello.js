function print(x) {
  console.log(x);
}

// function to check palindrome
function checkPalindrome(str) {
  // applying split, revere and join
  const reversedString = str.split("").reverse().join("");
  if (str === reversedString) return true;
  else return false;
}

const A = process.argv;
//print(A)A.slice(2,)

result = checkPalindrome(A.slice(2).join(" "));
if (result) {
  print("palin");
  // console.log("The given string is Palindrome");
} else {
  print("nopalin");
  //   console.log("The given string is NOT Palindrome");
}
