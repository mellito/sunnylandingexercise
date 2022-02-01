import { testimonial } from "./data.js";

let show = true;

let docTestimonial = document.querySelector(".testimonials-continer");
let menulogo = document.querySelector(".menulogo");

testimonial.map((testi) => {
  const { Image, testimonial, name, profession } = testi;
  docTestimonial.innerHTML += `
  <div>
    <img src="${Image}" alt="">
  <p>${testimonial}</p>
  <p>${name}</p>
  <p>${profession}</p>
  </div>

  `;
});

menulogo.addEventListener("click", () => {
  if (show) {
    document.querySelector(".header-menu").style.display = "block";
    show = false;
  } else if (!show) {
    document.querySelector(".header-menu").style.display = "none";
    show = true;
  }
});
