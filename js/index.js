// grab the fun bus img in header
const funBusImg = document.querySelector("header.intro img");
// click event - rotate 180 deg counterclockwise over a period of 1.5s
funBusImg.addEventListener("click", (event) => {
    event.target.style.transform = "rotate(-180deg)";
    event.target.style.transition = "transform 1.5s";
})
// grab the h2 in the second header
const headerH2 = document.querySelector("header.intro h2")
// use mouseover
headerH2.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "yellow";
    event.target.style.fontSize = "35px";
})
headerH2.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.fontSize = "32px";
})
// grab the header container
const headerParagraph = document.querySelector("header.intro p");
// use wheel event to increase font size and change color
headerParagraph.addEventListener("wheel", (event) => {
    event.target.style.fontSize = "30px";
    event.target.style.color = "red";
})
// grab first heading h1
const headerH1 = document.querySelector("header.main-navigation h1.logo-heading");
// use load event to insert an image
headerH1.addEventListener("mouseover", (event) => {
    event.target.style.textTransform = "uppercase";
})
headerH1.addEventListener("mouseout", (event) => {
    event.target.style.textTransform = "lowercase";
})
// grab anchors
const homeAnchor = document.querySelector("header.main-navigation nav a");
// use transformations
homeAnchor.addEventListener("mouseover", (event) => {
    event.target.style.transform = "translateY(-10px)";
    event.target.style.border = "solid 2px black";
    event.target.style.fontSize = "25px";
})
homeAnchor.addEventListener("mouseout", (event) => {
    event.target.style.color = "blue";
})
const sectionH2 = document.querySelectorAll("h2");

sectionH2.forEach((el) => {el.addEventListener('mouseenter', (event) => {
    event.target.style.color = "#cc0000";})
})

const sectionText = document.querySelectorAll("div.text-content p");

sectionText.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = "skyblue";
    event.target.style.color = "white";})
})

const sqToRd = document.querySelectorAll("img");

sqToRd.forEach(el => {
    el.addEventListener('mouseenter', (event) => {
        event.target.style.borderRadius = "50%";
    })
});

const endText = document.querySelector(".content-destination p");

endText.addEventListener('click', (event) => {
    event.target.style.fontSize = "35px";
    event.target.style.transform = "translateX(20px)";
});

endText.addEventListener('click', (event) => {
    event.target.style.fontSize = "25px";
    event.target.style.transform = "translateX(-10px)";
});

const cards = document.querySelectorAll(".destination");

cards.forEach(el => {
    el.addEventListener("click", event => {
        event.target.style.transform = "rotate(-360deg)";
        event.target.style.transition = "transform 2s";
    })
});

const cardBtns = document.querySelectorAll(".destination .btn");

cardBtns.forEach(el => {
    el.addEventListener("mouseenter", event => {
        event.target.style.backgroundColor = "firebrick";
    })
});

const biggerSection1 = document.querySelector(".content-section");

biggerSection1.addEventListener("wheel", (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "#ff944d";
})

const body = document.querySelector("body");

body.addEventListener("wheel", function(event) {
    event.target.style.backgroundColor = "#70db70";
})
// drag and drop adventure
const dragEl = document.querySelector(".content-section.inverse-content .text-content p");

const removeIt = document.querySelector(".content-section.inverse-content .img-content img");

removeIt.addEventListener("load", function() {
    removeIt.remove();
});

const dropBox = document.querySelector(".content-section.inverse-content .img-content");

dropBox.style.border = "solid";
dropBox.textContent = "drag paragraph here";
dropBox.style.fontSize = "18px";
dropBox.style.textAlign = "center";

dragEl.setAttribute("draggable", "true");

dragEl.id = "dragtarget";

dropBox.className = "droptarget";

/* Events fired on the drag target */
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  });
  
  /* Events fired on the drop target */
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });