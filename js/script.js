$(function(){
  var imgs = ["kamui_wallpaper2.png", "2012-10-1920x1080.jpg", "wallpaper_notext.jpg", "2013_1920x1080_2.jpg", "1920x1080_nocalendar.png", "valentine_2014_fullhd.png", "forest_1920x1080.jpg", "1600x1200.jpg", "20131027wallpaper02.png", "pronama_book.jpg", "1980x1080.png", "1920x1080.png", "2013summer_wallpaper.png", "1920x1080.png.1", "1920x1080.jpg.2", "20140119wallpaper02.png", "valentine_2014_fullhd2.png", "wallpaper2014summer1.jpg", "1920x10802.jpg", "sunoko_wallpaper.png", "20131027wallpaper01.png", "2012-11_1980x1080_white.png", "20130430wallpaper01.png", "1920x1080.jpg", "1920x1200.jpg", "1920x1080.png.2", "1920x1080.jpg.1", "forest_1920x1080.jpg.1", "20131016_1920x1080.png", "snowboard_1920x10801.jpg", "Character01_Vis01.png", "wallpaper1920x1080.png", "201404.jpg", "casual_1920x1080.jpg", "valentine_1920x1080.jpg", "wallpaper_pronama26.png"];

  function choice(ar){
    return ar[(Math.random() * ar.length) | 0];
  }

  function draw(){
    //$(document.body).css('background-image', 'url(./img/' + choice(imgs) + ')');
    $('.image').attr('src', './img/' + choice(imgs));

  }
  function two(n){
    return ("0" + n).slice(-2);
  }
  function getDate(date){
    var y = date.getFullYear();
    var m = two(date.getMonth() + 1);
    var d = two(date.getDate());
    var h = two(date.getHours());
    var i = two(date.getMinutes());
    var s = two(date.getSeconds());

    return y + '/' + m + '/' + d + ' ' + h  + ':' + i + ':' + s
  }

  function drawClock(ctx, size){
    var d = new Date();

    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.translate(size/2, size/2);
    ctx.strokeStyle = 'black';

    ctx.lineWidth = 2;

    ctx.fillStyle = 'rgba(100,100,255,0.3)';
    ctx.beginPath();
    ctx.arc(0, 0, size / 2 - 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 3;

    // hour 
    var hour = (d.getHours() + d.getMinutes()/60)/12;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(Math.cos(hour * Math.PI * 2 - Math.PI / 2) * size/3, Math.sin(hour * Math.PI * 2 - Math.PI / 2) * size/3);
    ctx.stroke();

    // minutes 
    var min = d.getMinutes()/60;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(Math.cos(min * Math.PI * 2 - Math.PI / 2) * size/2, Math.sin(min * Math.PI * 2 - Math.PI / 2) * size/2);
    ctx.stroke();

    ctx.lineWidth = 1;
    // seconds 
    var sec = d.getSeconds()/60;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(Math.cos(sec * Math.PI * 2 - Math.PI / 2) * size/2, Math.sin(sec * Math.PI * 2 - Math.PI / 2) * size/2);
    ctx.stroke();

    ctx.restore();
  }

  setInterval(function(){
    $('.image').cssAnimate({opacity:0, left:-50},'slow',function(){
      draw();
      setTimeout(function(){
        $('.image').cssAnimate({opacity:1, left:0},3000);
      } ,1000);
    })
  }, 10000);
  draw();
  
  setInterval(function(){
    var d = new Date();
    $('.js-date').text(getDate(d));
    drawClock(ctx, 100);
  }, 1000);

  $('#canv').attr('width','100px');
  $('#canv').attr('height','100px');
  var canv = $('#canv')[0];
  var ctx = canv.getContext('2d');

});
