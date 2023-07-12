// First
var Image1 = document.querySelector(".image1");
var Image2 = document.querySelector(".image2");
var Image3 = document.querySelector(".image3");
// Second
var Image4 = document.querySelector(".image4");
var Image5 = document.querySelector(".image5");
var Image6 = document.querySelector(".image6");
// Third
var Image7 = document.querySelector(".image7");
var Image8 = document.querySelector(".image8");
var Image9 = document.querySelector(".image9");
// Fourth
var Image10 = document.querySelector(".image10");
var Image11 = document.querySelector(".image11");
var Image12 = document.querySelector(".image12");

// First
Image1.addEventListener("mouseover", ()=>{
    document.querySelector(".first").src="images/image 7.png";
})
Image2.addEventListener("mouseover", ()=>{
    document.querySelector(".first").src="images/image 4.png";
})
Image3.addEventListener("mouseover", ()=>{
    document.querySelector(".first").src="images/image 5.png";
})
Image1.addEventListener("mouseout", ()=>{
    document.querySelector(".first").src="images/image 6.png";
})
Image2.addEventListener("mouseout", ()=>{
    document.querySelector(".first").src="images/image 6.png";
})
Image3.addEventListener("mouseout", ()=>{
    document.querySelector(".first").src="images/image 6.png";
})

// Second
Image4.addEventListener("mouseover", ()=>{
    document.querySelector(".second").src="images/image 7.png";
})
Image5.addEventListener("mouseover", ()=>{
    document.querySelector(".second").src="images/image 4.png";
})
Image6.addEventListener("mouseover", ()=>{
    document.querySelector(".second").src="images/image 5.png";
})
Image4.addEventListener("mouseout", ()=>{
    document.querySelector(".second").src="images/image 6.png";
})
Image5.addEventListener("mouseout", ()=>{
    document.querySelector(".second").src="images/image 6.png";
})
Image6.addEventListener("mouseout", ()=>{
    document.querySelector(".second").src="images/image 6.png";
})

// Third
Image7.addEventListener("mouseover", ()=>{
    document.querySelector(".third").src="images/image 7.png";
})
Image8.addEventListener("mouseover", ()=>{
    document.querySelector(".third").src="images/image 4.png";
})
Image9.addEventListener("mouseover", ()=>{
    document.querySelector(".third").src="images/image 5.png";
})
Image7.addEventListener("mouseout", ()=>{
    document.querySelector(".third").src="images/image 6.png";
})
Image8.addEventListener("mouseout", ()=>{
    document.querySelector(".third").src="images/image 6.png";
})
Image9.addEventListener("mouseout", ()=>{
    document.querySelector(".third").src="images/image 6.png";
})
// Fourth
Image10.addEventListener("mouseover", ()=>{
    document.querySelector(".fourth").src="images/image 7.png";
})
Image11.addEventListener("mouseover", ()=>{
    document.querySelector(".fourth").src="images/image 4.png";
})
Image12.addEventListener("mouseover", ()=>{
    document.querySelector(".fourth").src="images/image 5.png";
})
Image10.addEventListener("mouseout", ()=>{
    document.querySelector(".fourth").src="images/image 7.png";
})
Image11.addEventListener("mouseout", ()=>{
    document.querySelector(".fourth").src="images/image 7.png";
})
Image12.addEventListener("mouseout", ()=>{
    document.querySelector(".fourth").src="images/image 7.png";
})