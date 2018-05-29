// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  if (str.length === 0) return '';
  let arr = str.split(/[\W_]/);
  let finalArr = [];
  let firstWord = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let strArr = arr[i].split('');
    strArr[0] = strArr[0].toUpperCase();
    strArr = strArr.join('');
    finalArr.push(strArr);
  };

  finalArr[0] = firstWord;
  finalArr = finalArr.join('');
  return finalArr;
};
toCamelCase('the-big_dog_eat');
