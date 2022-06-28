var testimonyTemplateArray = [
  {
  name: "Jackson Werner",
  imgURL: "./img/jackson.jpg",
  body: "I love this knife so much its so awesome and I absolutely love it because its just the best thing to ever enter my kitchen it's so amazing I love this product PLEASE buy this product I love it and I love it so much I'm going to talk about it for an entire paragraph and talk more and more and more and more and more!! I just love this knife you should definitely buy it for sure you should for sure purchase this product it is THE BEST I love it."
  },
  {
    name: "KnifeLover28",
    imgURL: "./img/knife1.png",
    body: "Cool Knife 10/10"
  }
]
var container = document.querySelector("#customer-testimonies");
var template = document.querySelector("template");

testimonyTemplateArray.forEach(testimonyData => {
  var item = template.content.cloneNode(true);
  var customerImg = item.querySelector("#customer-img");
  var customerName = item.querySelector("#customer-name");
  var testimonyBody = item.querySelector("#testimony-body");
  //create customer testimony
  customerImg.style.backgroundImage = `url(${testimonyData.imgURL})`;
  customerName.innerText = testimonyData.name;
  testimonyBody.innerText = testimonyData.body;
  container.append(item);
  //adjust height to overflow testimonyBody
  var customerProfile = document.querySelector("#customer-profile");
  console.log(customerProfile.scrollHeight);
  testimonyBody.style.height = `${customerProfile.offsetHeight}px`
  console.log(customerProfile.offsetHeight);
});
