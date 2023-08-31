import { changeBgColor, getRandomInt } from "../helper.js";
import model from "../model.js";
class modalWindowView {
  static windowElement = $(".modal-window");
  static windowTitle = $(".modal-window__title");
  static windowContent = $(".modal-window__text");
  windowOpenBtn = $("#openModel");
  windowCloseBtn = $(".closeButton");
  static windowOverlay = $(".overlay");

  openWindow() {
    this.windowOpenBtn.on("click", function (e) {
      e.preventDefault();
      modalWindowView.windowTitle.text(
        model.modalObj.title[getRandomInt(model.modalObj.title.length)]
      );

      let modalContent =
        model.modalObj.content[getRandomInt(model.modalObj.content.length)];
      modalWindowView.windowContent.attr("data-bg", modalContent.dataBg);
      modalWindowView.windowContent.html(`<div class = "modal-window__img">
  <img src="${modalContent.imgPath}" alt="${modalContent.title}"></div>
  <div class = "modal-window__name">${modalContent.title}</div>`);
      changeBgColor(modalWindowView.windowContent);
      [modalWindowView.windowOverlay, modalWindowView.windowElement].forEach(
        (el) => {
          el.removeClass("hiden");
        }
      );
    });
  }

  closeWindow() {
    this.windowCloseBtn.on("click", function (e) {
      e.preventDefault();
      //console.log(modalWindowView.windowOverlay, modalWindowView.windowElement);
      [modalWindowView.windowOverlay, modalWindowView.windowElement].forEach(
        (el) => {
          el.addClass("hiden");
        }
      );
    });
  }
}

export default new modalWindowView();
