/*
const headerImg = document.querySelector("#header-img");
let i = 0;
let imgURLs = ["./img/knife4-2.png", "./img/knife4.jpeg", "./img/knife1-1.png"];

setInterval(function() {
  if(i == imgURLs.length) i = 0;
  console.log(imgURLs[i]);
  headerImg.style.backgroundImage = "url(\"" +imgURLs[i]; + "\")"
  i++;
}, 3000);
*/

var timer = setInterval(nextImage, 4000);
var i = 0;
var img;
let imgURLs = ["./img/knife4.png", "./img/knife5.jpg", "./img/knife7.jpg", "./img/knife11.jpg"];

function nextImage() {
    // remove showMe class from current image
    img = document.querySelector("#slideimg" + i);
    img.style.backgroundImage = "url(\"" +imgURLs[i]; + "\")";
    removeClass(img, "showMe");
    
    // compute next image
    i++;
    if(i == imgURLs.length) i = 0;

    // add showMe class to next image
    img = document.querySelector("#slideimg" + i);
    img.style.backgroundImage = "url(\"" +imgURLs[i]; + "\")";
    addClass(img, "showMe");
}

function addClass(elem, name) {
    var c = elem.className;
    if (c) c += " ";  // if not blank, add a space separator
    c += name;
    elem.className = c;
}

function removeClass(elem, name) {
    var c = elem.className;
    elem.className = c.replace(name, "").replace(/   /g, " ").replace(/^ | $/g, "");  // remove name and extra blanks
}
