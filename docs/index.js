import { testimonial } from "./data.js";

let docTestimonial = document.querySelector(".testimonials-continer");

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
