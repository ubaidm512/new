
const slider = document.querySelector(".slider")
const rightslider = document.querySelector(".right-slider")
const left_slider = document.querySelector(".left-slider")
const Up = document.querySelector(".upttun")
const Down = document.querySelector(".downbuttun")
const SlideLenth = rightslider.querySelectorAll("div").length

// console.log(SlideLenth)

let activeslide = 0

left_slider.style.top = `-${(SlideLenth - 1)* 100}vh`
Up.addEventListener("click", ()=> changeSlide("up"))
Down.addEventListener("click", ()=> changeSlide("down") )



const changeSlide = (direction) =>{
    const slideHeiht = slider.clientHeight
    // console.log(slideHeiht)
    if(direction === 'up'){
     activeslide++
     if(activeslide > SlideLenth - 1){
         activeslide = 0
     }
    }
    rightslider.style.transform = `translateY(-${activeslide * slideHeiht}px)`
    left_slider.style.transform = `translateY(${activeslide * slideHeiht}px)`
}
