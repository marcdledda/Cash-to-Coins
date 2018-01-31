console.log("JS TEST");

let dollarAmount = 0.35;
let piggyBank = ["Quarters: ", 0, "Dimes: ", 0, "Nickels: ", 0, "Pennies: ", 0];

function calculator(amount){
    if ((amount / 0.25) > 0.9) {
        piggyBank[1] = Math.floor(dollarAmount / 0.25);
    } else if ((amount / 0.1) > 0.9) {
        piggyBank[3] = Math.floor(dollarAmount / 0.1)
    }
}

console.log(piggyBank);