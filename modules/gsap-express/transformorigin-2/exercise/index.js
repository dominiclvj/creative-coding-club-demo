const demo = document.querySelector(".demo")
const box = document.querySelector(".box")
const dot = document.querySelector(".dot")
const nav = document.querySelector(".nav")
const output = document.querySelector(".output")
let property = document.querySelector('input[name="property"]:checked').value
let transformOrigin = "100px 100px"
let localX = 100;
let localY = 100;
gsap.set(dot, {x:window.innerWidth/2, y:window.innerHeight/2})

document.addEventListener("click", function(e) {
  localX = e.clientX - box.offsetLeft - 2
  localY = e.clientY - box.offsetTop - 2
  console.log(localX, localY)
  gsap.set(dot, {x:e.clientX, y:e.clientY})
  transformOrigin = `${localX}px ${localY}px`
  
  
  
  output.innerHTML = `${localX}<span>px</span> ${localY}<span>px<span>`
  console.log(property)
  animateBox()
  

})

function animateBox() {
  gsap.fromTo(box, {rotation: 0,
              scale:1}, 

          {ease:"powe1.inOut", 
           rotation: property == "rotation" ? 360 : 0, 
           scale: (property == "scale") ? 0 : 1,
           repeat:property == "scale" ? 1 : 0,
           yoyo:true,
           duration:property == "scale" ? 0.6 : 1, 
           transformOrigin: transformOrigin})
}



nav.addEventListener("click", (e) => {
  e.stopPropagation();
})




const radios = document.getElementsByName('property');
      for (var i = 0, length = radios.length; i < length; i++) {
        radios[i].addEventListener('change', updateProperty);
      }

function updateProperty() {
  property = document.querySelector('input[name="property"]:checked').value
  animateBox()
}

window.addEventListener("resize", ()=> {
  gsap.set(dot, {x:localX + box.offsetLeft, y:localY + box.offsetTop})
})