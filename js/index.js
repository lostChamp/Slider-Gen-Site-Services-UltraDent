let slides = document.querySelectorAll(".slider__item");
const sliderWrap = document.querySelector(".slider__wrap");
let closes = document.querySelectorAll(".close");

let currSlide = 0;

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