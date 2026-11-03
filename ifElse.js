let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

if (sum > 0) {
  console.log("The sum of the two numbers is: " + sum);
} else {
  console.log("The sum is not positive.");
}
let num3 = 0;
function printNumbers() {
    if (num3 <= 10) {
        console.log(num3);
        num3++;
        printNumbers();
    } else {
        console.log("All number are printed");
    }
}
printNumbers();