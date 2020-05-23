function cap(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function reverseString(string) {
  const reversed = string.split('');
  return reversed.reverse().join('');
}

function calc(a, b, sign) {
  let answer = '';
  if (sign === '+') {
    answer = a + b;
  }
  if (sign === '-') {
    answer = a - b;
  }
  if (sign === '/') {
    answer = a / b;
  }
  if (sign === '*') {
    answer = a * b;
  }

  return answer;
}

function cipher(string, shift) {
  const strArray = string.split('');
  for (let i = 0; i < strArray.length; i++) {
    let charCode = strArray[i].charCodeAt(0);
    if (charCode > 64 && charCode <= 90) {
      if (charCode + shift > 90) {
        charCode -= 26;
      }
      strArray[i] = String.fromCharCode(charCode + shift);
    } else if (charCode > 96 && charCode <= 122) {
      if (charCode + shift > 122) {
        charCode -= 26;
      }
      strArray[i] = String.fromCharCode(charCode + shift);
    }
  }

  const newString = strArray.join('');
  return newString;
}

export { cap, reverseString, calc, cipher };
