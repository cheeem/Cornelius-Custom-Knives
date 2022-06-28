var timer = setInterval(nextImage, 4000);
var imgURLs = ["./img/knife5.jpg", "./img/knife7.jpg", "./img/knife11.jpg", "./img/knife12-4.jpg"];
var idName = "slideimg";
var i = 0;
var img;

function nextImage() {
  //change to the first image and remove showMe class (opacity: 0)
  img = document.querySelector("#" + idName + (i%2));
  img.style.backgroundImage = `url(${imgURLs[i]})`;
  removeClass(img, "showMe");
  //increment to the next image
  i++;
  if(i == imgURLs.length) i = 0;
  //change to the second image and add showMe class (opacity: 1)
  img = document.querySelector("#" + idName + (i%2));
  img.style.backgroundImage = `url(${imgURLs[i]})`;
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

