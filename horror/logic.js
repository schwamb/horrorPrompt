var img1 = "images/1.jpg"
var img2 = "images/2.jpg"
var img3 = "images/3.jpg"
var img4 = "images/4.jpg"
var img5 = "images/5.jpg"
var img6 = "images/6.jpg"
var img7 = "images/7.jpg"
var img8 = "images/8.jpg"
var img9 = "images/9.jpg"
var img10 = "images/10.jpg"
var img11= "images/11.jpg"
var img12 = "images/12.jpg"
var img13 = "images/13.jpg"
var img14 = "images/14.jpg"
var img15 = "images/15.jpg"
var number = ""
var text = ""

images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]

// console.log(images)

d3.select(generate).on("click", 
function randomImage() {
    number = Math.floor(Math.random() * 15)
    d3.select("#question h2")
text = ('<img src = "'+images[number]+'">')
console.log(number)
console.log(text)
d3.select("#question h2")
// .append(text)
.html(text)
}
)
