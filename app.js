// Buttons
const front_end_btn = document.querySelector(".front-end-btn");
const back_end_btn = document.querySelector(".back-end-btn");
const design_btn = document.querySelector(".design-btn");
const html = document.querySelector("html");
// divs to be effected
const front_end = document.querySelector(".front-end");
const back_end = document.querySelector(".back-end");
const design = document.querySelector(".design");


function makeVisible() {
  front_end.classList.remove("hidden");
}

front_end_btn.addEventListener('click', function() {
  front_end.classList.remove('hidden');
  back_end.classList.add('hidden');
  // back_end.classList.add('make-visible');
  design.classList.add('hidden');
  
  front_end_btn.classList.add("selected");
  back_end_btn.classList.remove("selected");
  design_btn.classList.remove("selected");
});

back_end_btn.addEventListener('click', function () {
  back_end.classList.remove('hidden');
  front_end.classList.remove('make-visible');
  front_end.classList.add('hidden');
  design.classList.add('hidden');  

  back_end_btn.classList.add("selected");
  front_end_btn.classList.remove("selected");
  design_btn.classList.remove("selected");
});

design_btn.addEventListener('click', function () {
  design.classList.remove('hidden');   
  back_end.classList.add('hidden');
  front_end.classList.add('hidden');
  front_end.classList.remove('make-visible');


  design_btn.classList.add("selected");
  front_end_btn.classList.remove("selected");
  back_end_btn.classList.remove("selected");
});