export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const changeBgColor = function (targetEl) {
  let color = targetEl.attr("data-bg");
  $(":root").css("--accordion-control-bg", `var(--${color}-theme-color1)`);
  $(":root").css("--accordion-bg", `var(--${color}-theme-color2)`);
};
