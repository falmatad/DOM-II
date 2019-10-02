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
    welcomeText.textContent = "Welcome to";
    document.querySelector("header").prepend(welcomeText);
    window.setTimeout(function(){welcomeText.style.display = "none"}, 2000);
})


// -----------mouse-enter----------

let header = document.querySelector("header");

header.addEventListener("mouseenter", () => {
    header.style.backgroundColor = "gray";
})

// ------------double-click-------
let changeTopImg = document.querySelector("header img");
    changeTopImg.addEventListener("dblclick", (event) => {
        changeTopImg.style.display = "none";
    })

// -------------click---------------
let imgClick = document.querySelectorAll(".container img");
    imgClick.forEach(function (element){
        console.log(element);
        element.addEventListener("click", () => {
            element.src= "http://funbus.com/wp-content/uploads/2014/09/coach2.1.jpg";
    })
});

// -------------scroll--------------

let midColor = document.querySelectorAll(".container section");

    midColor.forEach(function(element) {
        console.log(element);
        window.addEventListener ("scroll", () => {
            element.style.background = "cyan";
        })
    })

// --------------re-size------------
let containerImg = document.querySelectorAll(".container img ");
containerImg.forEach(function(element) {
    window.addEventListener ("resize", () => {
        element.src = "https://www.maropost.com/wp-content/uploads/2019/06/The-Welcome-Email_06042019-01-1024x570.jpg";
    })
})

// ------------key-Down---------
const zoom = document.querySelector(".content-destination");
zoom.addEventListener("wheel", () => {
    zoom.style.transform = "scale(1.2)";
    zoom.style.transition = "all 0.3s"

})
// -------------drag------------

let draggedImg = document.querySelector(".intro img");
draggedImg.addEventListener("drag", () => {
    draggedImg.style.transform = "scale(1.2)";
    draggedImg.style.transition = "all 0.3s"
})
// -----------mouse-over--------

let mouseOverImg = document.querySelectorAll(".content-section img");

mouseOverImg.forEach(function(element) {
    element.addEventListener ("mouseover", () => {
        element.style.transform = "scale(1.2)";
        element.style.transition = "all 0.3s"
    })
})

// 
let homeArea = document.querySelector(".home");
homeArea.addEventListener("click", () => {
    homeArea.style.backgroundColor ="purple";
});
// -----------------mouse-leave----------------
let textStuff = document.querySelector(".text-content");
textStuff.addEventListener("mouseleave", (event) => {
    textStuff.style.backgroundColor="gray";
  event.stopPropagation();
})


// --------------stop-default---------------
let stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
  console.log("stopped link");
  
  event.preventDefault();
})