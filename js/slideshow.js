let numSlides = 1;
showSlides(numSlides);
console.log("printing");

function plusSlides(n) {
    numSlides += n;
    showSlides(numSlides);
}

function currentSlide(n) {
    numSlides = n;
    showSlides(numSlides);
}

function showSlides(n) {
    slides = document.querySelectorAll('.slideshow-image'); 
    console.log(slides);
    dots = document.querySelectorAll('.slideshow-image-bottom-image');

    // document.querySelector('.image-slide').innerHTML = test;
    if (n > slides.length) {numSlides=1}
    if (n < 1) {numSlides=4}

    for (i=0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }

    for (i=0; i < dots.length; ++i) {
        dots[i].className = dots[i].className.replace(" active", "")
        dots[i].classList.remove("active");
    }

    slides[numSlides - 1].style.display = "block";
    console.log(numSlides);
    dots[numSlides - 1].className += " active";
}

// showSlides();