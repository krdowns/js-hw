//PART 1//

var name = "Kenny";
var age = 31;
var address = "Pacifica, CA"
var greeting = "Hello, I'm " + [name] + ", I'm " + [age] + " years old and live in " + [address] + "."; 

//PART 2 -- ES6//

var greeting2 = `Hello, I'm ${name}, I'm ${age} years old and live in ${address}.`;

//PART 3 -- Pythagorean Theorem//

var side1 = 12;
var side2 = 16;
var side3 = Math.sqrt(Math.pow([side1],2) + Math.pow([side2],2));


//PART 4//
// Start with the first number, and compare to number that follows it in the array. If number #2 is larger than number #1, keep #2, if number #1 is larger, keep number #1. If two numbers are equal, keep second number. Continue this pattern until you have compared the stored number to rest of numbers


//BONUS// 
var numbers = [20, 3, 5, 7, 13, 30];

var highestNumber = 0

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
    }
}

console.log(highestNumber);