let board = document.getElementById('board');
let board_length = 3;
let winner = document.getElementById('winner');
let table;
let steps = 0;
let turn = 0;
const globalWidth = 300;

function updateBoardLength(inc) {
    if(board_length + inc >= 2 && board_length + inc <= 10)
        board_length += inc;
    renderBoard(board_length);
    document.getElementById('board_length').textContent = 'Board length: ' + board_length;
}

function renderBoard(b_len) {
    while(board.firstChild)
        board.removeChild(board.firstChild);
    let boxLength = parseInt(globalWidth / b_len);
    for(let i=0;i<b_len;++i) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'container';
        for(let j=0;j<b_len;++j) {
            let colDiv = document.createElement('div');
            colDiv.R = i; colDiv.C = j;
            colDiv.className = 'box';
            colDiv.style.height = boxLength+'px';
            colDiv.style.width = boxLength+'px';
            colDiv.addEventListener('click', boxClick);
            rowDiv.appendChild(colDiv);
        }
        board.appendChild(rowDiv);
    }
    winner.textContent = '';
    // https://stackoverflow.com/a/37949887
    table = Array(b_len).fill(null).map(function(){return Array(b_len).fill(0)});
    steps = 0;
    turn = 'X';
}

function boxClick() {
    if(turn == 0 || table[this.R][this.C] != 0) return;
    this.textContent = turn;
    table[this.R][this.C] = turn;

    let win = false;
    let same = true;
    for(let i=0;i<board_length;++i)
        if(table[this.R][i] != turn) {
            same = false;
            break;
        }
        console.log('A',same);
    if(same == true)for(let i=0;i<board_length;++i) {
        document.getElementsByClassName('box')[this.R*board_length+i].style['background-color'] = 'lightGreen';
        win = true;
    }

    same = true;
    for(let i=0;i<board_length;++i)
        if(table[i][this.C] != turn) {
            same = false;
            break;
        }
        console.log('A',same);
    if(same == true)for(let i=0;i<board_length;++i) {
        document.getElementsByClassName('box')[i*board_length+this.C].style['background-color'] = 'lightGreen';
        win = true;
    }

    if(this.R == this.C) {
        same = true;
        for(let i=0;i<board_length;++i)
            if(table[i][i] != turn) {
                same = false;
                break;
            }
        console.log('A',same);
        if(same == true)for(let i=0;i<board_length;++i) {
            document.getElementsByClassName('box')[i*board_length+i].style['background-color'] = 'lightGreen';
            win = true;
        }
    }

    if(this.R+this.C == board_length-1) {
        same = true;
        for(let i=0;i<board_length;++i)
            if(table[i][board_length-1-i] != turn) {
                same = false;
                break;
            }
            console.log('A',same);
        if(same == true)for(let i=0;i<board_length;++i) {
            document.getElementsByClassName('box')[i*board_length+board_length-1-i].style['background-color'] = 'lightGreen';
            win = true;
        }
    }

    if(!win) turn = (turn=='X') ? 'O' : 'X';
    else {
        winner.textContent = 'Player '+turn+' wins!';
        turn = 0;
    }
    ++steps;

    if(turn != 0 && steps >= board_length*board_length) {
        document.getElementById('winner').textContent = 'Draw.';
        turn = 0;
    }
}