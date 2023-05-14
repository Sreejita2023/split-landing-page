const left=document.querySelector('.left')
const right=document.querySelector('.right')
const container=document.querySelector('.container')

left.addEventListener("mouseenter",()=>container.classList.toggle("hover-left"))
left.addEventListener("mouseleaver",()=>container.classList.toggle("hover-left"))

right.addEventListener("mouseenter",()=>container.classList.toggle("hover-right"))
right.addEventListener("mouseleaver",()=>container.classList.toggle("hover-right"))