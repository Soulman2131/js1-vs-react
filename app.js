const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const count = document.querySelector(".count");

//
let advice;
let number = 0;

//
const fetchProverb = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  advice = data.slip.advice;
  number += 1;
  h1.textContent = advice;
  count.textContent = number;
};

button.addEventListener("click", fetchProverb);
