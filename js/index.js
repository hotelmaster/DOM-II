// grab the fun bus img in header
const funBusImg = document.querySelector("header.intro img");
// click (1) - rotate 180 deg counterclockwise over a period of 1.5s
funBusImg.addEventListener("click", (event) => {
    event.target.style.transform = "rotate(-180deg)";
    event.target.style.transition = "transform 1.5s";
})
// grab the h2 in the second header
const headerH2 = document.querySelector("header.intro h2")
// mouseover (2) - change background color, font color, and font size
headerH2.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "yellow";
    event.target.style.fontSize = "35px";
})
// mouseout (3) - change back the previous three changed properties
headerH2.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.fontSize = "32px";
})
// grab the paragraph in the second header
const headerParagraph = document.querySelector("header.intro p");
// wheel (4) - increase font size and change font color
headerParagraph.addEventListener("wheel", (event) => {
    event.target.style.fontSize = "30px";
    event.target.style.color = "red";
})
// grab first heading h1
const headerH1 = document.querySelector("header.main-navigation h1.logo-heading");
// mouseover - text to uppercase
headerH1.addEventListener("mouseover", (event) => {
    event.target.style.textTransform = "uppercase";
})
// mouseout - text to lowercase
headerH1.addEventListener("mouseout", (event) => {
    event.target.style.textTransform = "lowercase";
})
// grab home anchor
const homeAnchor = document.querySelector("header.main-navigation nav a");
// mouseover - use vertical translation, add border, change font size
homeAnchor.addEventListener("mouseover", (event) => {
    event.target.style.transform = "translateY(-10px)";
    event.target.style.border = "solid 2px black";
    event.target.style.fontSize = "25px";
})
// mouseout - make font color blue
homeAnchor.addEventListener("mouseout", (event) => {
    event.target.style.color = "blue";
})
//grab all h2 elements, store them in a nodelist
const sectionH2 = document.querySelectorAll("h2");
// mouseenter (5) - change font color to a dark red
sectionH2.forEach((el) => {el.addEventListener('mouseenter', (event) => {
    event.target.style.color = "#cc0000";})
})
// grab all p elements in the divs with text-content class (only in 1st and 2nd section)
const sectionText = document.querySelectorAll("div.text-content p");
// dblclick (6) - change background color and font color
sectionText.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = "skyblue";
    event.target.style.color = "white";})
})
// grab all images
const sqToRd = document.querySelectorAll("img");
// use forEach method to give them a border radius
sqToRd.forEach(el => {
    el.addEventListener('mouseenter', (event) => {
        event.target.style.borderRadius = "50%";
    })
});
// grab `pick your destination` paragraph
const endText = document.querySelector(".content-destination p");
// mousedown (7) - increase font size
endText.addEventListener('mousedown', (event) => {
    event.target.style.fontSize = "35px";
});
// mouseup (8) - decrease font size
endText.addEventListener('mouseup', (event) => {
    event.target.style.fontSize = "15px";
});
// grab 3 items found in the divs within last section with content-pick class
const cards = document.querySelectorAll(".destination");
// forEach method to rotate each item in the divs
cards.forEach(el => {
    el.addEventListener("click", event => {
        event.target.style.transform = "rotate(-360deg)";
        event.target.style.transition = "transform 2s";
    })
});
// grab the buttons at the bottom of the page
const cardBtns = document.querySelectorAll(".destination .btn");
// use forEach with the nodelist to change background color
cardBtns.forEach(el => {
    el.addEventListener("mouseenter", event => {
        event.target.style.backgroundColor = "firebrick";
    })
});
// grab middle section
const biggerSection1 = document.querySelector(".content-section");
// apply stopPropagation method to prevent bubbling beyond middle section
biggerSection1.addEventListener("wheel", (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "#ff944d";
})
// grab the body
const body = document.querySelector("body");
// on scroll / wheel background color will change, except in the middle section
// where stopProp was applied tp prevent bubbling
body.addEventListener("wheel", function(event) {
    event.target.style.backgroundColor = "#70db70";
})
// drag and drop adventure ****************************************************************

// grab the paragraph in middle section 
const dragEl = document.querySelector(".content-section.inverse-content .text-content p"); 
// grab the img inside the div nested in the middle section
const removeIt = document.querySelector(".content-section.inverse-content .img-content img");
// load (9) - remove the img stored in removeIt variable above, on page load
removeIt.addEventListener("load", function() {
    removeIt.remove();
});
// grab the div from which we removed the image - a paragraph will be dragged and dropped here
const dropBox = document.querySelector(".content-section.inverse-content .img-content");
// add a few css properties to the dropBox
dropBox.style.border = "solid black";
dropBox.textContent = "drag paragraph here";
dropBox.style.fontSize = "15px";
dropBox.style.fontStyle = "italic";
dropBox.style.lineHeight = "2.5";
dropBox.style.textAlign = "left";
dropBox.style.padding = "10px";
dropBox.style.margin = "10px";
// make the paragraph draggable (stored in dragEl)
dragEl.setAttribute("draggable", "true");
// the draggable paragraph must have this ID
dragEl.id = "dragtarget";
// the destination box must have this class
dropBox.className = "droptarget";

/* Events fired on the drag target */
// when the dragging starts, the data/text must be able to transfer
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  });
  
  /* Events fired on the drop target */
  // the destination must know something is being dragged, so prevent default behavior
  // and accept the incoming text
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  // using the droptarget class to recognize incoming data/text
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });
// grab the nav anchors
const theAnchors = document.querySelectorAll("header.main-navigation nav a");
// use pevent defualt to stop the anchors from refreshing the page when clicked
theAnchors.forEach(anchorTag => {
    anchorTag.addEventListener('click', event => {
        event.preventDefault();
    })
})
// no comment.