let btn = document.getElementById("btn");
let numbers = document.querySelectorAll(".numbers span");
let main = document.getElementById("main-card");
let result = document.querySelector(".result");

let ratingValue = "";
numbers.forEach(function (ele) {
  ele.onclick = () => {
    ele.style.backgroundColor = "hsl(25deg 97% 53%)";
    ele.style.color = "hsl(0, 0%, 100%)";
    btn.style.backgroundColor = "hsl(0, 0%, 100%)";
    btn.style.color = "hsl(25deg 97% 53%)";

    ratingValue = ele.textContent;

    btn.onclick = function () {
      if (ratingValue !== "") {
        result.textContent = `You selected ${ratingValue} out of 5`;
        console.log(ratingValue);
      }
      main.classList.add("z-index");
    };
  };
});
