import promptSync from "prompt-sync";

const prompt = promptSync();




let base = 6;
let code = [];
for (let i = 0; i <= 4; i++) {
    code[i] = base * i + (i % 2 === 0 ? 3 : -2);
    
}


let guess = []
for (let i = 0; i <= 4; i++) {
    let answer = parseInt(prompt('Enter guess for position' + i + ':'))
    guess[i] = parseInt(answer, 10);
}


let allguesses = true;
for (let i = 0; i <= 4; i++) {
    if (guess[i] === code[i]) {
        console.log("Position " + i + " is correct.");
    } else {
        console.log("Position " + i + " is wrong (Your guess: " + guess[i] + ", Expected: " + code[i] + ").");
        allguesses = false;
    }
}

if (allguesses) {
    console.log('Vault Unlocked');
}else {
    console.log('Access denied,try again.');
}

// 3  4 15 16 27


