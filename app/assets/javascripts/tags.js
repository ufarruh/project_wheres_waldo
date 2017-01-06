var APP = APP || {};


APP.tags = (function ()  {

  var stub = {};

  var clickListener = function () {
    $("#tagger").click(function() {
        console.log("hello!");
    });
  }

  var attachTag = function () {
    $("#tagger").click( function (e) {
      $("#newTag").remove("#newTag")
      $("body").append("<span id=\"newTag\"/>")
      $("#newTag").css("left", e.pageX - 19)
      $("#newTag").css("top", e.pageY - 19)
    });
  };

  return {
    clickListener: clickListener,
    attachTag: attachTag
  }

})();


$(document).ready(function() {
  //APP.tags.clickListener();
  APP.tags.attachTag();
});
