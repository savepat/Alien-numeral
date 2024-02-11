import * as readline from 'readline';

const symbolValues: { [key: string]: number } = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
};

function alienToInt(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = symbolValues[s[i]];
        const next = symbolValues[s[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++; 
        } else {
            result += current;
        }
    }

    return result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Symbol Values:");
for (const symbol in symbolValues) {
    console.log(`${symbol}: ${symbolValues[symbol]}`);
}

function promptInput() {
    rl.question("Enter the Alien numeral (or type 'exit' to quit): ", (answer) => {
        if (answer.trim().toLowerCase() === "exit") {
            rl.close();
        } else {
            const result = alienToInt(answer.trim());
            console.log(`Converted to integer: ${result}`);
            promptInput(); // Continue prompting for input
        }
    });
}

promptInput(); // Start prompting for input
