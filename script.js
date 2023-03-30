// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Hire me button
function contactMe() {
  // display an alert message
  alert("Thank you for your interest! Please fill out the contact form at the bottom to get in touch.");

  // redirect to the contact section of your website
  window.location.href = "#contact";
}


//form Validation
const form = document.querySelector('#form');
const button = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // form submission code here

  // clear input fields
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  });

  // clear textarea
  const textarea = document.querySelector('textarea');
  textarea.value = '';

  // display success message
  const message = document.createElement('h2');
  message.textContent = "Message Sent 🎉. Thank you!";
  form.appendChild(message);

  // reset button after 3 seconds
  setTimeout(() => {
    button.innerHTML = 'Send Now';
    message.remove();
  }, 3000);
});


// send button clear ptomt on please input ....


// flakes 

window.onload = function() {
const flakes = 30;
for (let i = 0; i < flakes; i++) {
  const flake = document.createElement('div');
  flake.classList.add('snowflake');
  flake.innerHTML = '❄';
  flake.style.top = `${Math.random() * 100}%`;
  flake.style.left = `${Math.random() * 100}%`;
  flake.style.animationDelay = `${Math.random() * 2.5}s`;
  document.body.appendChild(flake);
}
}