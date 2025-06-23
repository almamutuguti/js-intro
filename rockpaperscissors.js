import promptSync from "prompt-sync";

const prompt = promptSync();

function getWinner(player, computer) {
    if (player === computer) return `Draw`;

    if (
       (player === `rock` && computer === `scissors`) ||
       (player === `scissors` && computer === `paper`) ||
       (player === `paper` && computer === `rock`) 
    ) {
        return `Player wins!`
    } else {
        return `Computer wins`
    }
}

console.log(getWinner(`rock`, `scissors`));

