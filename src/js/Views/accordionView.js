// import { changeBgColor } from "../helper.js";
class accordionView {
  accordionElement = $(".accordion");
  static accordionControlClass = ".accordion__control";
  static accordionPanelClass = ".accordion__panel";
  static accordionArrowClass = ".accordion__arrow";

  accordionAct(handler) {
    this.accordionElement.on(
      "click",
      accordionView.accordionControlClass,
      function (e) {
        e.preventDefault();
        console.log($(this));
        $(this)
          .next(accordionView.accordionPanelClass)
          .not(":animated")
          .slideToggle();
        $(this)
          .find(accordionView.accordionArrowClass)
          .toggleClass("arrow-rotate");
        //changeBgColor($(this));
        handler($(this));
      }
    );
  }
}

export default new accordionView();
