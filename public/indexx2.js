'use strict';

window.onload = function(){
    
  $(function(){
      // 変数に要素を入れる
      var open = $('.modal-open2'),
          close = $('.modal-close'),
          container = $('.modal-container2');
  
      // モーダルを表示する
      open.ready(function() {	
          container.addClass('active');
          return false;
        });
  
      //閉じるボタンをクリックしたらモーダルを閉じる
        close.on('click',function(){	
            container.removeClass('active');
      });
  });

            let start = document.getElementById('start')
            start.addEventListener('click',count_start, false);
};

//変数の定義---------------------------------------------------------------------
    let count   = 60; //カウントダウンの数字を格納する変数  １分なので60
    var min     = 0;    
    let sec     = 0;       //残り時間「秒」を格納する変数
    let start_f = false; 
    let interval;


//004----------スタート開始------------------------------------------------------
function count_start(){
//0041------------二度押しを防止する
        if (start_f === false) {
//0042------------1秒毎にcont_down関数を呼び出す
          interval = setInterval(count_down,1000);
          start_f = true;
        }
    }
//-----------------------------------------------------------------------------

//005------------カウントダウンの開始---------------------------------------------
    function count_down(){
        if(count === 1){
            let display = document.getElementById("default");
            display.style.color = 'red';
            display.innerHTML = "TIME UP!";
            $(function(){
              // 変数に要素を入れる
              var open = $('.modal-open'),
                  container = $('.modal-container');
              //開くボタンをクリックしたらモーダルを表示する
              open.ready(function(){	
                  container.addClass('active');
                  return false;
              });
          });
            clearInterval(interval);
            document.onkeydown = function keyEvent(e){
                e.preventDefault();
                };
        } else {

            count--;
//009----------Math.floor関数を使って小数点になった分を整数に変換する。---------------
            min = Math.floor(count / 60);
//010------------60秒で割ったあまりが秒となる-------------------------------------
            sec = count % 60;
            let count_down = document.getElementById("default");
            count_down.innerHTML = ("0"+min) +":" + ("0"+sec).slice(-2);
        }
    }
