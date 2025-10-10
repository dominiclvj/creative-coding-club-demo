const button = document.querySelector(".button")
const bg = document.querySelector(".bg")

//rollover the hover circle quickly
//notice the inner circle stops working properly
//try to fix it in the code below!

button.addEventListener("mouseenter", function(){
	gsap.from(bg, {scale:0, duration:1, ease:"circ"})
})