"use strict";

window.addEventListener("DOMContentLoaded",
  function() {
 //
 //
 $("header").textillate({
  loop:false, //
  minDisplayTime:2000, //
  initialDelay:2000, //
  autoStart:true, //
  in:{
    effect: "fadeInLeftBig", //
    delayScale: 1.5, //
    delay: 50, //
    sync: false, //
    shuffle: true //
  }
 });

  //
  $(function(){
    ScrollReveal().reveal("#btn1",{ duration: 9000});
  });

   this.setTimeout(
    function(){
     // 
    let popMsg ="いらっしゃい！おみくじ引いてって！";
    window.alert(popMsg);
    },
   "5000"
   );

  },false
  
  );


  //おみくじボタン1
  let soundEndflag ="0";//siund comtrol
  //おみくじの
  const btn1 = document.getElementById("btn1");
  const omikujiText = document.getElementById("omikujiText");
  const omikujiTextImage = document.getElementById("omikujiTextImage");
  btn1.addEventListener("click",
    function() {
      //sound countrol
      if(soundEndflag === "1"){
        soundControl("end","");
      }
        btn1.style.transition = "1s";//fukada-add
        let resultText =[
          "img/daikichi.png",
          "img/chukichi.png",
          "img/syokichi.png",
          "img/suekichi.png",
          "img/daikyo.png"
        ];
        let resultMaxSpeed = [10,10,8,5,5];
        let resultMaxSize = [30,30,30,40,30];
        let resultImage = [
          "img/star.png",
          "img/sakura_hanabira.png",
          "img/water1.png",
          "img/redLeaves4.png",
          "img/snowflakes.png"
        ];
        let resultSound =[
          "sound/omikuji_sound1.mp3",
          "sound/omikuji_sound2.mp3",
          "sound/omikuji_sound3.mp3",
          "sound/omikuji_sound4.mp3",
          "sound/omikuji_sound5.mp3",
        ]
        let n = Math.floor(Math.random() * resultText.length);

        omikujiTextImage.src = resultText[n];
        omikujiTextImage.classList.add("omikujiPaper");
        //
        omikujiTextImage.addEventListener("animationend",
          function() {
            omikujiTextImage.classList.remove("omikujiPaper");
          },false
        );
        //sound control
        w_sound = resultSound[n];
        soundControl("start",w_sound);
        soundEndflag ="1";
        //
        $(document).snowfall("clear");

        //
        $(document).ready(function(){
          $(document).snowfall({
            maxSpeed : resultMaxSpeed[n], //
            minSpeed : 1, //
            maxSize : resultMaxSize[n], //
            minSize : 1, //
            image : resultImage[n]
          });
        });

      }, false
    );

    //sound control
    let w_sound
    let music
    function soundControl(status,w_sound){
      if(status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
      } else if(status === "end") {
        music.pause();
        music.currentTime = 0;
      }
    }