import model from "./model.js";
import { changeBgColor } from "./helper.js";
import modalWindowView from "./Views/modalWindowView.js";
import accordionView from "./Views/accordionView.js";
import tabView from "./Views/tabView.js";
import photoViewerView from "./Views/photoViewerView.js";
import sliderView from "./Views/sliderView.js";

const init = function () {
  tabView.showTabContent();
  modalWindowView.openWindow();
  modalWindowView.closeWindow();
  accordionView.accordionAct(changeBgColor);
  photoViewerView.viewImage();
  sliderView.slider();
};

init();
