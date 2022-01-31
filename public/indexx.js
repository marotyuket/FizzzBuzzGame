'use strict';

const state = { count:  1 };
const state2 = { count:  0 };

function kekkaa() {
  window.location.href = "kekka#" + counter2.innerHTML;
  
};

const kekka = document.getElementById('kekka');
kekka.onclick = kekkaa;

const btn1 = document.getElementById('Fizz');
const btn2 = document.getElementById('Buzz');
const btn3 = document.getElementById('FizzBuzz');
const btn4 = document.getElementById('Other');
const counter = document.getElementById('counter');
const counter2 = document.getElementById('counter2');
btn1.onclick = btn5;
btn2.onclick = btn6;
btn3.onclick = btn7;
btn4.onclick = btn8;
function btn5() {
  if ((counter.innerHTML % 3 === 0) && !(counter.innerHTML % 15 === 0) && !(counter.innerHTML % 15 === 0)) {
    counter.innerHTML = ++state.count;
    counter2.innerHTML = state2.count += 4972600;
    } else {
    counter2.innerHTML = state2.count -= 2486300;
  }
};
function btn6() {
    if ((counter.innerHTML % 5 === 0) && !(counter.innerHTML % 15 === 0) && !(counter.innerHTML % 3 === 0)) {
      counter.innerHTML = ++state.count;
    counter2.innerHTML = state2.count += 4972600;
    } else {
    counter2.innerHTML = state2.count -= 2486300;
    }
};
function btn7() {
  if (counter.innerHTML % 15 === 0) {
    counter.innerHTML = ++state.count;
    counter2.innerHTML = state2.count += 4972600;
    } else {
    counter2.innerHTML = state2.count -= 2486300;
  }
};
function btn8() {
  if ( (counter.innerHTML % 15 !== 0) && (counter.innerHTML % 5 !== 0) && (counter.innerHTML % 3 !== 0)) {
    counter.innerHTML = ++state.count;
    counter2.innerHTML = state2.count += 4972600;
    } else {
    counter2.innerHTML = state2.count -= 2486300;
  }
};

//戻れないようにする

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


var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}






