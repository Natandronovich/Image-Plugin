function  slidesPlugin(activeSlide = 2){
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active')
    
    //проходим циклом по массиву слайдов и получаем каждый слайд отдельно
    for(const slide of slides){
        slide.addEventListener('click', () =>{
            clearActiveClasses()
    
            slide.classList.add('active')
        })
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(3)