console.log("JS TEST");

let dollarAmount = 0.35;
let piggyBank = ["Quarters: ", 0, "Dimes: ", 0, "Nickels: ", 0, "Pennies: ", 0];

function calculator(){
    if ((dollarAmount / 0.25) > 1) {
        piggyBank[1] = Math.floor(dollarAmount / 0.25);
    }
    if ((dollarAmount / 0.10) > 1) {
        piggyBank[3] = Math.floor(dollarAmount / 0.10);
    }
    if ((dollarAmount / 0.05) > 1) {
        piggyBank[5] = Math.floor(dollarAmount / 0.05);
    }
    if ((dollarAmount / 0.01) > 1) {
        piggyBank[7] = Math.floor(dollarAmount / 0.01);
    }
}

calculator();
console.log("Dollar Amount: $", dollarAmount);
console.log(piggyBank);