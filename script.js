let btns = document.querySelectorAll(".btn");
let turnO = true;
let turnX = false;
let winmsg = document.querySelector(".win-msg");

let wincond = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;

    winner();
  });
});
const winner = () => {
  for (cond of wincond) {
    let a = btns[cond[0]].innerText;
    let b = btns[cond[1]].innerText;
    let c = btns[cond[2]].innerText;

    if (a != "" && b != "" && c != "") {
      if (a === b && b === c) {
        winmsg.innerText = a + " is the winner";
        btns[cond[0]].classList.remove("btn");
        btns[cond[1]].classList.remove("btn");
        btns[cond[2]].classList.remove("btn");
        btns[cond[0]].classList.add("win");
        btns[cond[2]].classList.add("win");
        btns[cond[1]].classList.add("win");

        btns.forEach((btn) => {
          btn.disabled = true;
        });
      }
    }
  }
  
};

let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  btns.forEach((btn) => {
    btn.disabled = false;
    btn.innerText = "";
    winmsg.innerText = "";
    btn.classList.remove("win");
    btn.classList.add("btn");
  });
});
