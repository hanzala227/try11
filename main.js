const testimonialCarousel = document.querySelector('#testimonialCarousel');
const testimonialCards = testimonialCarousel.querySelectorAll('.testimonial-card');
const testimonialDotsContainer = testimonialCarousel.querySelector('.testimonial-dots');
let testimonialCurrentIndex = 0;
let testimonialIntervalId = null;

// Create navigation dots
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('testimonial-dot');
    dot.addEventListener('click', () => {
        goToTestimonial(index);
        resetTestimonialInterval();
    });
    testimonialDotsContainer.appendChild(dot);
});

const testimonialDots = testimonialCarousel.querySelectorAll('.testimonial-dot');
const testimonialPrevButton = testimonialCarousel.querySelector('.testimonial-prev-button');
const testimonialNextButton = testimonialCarousel.querySelector('.testimonial-next-button');

testimonialPrevButton.addEventListener('click', () => {
    testimonialCurrentIndex = (testimonialCurrentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonials();
    resetTestimonialInterval();
});

testimonialNextButton.addEventListener('click', () => {
    nextTestimonial();
    resetTestimonialInterval();
});

function updateTestimonials() {
    testimonialCards.forEach((card, index) => {
        card.className = 'testimonial-card';
        if (index === testimonialCurrentIndex) {
            card.classList.add('testimonial-active');
        } else if (index === testimonialCurrentIndex - 1 || (testimonialCurrentIndex === 0 && index === testimonialCards.length - 1)) {
            card.classList.add('testimonial-prev');
        } else if (index === testimonialCurrentIndex + 1 || (testimonialCurrentIndex === testimonialCards.length - 1 && index === 0)) {
            card.classList.add('testimonial-next');
        } else if (index === testimonialCurrentIndex - 2 || (testimonialCurrentIndex <= 1 && index === testimonialCards.length + (testimonialCurrentIndex - 2))) {
            card.classList.add('testimonial-prev2');
        } else if (index === testimonialCurrentIndex + 2 || (testimonialCurrentIndex >= testimonialCards.length - 2 && index === (testimonialCurrentIndex + 2) - testimonialCards.length)) {
            card.classList.add('testimonial-next2');
        }
    });

    testimonialDots.forEach((dot, index) => {
        dot.classList.toggle('testimonial-dot-active', index === testimonialCurrentIndex);
    });
}

function goToTestimonial(index) {
    testimonialCurrentIndex = index;
    updateTestimonials();
}

function nextTestimonial() {
    testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialCards.length;
    updateTestimonials();
}

function startTestimonialInterval() {
    testimonialIntervalId = setInterval(nextTestimonial, 4000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialIntervalId);
    startTestimonialInterval();
}

// Pause on hover
testimonialCarousel.addEventListener('mouseenter', () => clearInterval(testimonialIntervalId));
testimonialCarousel.addEventListener('mouseleave', startTestimonialInterval);

// Initialize
updateTestimonials();
startTestimonialInterval();

var getintouch=document.querySelector(".getintouch")
getintouch.addEventListener("click",()=>{
gsap.to("#poppup",{
    scale:.5,
    duration:.7
})
})
flag=1
document.querySelector(".dark-mode").addEventListener("click",()=>{
    if(flag==1){
        document.documentElement.style.setProperty("--main-color",'white')
        document.documentElement.style.setProperty("--first-font-color",'black')
        document.documentElement.style.setProperty("--second-font-color",'white')
        document.getElementById("light").style.display="block";
        document.getElementById("dark").style.display="none";
        flag=0
    }
  else  {
        document.documentElement.style.setProperty("--main-color",'black')
        document.documentElement.style.setProperty("--first-font-color",'white')
        document.documentElement.style.setProperty("--second-font-color",'black')
        document.getElementById("light").style.display="none";
        document.getElementById("dark").style.display="block";
        flag=1
    }
})

var menu =document.getElementById("menu")
var close =document.getElementById("close")
var navtl= gsap.timeline();
navtl.to("nav ul",{
  left:"0%",
})
navtl.to("nav ul li",{
  opacity:1,
marginLeft:"-5%",
  stagger:.23,
})
navtl.to("#close",{
    opacity:1,
})
menu.addEventListener("click",()=>{
    navtl.play()

})
close.addEventListener("click",()=>{
    navtl.reverse()
})

navtl.pause()

var navanchor= document.querySelectorAll("nav ul li a");

navanchor.forEach(a => {
    a.addEventListener("click",()=>{
        document.querySelector("nav ul").querySelector(".active").classList.remove("active");
        a.classList.add("active");
        navtl.reverse()
    })
    
    
});
