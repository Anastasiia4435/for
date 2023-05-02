//first
let numbers = [5, 10, 15, 18, 30, 60, 100];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > 13) {
        console.log(numbers[i]);
    }
}

//second
let n1 = 5;
let n2 = 10;

for (i = n1; i < n2; i++){
    console.log(i);
}

//third
let num1 = prompt();
let num2 = prompt();

let number1 = Number(num1);
let number2 = Number(num2);

let summa = number1 + number2

console.log(summa);