import { changeBgColor } from "../helper.js";
class photoViewerView {
  thumbnails = $("#thumbnails");

  viewImage() {
    this.thumbnails.on("click", ".thumb", function (e) {
      e.preventDefault();
      let $currentImg = $("#viewImage");
      let $newImg = $(this);
      $(".thumb").each(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        }
      });

      $newImg.addClass("active");
      $currentImg.attr({
        src: $newImg.attr("href"),
        alt: $newImg.attr("title"),
      });
      changeBgColor($newImg);
    });
  }
}

export default new photoViewerView();
