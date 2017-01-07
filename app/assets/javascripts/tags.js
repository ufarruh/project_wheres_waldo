var APP = APP || {};

APP.tags = (function ()  {

  var clickListener = function () {
    $("#tagger").click(function(e) {
        _attachTag(e)
    });
  }

  var _attachTag = function (e) {
    var x = e.pageX - 19;
    var y = e.pageY - 19;
    $("body").append("<div class='newBox' style='left: " + x + "px; top: " + y + "px;'></div>")
  };

  var _renderForm = function () {};

  return {
    clickListener: clickListener
  }

})();


$(document).ready(function() {
  APP.tags.clickListener();
});
