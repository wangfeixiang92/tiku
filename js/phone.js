(function (doc, win) {
    // 检测移动端屏幕分辨率  不同的fontsize
    var docEl = doc.documentElement;
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//  var dpr = window.devicePixelRatio || 1;
//  var scale = 1 / dpr;
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
//      docEl.setAttribute('data-dpr',dpr)
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
//  docEl.setAttribute('data-dpr', dpr);
}(document,window))

//dpr 高清图的适配
$(document).ready(function(){
if (window.devicePixelRatio > 2) {
    var lowresImages = $('img');
//  console.log(lowresImages)
    lowresImages.each(function(i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace(/@2x./, "@3x.");
      $(this).attr('src', highres);
    });
}
});

