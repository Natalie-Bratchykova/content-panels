import { changeBgColor } from "../helper.js";
class SliderView {
  slider = function () {
    let slides = jQuery.makeArray($(".slide"));
    let currentSlide = 0;
    let maxSlide = slides.length;
    let dots = jQuery.makeArray($(".slider__page"));
    console.log(slides);
    let goToSlide = function (slide) {
      slides.forEach((el, index) => {
        $(el).css("transform", `translateX(${100 * (index - slide * 2)}%)`);
        changeBgColor($(`#slide-${currentSlide + 1}`));
      });
    };

    let activeDots = (slideNum) => {
      dots.map((el) => {
        $(el).removeClass("active");
      });
      dots[slideNum].classList.add("active");
    };

    $("#leftBtn").on("click", function (e) {
      e.preventDefault();
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
        console.log("decreasing works\n Current slide: ");
        console.log(slides[currentSlide]);
      }
      goToSlide(currentSlide);
      activeDots(currentSlide);
    });

    $("#rightBtn").on("click", function (e) {
      e.preventDefault();
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
        console.log("Increment works\n Current slide: ");
        console.log(slides[currentSlide]);
      }
      goToSlide(currentSlide);
      activeDots(currentSlide);
    });
  };
}

export default new SliderView();
