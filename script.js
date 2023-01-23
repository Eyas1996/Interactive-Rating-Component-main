let btn = document.getElementById("btn");
let numbers = document.querySelectorAll(".numbers button");
let main = document.getElementById("main-card");
let result = document.querySelector(".result");

let ratingValue = "";
numbers.forEach(function (ele) {
  ele.onfocus = () => {
    ratingValue = ele.textContent;
    btn.style.backgroundColor = "hsl(0, 0%, 100%)";
    btn.style.color = "hsl(25deg 97% 53%)";
    ele.onblur = () => {
      btn.style.backgroundColor = "hsl(25deg 97% 53%)";
      btn.style.color = "hsl(0, 0%, 100%)";
    }
  }
  btn.onclick = function () {
    if (ratingValue !== "") {
      result.textContent = `You selected ${ratingValue} out of 5`;
      main.classList.add("z-index");
    } else {
      alert("Please choose rating!!");
    }
  };

});
