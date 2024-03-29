//function 1
function getMaxDigit(number) {
  return Math.max(...number.toString());
}
document.writeln(
  `Функція #1 - найбільше серед введених чисел : ${getMaxDigit(34567)}`
);

//function 2
function calcDegreeOfNumber(basis, degreeNum) {
  let degree = 1;
  for (let i = 0; i < Math.abs(degreeNum); i++) {
    degree *= basis;
  }

  if (degreeNum > 0) {
    return degree;
  } else {
    return (1 / degree).toFixed(4);
  }
}

document.writeln(
  `<hr> Функція #2- ступінь заданого числа : ${calcDegreeOfNumber(-3, -3)}<hr>`
);
//function 3
function editName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
document.writeln(`<hr> Функція #3- виправлене ім'я : ${editName("мАКС")}<hr>`);
//function 4
function calculatTax(salary) {
  const pensionFee = 18;
  const militaryCollection = 1.5;
  return salary - salary * 0.01 * (pensionFee + militaryCollection);
}
document.writeln(
  `<hr> Функція #4- заробітня пласта після оподпткування : ${calculatTax(
    5000
  )}<hr>`
);
//function 5
function getRandomNumber(max, min) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
document.writeln(
  `<hr> Функція #5- випадкове число в заданому діапазоні : ${getRandomNumber(
    5,
    10
  )}<hr>`
);
//function 6
function countLetter(latter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.toLowerCase().charAt(i) === latter) {
      count++;
    }
  }
  return count;
}
document.writeln(
  `<hr> Функція #6- рахує букви в слові : ${countLetter(
    "а",
    "Асталавіста"
  )}<hr>`
);
//function 7
function convertCurrency(currencyAmount) {
  let convert = "";
  if (currencyAmount.includes("UAH")) {
    convert = (parseInt(currencyAmount).toString() / 27).toFixed(2) + "$";
  } else if (currencyAmount.includes("$")) {
    convert = (parseInt(currencyAmount).toString() * 27).toFixed(2) + "UAH";
  } else {
    return "Other currency is not convertible";
  }
  return convert;
}
document.writeln(
  `<hr> Функція #7- конвертує $ в UAH і навпаки : ${convertCurrency(
    "100UAH"
  )}<hr>`
);
//function 8
function getRandomPassword(numberOfNumbers) {
  let password = "";
  for (let i = 0; i < (numberOfNumbers ?? 8); i++) {
    password += getRandomNumber(1, 9).toString();
  }
  return password;
}
document.writeln(
  `<hr> Функція #8- генерує пароль із заданої кількості символв або з 8 : ${getRandomPassword()}
  <hr>`
);
//function 9
function deleteLetters(letter, sentence) {
  let clearSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== letter) {
      clearSentence += sentence.charAt(i);
    }
  }
  return clearSentence;
}
document.writeln(
  `<hr> Функція #9- видаляє літери з речення : ${deleteLetters(
    "a",
    "blabla"
  )}<hr>`
);
//function 10
function isPalindrom(word) {
  const withoutSpaces = word.toLowerCase().split(" ").join("");
  let inwertedWord = "";
  for (let i = withoutSpaces.length; i >= 0; i--) {
    inwertedWord += withoutSpaces.charAt(i);
  }
  return inwertedWord === withoutSpaces;
}
document.writeln(
  `<hr> Функція #10- перевіряє чи є слово паліндромом: ${isPalindrom(
    "Я несу гусеня"
  )}<hr>`
);
// function 11
function deleteDuplicateLetter(sentence) {
  const newSentence = sentence.toLowerCase().split(" ").join("");
  let nonDuplicateLetter = "";
  for (let i = 0; i < newSentence.length; i++) {
    if (
      newSentence.indexOf(newSentence.charAt(i)) ===
      newSentence.lastIndexOf(newSentence.charAt(i))
    ) {
      nonDuplicateLetter += newSentence[i];
      console.log("nonDuplicateLetter: ", nonDuplicateLetter);
    }
  }
  return nonDuplicateLetter;
}

document.writeln(
  `<hr> Функція #11- залишає тільки унікальні літери в речення : ${deleteDuplicateLetter(
    "Бісквіт був дуже ніжним"
  )}<hr>`
);
