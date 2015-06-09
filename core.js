
function css_center(object, relative_object) {
  if (typeof relative_object === "undefined" || relative_object === null) {
    relative_object = object;
  }
  object.css({
    "margin-left": -($(relative_object).width() / 2),
    "margin-top": -($(relative_object).height() / 2)
  })
}