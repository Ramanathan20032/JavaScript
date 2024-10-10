const input = document.getElementById("input");
const result = document.getElementById("result");
const score = document.getElementById("score");
const randomNumber = Math.floor(Math.random() * 10) + 1;
let totalScore = 10;

function check() {
  const enteredNumber = Number(input.value);
  if (enteredNumber == randomNumber) {
    // console.log("Right");
    result.style.color = "green"
    result.textContent = "Right";
    // alert("You Won... " + "and" + " ur Score : " + totalScore);
  } else {
    // console.log("wrong");
    totalScore = totalScore - 1;
    result.style.color = "red"
    result.textContent = "Wrong";
    score.textContent = "score : " + totalScore;
  }
}
