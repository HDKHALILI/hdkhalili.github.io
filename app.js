// Buttons
const front_end_btn = document.querySelector(".front-end-btn");
const back_end_btn = document.querySelector(".back-end-btn");
const design_btn = document.querySelector(".design-btn");

// divs to be effected
const front_end = document.querySelector(".front-end");
const back_end = document.querySelector(".back-end");
const design = document.querySelector(".design");

front_end_btn.addEventListener('click', function() {
  front_end.style.display = 'grid';
  back_end.style.display = 'none'
  design.style.display = 'none'
  front_end_btn.classList.add("selected");
  back_end_btn.classList.remove("selected");
  design_btn.classList.remove("selected");
});

back_end_btn.addEventListener('click', function () {
  back_end.style.display = 'grid'
  front_end.style.display = 'none';
  design.style.display = 'none'

  back_end_btn.classList.add("selected");
  front_end_btn.classList.remove("selected");
  design_btn.classList.remove("selected");
});

design_btn.addEventListener('click', function () {
  design.style.display = 'grid'
  front_end.style.display = 'none';
  back_end.style.display = 'none'

  design_btn.classList.add("selected");
  front_end_btn.classList.remove("selected");
  back_end_btn.classList.remove("selected");
});