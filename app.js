const colors = ["red", "green", "rgb(66, 135, 245)", "#da42f5"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
