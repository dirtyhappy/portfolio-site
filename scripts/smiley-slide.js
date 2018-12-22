$(document).ready(function (){
  var position = 0;

  setInterval(function (){
    position--;
    $(".rightsmile").css('margin-top', position);
  },30);
});
