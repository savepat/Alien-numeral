"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var symbolValues = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
};
function alienToInt(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var current = symbolValues[s[i]];
        var next = symbolValues[s[i + 1]];
        if (next && current < next) {
            result += next - current;
            i++;
        }
        else {
            result += current;
        }
    }
    return result;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Symbol Values:");
for (var symbol in symbolValues) {
    console.log("".concat(symbol, ": ").concat(symbolValues[symbol]));
}
function promptInput() {
    rl.question("Enter the Alien numeral (or type 'exit' to quit): ", function (answer) {
        if (answer.trim().toLowerCase() === "exit") {
            rl.close();
        }
        else {
            var result = alienToInt(answer.trim());
            console.log("Converted to integer: ".concat(result));
            promptInput(); // Continue prompting for input
        }
    });
}
promptInput(); // Start prompting for input
