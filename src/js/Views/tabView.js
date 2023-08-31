import { changeBgColor } from "../helper.js";
class tabView {
  tabEl = $(".tab__list");

  showTabContent() {
    this.tabEl.each(function () {
      let $this = $(this);
      let tabActive = $this.find("li.active");
      let tabLink = tabActive.find("a");
      let tabPanel = $(tabLink.attr("href"));

      $this.on("click", ".tab__control", function (e) {
        let $link = $(this);
        let id = this.hash;

        if (id && !$link.is(".active")) {
          tabPanel.removeClass("active");
          tabActive.removeClass("active");

          tabPanel = $(id).addClass("active");
          tabActive = $link.parent().addClass("active");
        }
        if (tabPanel.is("[data-bg]")) {
          changeBgColor(tabPanel);
        }
      });
    });
  }
}

export default new tabView();
