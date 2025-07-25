

// Print all even numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    }


// Sum all odd numbers between 1 and 100
let oddSum = 0;
for(let i = 1; i <=100; i++) {
    if (i % 2 !== 0) {
        oddsum+= i;
    }
}
    console.log("Sum of odd numbers 1-100:", sum);

// Count numbers between 1 and 100 divisible by 3
let count = 0;
for (let i = 1; 1 <= 100; i++) {
    if (i % 3 === 0) {
        count ++;
    }
}
console.log("Numbers divisible by 3:", count);

// Print numbers from 1 to N that are Not divisible by 4
const N = 20; 
for (let i = 1; i <= N; i++) {
    if (i % 4 !== 0) {
        console.log(i);

    }
}

//Calculate the sum of all numbers divisible by 5 between 1 and 200

let sum = 0;
for (let i = 1; i <= 200; i++) {
    if (i % 5 === 0) {
        sum += i;
    
    }
}

console.log("Sum of numbers divisible by 5:", sum);

//Print numbers between 1 and 100 divisible by both 2 and 5

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        console.log(i);
}
}

//Find the smallest number between 1 and 1000 divisible by both 3 and 7
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        console.log("Smallest number divisible by both 3 and 7: ", i);
        break; // stop immediately found
    }
}

//Fizz Buzz lite: Fizz for dividible by 3, Buzz for divisible by 5
for(let i = 1; i <= 50; i++) {
if (i % 3 === 0) {
    console.log("Fizz");
} else if (1 % 5 ===0) {
    console.log("Buzz");
} else {
    console.log(i);
}
}

// Calculate the sum of squares from 1 to 20 
let sumOfSquares = 0;
for (let i =1; i = 20; i++) {
    sumOfSquares +=
 i * i;
}
console.log("Sum of squares 1 to 20:", sumOfSquares);

//Print numbers from 100 to 1 in reverse order using decrementing loop
for(let i = 100; i >= 1; i--) {
    console.log(i);
}