function sum(...numbers) {
    return numbers.reduce((val, num) => val + num ,0);
}
console.log(sum(1, 2, 3, 4, 5));