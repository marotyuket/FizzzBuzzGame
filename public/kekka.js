'use strict';

const a = location.hash.substring(1);

document.getElementById('box').innerHTML = 'あなたのスコアは'
document.getElementById('box2').innerHTML = a
document.getElementById('box3').innerHTML = 'です!';

$(function () {
  var beforecode;

  $(document).on('keydown',function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    // inputやtextareaでのBackspaceは無効にしない
    var tagname = $(e.target).prop('tagName');
    if (keycode === 116
      || keycode === 17 && beforecode === 82 
      || keycode === 82 && beforecode === 17
      || keycode === 8 && (tagname !== 'INPUT' && tagname !== 'TEXTAREA')
      || keycode === 18 && beforecode === 37
      || keycode === 37 && beforecode === 18) {
      // 中断
      return false;
    }
    beforecode = keycode;
  });


  history.pushState(null, null, null);
  $(window).on('popstate', function(){
    history.pushState(null, null, null);
  });
});