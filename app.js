const guessButton = document.getElementById("guess-button");
const tryButton = document.getElementById("try-button");
const result_Text = document.getElementById("result");
const easter = document.getElementById("easter");
result_Text.style.display = "none";
easter.style.display = "none";
tryButton.style.display = "none";
let life = 2;

const randomNum = Math.floor(Math.random() * 11);
function guessNumber() {
  const inputNumber = document.getElementById("input-number").value;
  const lifeText = document.getElementById("life");
  lifeText.innerHTML = "Life: " + life;

  if (randomNum == inputNumber) {
    easter.style.display = "none";
    result_Text.style.display = "block";
    result_Text.innerHTML = "WELL DONE";
    guessButton.style.display = "none";
    tryButton.style.display = "block";
    tryButton.innerHTML = "Feel Lucky ?";
  } else if (inputNumber == 31 && randomNum != inputNumber) {
    life--;
    result_Text.style.display = "none";
    easter.style.display = "block";
    console.log("wwwoooww");
  } else if (randomNum !== inputNumber) {
    life--;
    result_Text.style.display = "block";
    easter.style.display = "none";
    result_Text.innerHTML = "Nope";
  }

  if (life === -1) {
    guessButton.style.display = "none";
    tryButton.style.display = "block";
    result_Text.style.display = "block";
    easter.style.display = "none";
    result_Text.innerHTML = "Good Try";
  }

  console.log(randomNum);
  console.log(inputNumber);
  console.log("life: " + life);
}

guessButton.addEventListener("click", guessNumber);
