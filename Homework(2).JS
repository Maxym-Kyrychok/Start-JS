const userNumberN = parseInt(prompt('Введіть число N'));
const userNumberM = parseInt(prompt('Введіть число M'));
const minNum = Math.min(userNumberM, userNumberN);
const maxNum = Math.min(userNumberN, userNumberM);
let sum = 0;
if (isNaN(minNum) && isNaN(maxNum)) {
    alert('Введіть ціле число!')
} else {
    const skipEvenNumbers = confirm('Пропускати парні числа?');
    for(let i = userNumberN; i <= userNumberM;  i++){
        if (skipEvenNumbers && !(i % 2)) {
            continue;
        }
        sum += i;
      }
}
console.log(sum);
// console.log(isNaN(userNumber));
// console.log(Number.isInteger(userNumber));