const correctAnswers = ["B", "B", "A", "B"];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const scorePercent = document.querySelector("#score-percent");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  scorePercent.textContent = `${score}%`;

  result.classList.remove("d-none");
});
