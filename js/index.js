let slides = document.querySelectorAll(".slider__item");
const sliderWrap = document.querySelector(".slider__wrap");
let closes = document.querySelectorAll(".close");

let currSlide = 0;
let zIndexCounter = 0;
let leftCounter = 240;
let maxLeftCounter = closes.length * 240;
let maxZCounter = -closes.length;

function firstRightMoveTest() {
    let zIndexCounter = 0;
    let leftCounter = 240;
    for(let i = 0; i < closes.length; i++) {
        closes[i].style.zIndex = `${zIndexCounter}`;
        closes[i].style.left = `${leftCounter}px`;
        zIndexCounter--;
        leftCounter += 240;
    }
}

firstRightMoveTest();

function move() {
    closes = document.querySelectorAll(".close");
    let zIndexCounter = -1;
    let leftCounter = 240;
    for(let i = 0; i < closes.length; i++) {
        closes[i].style.zIndex = `${zIndexCounter}`;
        closes[i].style.left = `${leftCounter}px`
        zIndexCounter--;
        leftCounter += 240;
    }
}

function addAndRemoveSlides(slide1, slide2, flag = false) {
    slide1.classList.add("open");
    slide1.classList.remove("close");
    slide2.classList.remove("open");
    slide2.classList.add("close");
    slide1.children[0].children[0].style.display = "block";
    slide1.children[0].children[1].style.display = "none";
    slide1.style.left = "0";
    slide1.style.zIndex = "0";
    slide2.children[0].children[0].style.display = "none";
    slide2.children[0].children[1].style.display = "flex";
    if(flag) {
        return slide2
    }
    return slide1;
}

const leftArrow = document.querySelector(".left__arrow");
const rightArrow = document.querySelector(".right__arrow");

leftArrow.addEventListener("click", (e) => {
    const slideForStart = slides[slides.length - 1].cloneNode(true);
    const firstSlide = slides[0];
    slides[slides.length - 1].remove();
    sliderWrap.prepend(addAndRemoveSlides(slideForStart, firstSlide));
    slides = document.querySelectorAll(".slider__item");
    if(currSlide === 0) {
        slides = document.querySelectorAll(".slider__item");
        currSlide = slides.length - 1;
    }else {
        currSlide--;
    }
    move();
});

rightArrow.addEventListener("click", () => {
    const slideForEnd = slides[0].cloneNode(true);
    const lastSlide = slides[1];
    slides[0].remove();
    sliderWrap.append(addAndRemoveSlides(lastSlide, slideForEnd, true));
    slides = document.querySelectorAll(".slider__item");
    if(currSlide === closes.length) {
        slides = document.querySelectorAll(".slider__item");
        currSlide = 0
    }else {
        currSlide++;
    }
    move();
})



// rightArrow.addEventListener("click", (e) => {
//     const slideForEnd = slides[currSlide].cloneNode(true);
//     slideForEnd.classList.remove("open");
//     slideForEnd.classList.add("close");
//     slideForEnd.style.left = `${maxLeftCounter}px`;
//     slideForEnd.style.zIndex = `${maxZCounter}`;
//     slideForEnd.children[0].children[0].style.display = "none";
//     slideForEnd.children[0].children[1].style.display = "flex";
//     sliderWrap.append(slideForEnd);
//     slides[currSlide].classList.remove("open");
//     slides[currSlide].style.opacity = "0";
//     setTimeout(() => {
//         slides[currSlide].remove();
//         if(currSlide === closes.length) {
//             slides = document.querySelectorAll(".slider__item");
//             currSlide = 0
//         }else {
//             currSlide++;
//         }
//
//
//         slides[currSlide].classList.add("open");
//         slides[currSlide].classList.remove("close");
//         rightMoveTest();
//
//         const servicesCardCurrSlide = slides[currSlide].children;
//         const innerCardCurrSlide = servicesCardCurrSlide[0];
//
//         innerCardCurrSlide.querySelector(".info__card").style.display = "block";
//         innerCardCurrSlide.querySelector(".close__info__card").style.display = "none";
//
//     }, 100);
// });