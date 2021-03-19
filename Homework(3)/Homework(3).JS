//function 1
const getMaxDigit = function () {
  let number = prompt("Напишіть довільне число");
  return Math.max(...number);
};
document.writeln(
  `Функція #1 - найбільше серед введених чисел : ${getMaxDigit()}`
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
