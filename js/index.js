// Your code goes here
// const catImage = document.querySelector(".card-img-top");
// catImage.addEventListener("mouseenter", () => {
//   catImage.style.transform = "scale(1.2)";
//   catImage.style.transition = "all 0.3s"
// })
// catImage.addEventListener("mouseleave", () => {
//  catImage.style.transform = "scale(1.0)";
//  catImage.style.transition = "all 0.3s"
// })

// document.querySelectorAll(".card-title").forEach(el => {
//   el.addEventListener("click", () => {
//     el.style.color= "#e62739";
//   })
// })

// -----------load -------------

window.addEventListener("load", () => {
    let welcomeText = document.createElement("h1");
    welcomeText.textContent = "Welcome to Fun Bus";

    document.querySelector("header").prepend(welcomeText);
    window.setTimeout(function(){welcomeText.style.display = "none"}, 2000);
})


// -----------mouse-enter----------

let header = document.querySelector("header");

header.addEventListener("mouseenter", () => {
    header.style.backgroundColor = "cyan";
})

header.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "white";
   })

// ----------------
