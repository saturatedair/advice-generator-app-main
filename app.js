const advice = document.querySelector(".advice");
const adviceNumber = document.querySelector(".advice-number");
const dice = document.querySelector(".dice");

function randomAdvice() {
  dice.addEventListener("click", function () {
    const request = new XMLHttpRequest();

    request.open("GET", "https://api.adviceslip.com/advice");
    request.send();

    request.addEventListener("load", function () {
      const data = JSON.parse(this.responseText);
      const generatedID = data.slip.id;
      const generatedAdvice = data.slip.advice;
      advice.innerHTML = `" ${generatedAdvice} "`;
      adviceNumber.innerHTML = `Advice #${generatedID}`;
    });
  });
}

randomAdvice();
