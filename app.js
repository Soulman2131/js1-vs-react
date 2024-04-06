const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const count = document.querySelector(".count");
const times = document.querySelector(".hello");

//
let advice;
let number = 0;

//
const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  advice = data.slip.advice;
  number += 1;
  h1.textContent = advice;
  count.textContent = number;
  times.textContent = number > 1 ? "times" : "time";
};

button.addEventListener("click", fetchAdvice);
