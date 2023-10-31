let symbol = 'X';
const game = document.querySelectorAll('.game');
const cell1 = document.getElementById('cell-1');
const cell2 = document.getElementById('cell-2');
const cell3 = document.getElementById('cell-3');
const cell4 = document.getElementById('cell-4');
const cell5 = document.getElementById('cell-5');
const cell6 = document.getElementById('cell-6');
const cell7 = document.getElementById('cell-7');
const cell8 = document.getElementById('cell-8');
const cell9 = document.getElementById('cell-9');
const player = document.getElementById('player');
const btn = document.getElementById('btn');
game.forEach((cell) => {
    cell.addEventListener('click', () => {
        cell.innerText = symbol
        symbol = symbol === 'X' ? 'O' : 'X';
        symbol === 'X' ? player.innerText = "Player X's Turn" : player.innerText = "Player O's Turn";
        if (cell1.innerText && cell2.innerText && cell3.innerText && cell4.innerText && cell5.innerText && cell6.innerText && cell7.innerText && cell8.innerText && cell9.innerText) {
            player.innerText = "Game Over";
        }
        if ((cell1.innerText === 'X' && cell2.innerText === 'X' && cell3.innerText === 'X') || (cell4.innerText === 'X' && cell5.innerText === 'X' && cell6.innerText === 'X') || (cell7.innerText === 'X' && cell8.innerText === 'X' && cell9.innerText === 'X') || (cell1.innerText === 'X' && cell4.innerText === 'X' && cell7.innerText === 'X') || (cell2.innerText === 'X' && cell5.innerText === 'X' && cell8.innerText === 'X') || (cell3.innerText === 'X' && cell6.innerText === 'X' && cell9.innerText === 'X') || (cell1.innerText === 'X' && cell5.innerText === 'X' && cell9.innerText === 'X') || (cell3.innerText === 'X' && cell5.innerText === 'X' && cell7.innerText === 'X')) {
            player.innerText = "Player X Won";
        } else if ((cell1.innerText === 'O' && cell2.innerText === 'O' && cell3.innerText === 'O') || (cell4.innerText === 'O' && cell5.innerText === 'O' && cell6.innerText === 'O') || (cell7.innerText === 'O' && cell8.innerText === 'O' && cell9.innerText === 'O') || (cell1.innerText === 'O' && cell4.innerText === 'O' && cell7.innerText === 'O') || (cell2.innerText === 'O' && cell5.innerText === 'O' && cell8.innerText === 'O') || (cell3.innerText === 'O' && cell6.innerText === 'O' && cell9.innerText === 'O') || (cell1.innerText === 'O' && cell5.innerText === 'O' && cell9.innerText === 'O') || (cell3.innerText === 'O' && cell5.innerText === 'O' && cell7.innerText === 'O')) {
            player.innerText = "Player O Won";
        }
    });
});
btn.addEventListener('click', () => {
    location.reload();
});