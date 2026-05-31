/*
Exercise: Age Category Checker
Create a variable called `age`.

Rules:
* If age is less than 13 → print `"Child"`
* If age is between 13 and 19 → print `"Teenager"`
* If age is between 20 and 59 → print `"Adult"`
* Otherwise → print `"Senior"`

### Example 1
let age = 15;

Output:
Teenager

Example 2
let age = 35;

Output:
Adult

Requirements
* Use `if...else if...else`
* Use comparison operators (`<`, `>=`, `<=`)
* Print the result using `console.log()`

### Bonus Challenge
After completing it, modify the program so that:

let age = -5;

prints:
Invalid Age

instead of Child.
*/

let age = -5; 

if (age < 0) {
    console.log("Invalid Age")
} else if (age <= 13) {
    console.log("Child"); 
} else if (age <= 19) {
    console.log("Teenager"); 
} else if (age <= 59) {
    console.log("Adult"); 
} else {
    console.log("Senior");    
}