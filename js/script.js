$(function () {
  $('.vertical-slider').slick({
    vertical: true,
    arrows: false,
    dots: true,
  });
});

$(function () {
  $('.horisontal-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    dots: true,
  })
})


const scrollButton = document.querySelector('.scroll');
const scrollSection = document.querySelector('.scroll-section');

function smoothScrollToSection() {
  scrollSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
};

scrollButton.addEventListener('click', () => {
  setTimeout(smoothScrollToSection, 1000);
});














