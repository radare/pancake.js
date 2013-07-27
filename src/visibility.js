P.onVisibilityChange = function (callback) {
  document.addEventListener ("visibilitychange", function() {
    callback (document.visibilityState == "visible");
  });
}
