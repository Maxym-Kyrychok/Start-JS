const userNumberN = parseInt(prompt('Введіть число N'));
const userNumberM = parseInt(prompt('Введіть число M'));
let sum = 0;
if (isNaN(userNumberN) && isNaN(userNumberM)) {
    alert('Введіть ціле число!')
} else {
    const skipEvenNumbers = confirm('Пропускати парні числа?');
    for(let i = userNumberN; i <= userNumberM; skipEvenNumbers ? i++ : i++){
        sum += i;
      }
}
console.log(sum);
// console.log(isNaN(userNumber));
// console.log(Number.isInteger(userNumber));