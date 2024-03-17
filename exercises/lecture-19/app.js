let str1 = "I'm a string!";
let str2 = "I'm a string!";
// рядки мають однакову довжину
// перевірка на рівність
if (str1 == str2) {
  console.log("Рядки рівні.");
} else {
  console.log("Рядки не рівні.");
}
if (str1 === str2) {
  console.log("Рядки рівні.");
} else {
  console.log("Рядки не рівні.");
}

let str = "Hello World";
let firstCharIndex = 0;
let firstCharUsingIndex = str[firstCharIndex];
console.log("індекс:", firstCharUsingIndex);
let firstCharUsingCharAt = str.charAt(0);
console.log("charAt():", firstCharUsingCharAt);

let lastIndex1 = str.length - 1;
let lastChar1 = str[lastIndex1];
console.log("спосіб 1", lastChar1);
let lastChar2 = str.charAt(10);
console.log("спосіб 2", lastChar2);

function lastCharOption1(str) {
  return str.charAt(str.length - 1);
}

function lastCharOption2(str) {
  return str[str.length - 1];
}

function lastCharOption3(str) {
  return str.slice(-1);
}
console.log("1:", lastCharOption1(str));
console.log("2:", lastCharOption2(str));
console.log("3:", lastCharOption3(str));

let a = "When candles are out,";
let b = "all cats are grey.";
let result = a.concat(" ", b);
console.log(result);

let fact = "Fifteen is the same as";
let a1 = 5;
let b1 = 10;
fact = fact + " " + (a1 + b1);
console.log(fact);

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
let firstName = "Tom";
let lastName = "Cat";
let fullName = getFullName(firstName, lastName);
console.log(fullName);

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function greeting() {
  return "Hello, " + fullName + "!";
}
console.log(greeting());

let greting = `<div><h1>${greeting(
  getFullName(firstName, lastName)
)}</h1></div>`;
console.log(greting);

let string1 = "  The name of our game  ";
let trimmedString1 = string1.trim();
console.log(trimmedString1);
let trimmedStartString1 = string1.trimStart();
console.log(trimmedStartString1);
let trimmedEndString1 = string1.trimEnd();
console.log(trimmedEndString1);
const phoneNumber = "\t  555-123\n ";
let trimmedPhoneNumber = phoneNumber.trim();
console.log(trimmedPhoneNumber);
let trimmedStartPhoneNumber = phoneNumber.trimStart();
console.log(trimmedStartPhoneNumber);

let sentence = 'Always look on the bright side of life';
// look up
let search1 = 'look up';
if (sentence.indexOf(search1) !== -1) {
    console.log("містить 'look up'.");
} else {
    console.log("не містить 'look up'.");
}
// look on
let search2 = 'look on';
if (sentence.includes(search2)) {
    console.log("містить 'look on'.");
} else {
    console.log("не містить 'look on'.");
}
// 'look on' починаючи з 8+ позиції
let search3 = 'look on';
let startingPosition = 8;
if (sentence.indexOf(search3, startingPosition) !== -1) {
    console.log("містить 'look on' з 8+ позиції.");
} else {
    console.log("не містить 'look on' з 8+ позиції.");
}

let index1 = sentence.indexOf('l');
console.log("Індекс символу 'l':", index1); // 1
let index2 = sentence.indexOf('l', 3);
console.log("Індекс символу 'l' починаючи з 3-ї позиції:", index2); // 7
let index3 = sentence.indexOf('L');
console.log("Індекс символу 'L':", index3); // -1 (не знайдено)

let substring1 = sentence.substring(7);
console.log(substring1);
let substring2 = sentence.substring(0, 6);
console.log(substring2);
let substring3 = sentence.substring(7, 11);
console.log(substring3);

//вираз для перевірки імені користувача
let usernameRegex = /^[a-z0-9_-]{8,16}$/;
//перевірка email
let emailRegex = /^[a-zA-Z0-9._%+-]+@(?!.*\.ru$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//substring
function truncateTextUsingSubstring(text, maxLength) {
  if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
  }
  return text;
}
//substr
function truncateTextUsingSubstr(text, maxLength) {
  if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
  }
  return text;
}
let sentence1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
console.log(truncateTextUsingSubstring(sentence1, 50)); 
console.log(truncateTextUsingSubstr(sentence1, 50));    
