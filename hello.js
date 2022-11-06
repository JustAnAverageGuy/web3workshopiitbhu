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

A = process.argv;
//print(A)

result = checkPalindrome(A.slice(2).join(" "));
if (result == true) {
  print("palin");
  // console.log("The given string is Palindrome");
} else {
  print("nopalin");
  //   console.log("The given string is NOT Palindrome");
}
