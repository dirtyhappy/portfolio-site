

$("div.hamburger").on("click", function (){
  $("nav").slideToggle()
  $("div.hamburger span").toggleClass("hamburger-show")

})



$(document).on("scroll", function () {
var pageTop = $(document).scrollTop()
var pageBottom = pageTop + $(window).height()
var tags = $("section")

for (var i = 0; i < tags.length; i++) {
  var tag = $(tags[i])

  if ($(tag).position().top < pageBottom - 200) {
    $(tag).addClass("fade")
}
  else{
    $(tag).removeClass("fade")
  }

}})
