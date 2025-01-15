// for (let i =1 ; i<= 5;i++){
//     console.log(i);
// }


// for (i = 10; i>= 1; i--){
//     console.log(i);
// }


// let i = 1;
// while(i<=5){
//     console.log(i)
//     i ++;
// }


// let i = 2;
// while(i <= 20){
//     console.log(i);
//     i += 2;
// }


// let i = 1;
// do {
//     console.log(i);
//     i++;
// }while (i<=5);


// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=3);


// Practice Problems and Small Projects
// 1. Print Numbers in a Range Using for Loop
// Problem:
// Write a for loop to print all the numbers from start to end, inclusive. The values of start and end will be provided.

// Example:

// javascript
// Copy code
// start = 5, end = 15
// Output: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// Solution:

// javascript
// Copy code
// let start = 5, end = 15;
// for (let i = start; i <= end; i++) {
//     console.log(i);
// }
// 2. Count Even Numbers Using while Loop
// Problem:
// Write a while loop that counts how many even numbers exist between 1 and 50.

// Solution:

// javascript
// Copy code
// let i = 1;
// let count = 0;
// while (i <= 50) {
//     if (i % 2 === 0) {
//         count++;
//     }
//     i++;
// }
// console.log(count);
// 3. Print Multiplication Table Using for Loop
// Problem:
// Write a for loop to print the multiplication table for a given number up to 10.

// Example:

// javascript
// Copy code
// Input: 3
// Output: 
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// ...
// 3 x 10 = 30
// Solution:

// javascript
// Copy code
// let number = 3;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }
// 4. Find Factorial Using while Loop
// Problem:
// Write a while loop to calculate the factorial of a given number. (Factorial of a number n is n! = n * (n-1) * (n-2) * ... * 1)

// Example:

// javascript
// Copy code
// Input: 5
// Output: 120 (since 5! = 5 * 4 * 3 * 2 * 1 = 120)
// Solution:

// javascript
// Copy code
// let number = 5;
// let factorial = 1;
// let i = 1;
// while (i <= number) {
//     factorial *= i;
//     i++;
// }
// console.log(factorial);
// 5. Reverse a Number Using do-while Loop
// Problem:
// Write a do-while loop to reverse the digits of a given number.

// Example:

// javascript
// Copy code
// Input: 12345
// Output: 54321
// Solution:

// javascript
// Copy code
// let number = 12345;
// let reversed = 0;
// do {
//     let digit = number % 10;
//     reversed = reversed * 10 + digit;
//     number = Math.floor(number / 10);
// } while (number > 0);
// console.log(reversed);
// 6. Print Prime Numbers Using for Loop
// Problem:
// Write a for loop that prints all prime numbers between 1 and 100.

// Solution:

// javascript
// Copy code
// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }
// 7. Sum of Digits Using while Loop
// Problem:
// Write a while loop to calculate the sum of the digits of a given number.

// Example:

// javascript
// Copy code
// Input: 1234
// Output: 10 (since 1 + 2 + 3 + 4 = 10)
// Solution:

// javascript
// Copy code
// let number = 1234;
// let sum = 0;
// while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(sum);
// 8. Print Fibonacci Series Using for Loop
// Problem:
// Write a for loop to print the first n numbers of the Fibonacci sequence.

// Example:

// javascript
// Copy code
// Input: n = 7
// Output: 0, 1, 1, 2, 3, 5, 8
// Solution:

// javascript
// Copy code
// let n = 7;
// let a = 0, b = 1;
// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }
// 9. Sum of First N Natural Numbers Using while Loop
// Problem:
// Write a while loop to calculate the sum of the first n natural numbers.

// Example:

// javascript
// Copy code
// Input: n = 10
// Output: 55 (since 1 + 2 + 3 + ... + 10 = 55)
// Solution:

// javascript
// Copy code
// let n = 10;
// let sum = 0;
// let i = 1;
// while (i <= n) {
//     sum += i;
//     i++;
// }
// console.log(sum);
// 10. Count Digits in a Number Using do-while Loop
// Problem:
// Write a do-while loop to count the number of digits in a given number.

// Example:

// javascript
// Copy code
// Input: 987654
// Output: 6 (since there are 6 digits)
// Solution:

// javascript
// Copy code
// let number = 987654;
// let count = 0;
// do {
//     count++;
//     number = Math.floor(number / 10);
// } while (number > 0);
// console.log(count);
// Bonus Project Ideas:
// 1. Number Guessing Game (Using Loops)
// Objective:
// Create a number guessing game where the program randomly selects a number, and the user has to guess it. The program should provide feedback if the guess is too high or too low, and repeat until the user guesses correctly.

// Concepts Used:

// Loops (while loop)
// User Input
// 2. Create a Simple Countdown Timer (Using setInterval and Loops)
// Objective:
// Create a countdown timer that starts from a given number and counts down to zero, printing the remaining time at each second.

// Concepts Used:

// setInterval to repeat actions
// Loops (for loop, or while loop)
// 3. Create a Simple ATM Machine Simulator
// Objective:
// Build a simple ATM machine simulator using loops that allows the user to input a pin, check their balance, withdraw money, and exit. The program should keep running until the user selects "Exit".

// Concepts Used:

// Loops (do-while loop)
// Conditional statements (if-else)
// By practicing these 10 problems and the bonus projects, you'll get hands-on experience with JavaScript loops and how they can be applied in real-world scenarios.