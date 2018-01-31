console.log("JS TEST");

let dollarAmount = 0.35;
let piggyBank = ["Quarters: ", 0, "Dimes: ", 0, "Nickels: ", 0, "Pennies: ", 0];

function calculator(){
    if ((dollarAmount / 0.25) > 1) {
        piggyBank[1] = Math.floor(dollarAmount / 0.25);
    }
}

calculator();
console.log(piggyBank);