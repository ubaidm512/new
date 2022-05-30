const loadtext = document.querySelector(".text")
const bg = document.querySelector(".bg")


let load = 0
let int = setInterval(bluring, 30)

function bluring(){
    load++
    if( load > 99){
        clearInterval(int)
    }
    // if(load === 100){
    //     loadtext.innerHTML = ""
    // }
    
    loadtext.innerHTML = `${load}%`
    loadtext.style.opacity = scale(load,0,100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
    // console.log(load)
    
}


// const loadtext = document.querySelector(".text")
// const bg = document.querySelector(".bg")


// let load = 100
// let int = setInterval(bluring,30)

// function bluring(){
//     load--
//     if( load < 1){
//         clearInterval(int)
//     }
//     // if(load === 100){
//     //     loadtext.innerHTML = ""
//     // }
    
//     loadtext.innerHTML = `${load}%`
//     loadtext.style.opacity = scale(load,100,0,1,0)
//     bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
//     // console.log(load)
    
// }




//const scale = (num, in_min, in_max, out_min, out_max) => {
   // return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  //}
// bluring()



//const slider = document.querySelector(".slider")
//const rightslider = document.querySelector(".right-slider")
//const left_slider = document.querySelector(".left-slider")
//const Up = document.querySelector(".upttun")
//const Down = document.querySelector(".downbuttun")
//const SlideLenth = rightslider.querySelectorAll("div").length

// console.log(SlideLenth)

//let activeslide = 0

////left_slider.style.top = `-${(SlideLenth - 1)* 100}vh`
//Up.addEventListener("click", ()=> changeSlide("up"))
//Down.addEventListener("click", ()=> changeSlide("down") )



//const changeSlide = (direction) =>{
    //const slideHeiht = slider.clientHeight
    //console.log(slideHeiht)
//}
 //



 Usename 
 E-mail
 Password
